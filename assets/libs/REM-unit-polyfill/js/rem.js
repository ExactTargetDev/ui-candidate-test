(function (window, undefined) {
    "use strict";
    // test for REM unit support
    var cssremunit =  function() {
        var div = document.createElement( 'div' );
            div.style.cssText = 'font-size: 1rem;';

        return (/rem/).test(div.style.fontSize);
    },

    // filter returned links for stylesheets
    isStyleSheet = function () {
        var styles = document.getElementsByTagName('link'),
            filteredLinks = [];

        for ( var i = 0; i < styles.length; i++) {
            if ( styles[i].rel.toLowerCase() === 'stylesheet' && styles[i].getAttribute('data-norem') === null ) {

                filteredLinks.push( styles[i].href );
            }
        }

        return filteredLinks;
    },

   processLinks = function () {
        //prepare to match each link
        for( var i = 0; i < links.length; i++ ){
            xhr( links[i], storeCSS );
        }
    },

    storeCSS = function ( response, link ) {

        preCSS.push(response.responseText);
        CSSLinks.push(link);

        if( CSSLinks.length === links.length ){
            for( var j = 0; j <  CSSLinks.length; j++ ){
                matchCSS( preCSS[j], CSSLinks[j] );
            }

            if( ( links = importLinks.slice(0) ).length > 0 ){ //after finishing all current links, set links equal to the new imports found
                CSSLinks = [];
                preCSS = [];
                importLinks = [];
                processLinks();
            } else {
                buildCSS();
            }
        }
    },

    matchCSS = function ( sheetCSS, link ) { // collect all of the rules from the xhr response texts and match them to a pattern
        var clean = removeMediaQueries( sheetCSS ).replace(/\/\*[\s\S]*?\*\//g, ''), // remove MediaQueries and comments
            pattern = /[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:!;,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!;,.'"*()]*\}/g, //find selectors that use rem in one or more of their rules
            current = clean.match(pattern),
            remPattern =/\d*\.?\d+rem/g,
            remCurrent = clean.match(remPattern),
            sheetPathPattern = /(.*\/)/,
            sheetPath = sheetPathPattern.exec(link)[0], //relative path to css file specified in @import
            importPattern = /@import (?:url\()?['"]?([^'\)"]*)['"]?\)?[^;]*/gm, //matches all @import variations outlined at: https://developer.mozilla.org/en-US/docs/Web/CSS/@import
            importStatement;

        while( (importStatement = importPattern.exec(sheetCSS)) !== null ){
            if( importStatement[1].indexOf("/") === 0 ) { // check if the value of importStatement[1] is a root relative path, in which case it shouldn't be concatenated with sheetPath
                importLinks.push( importStatement[1] );
            } else {
                importLinks.push( sheetPath + importStatement[1] );
            }
        }

        if( current !== null && current.length !== 0 ){
            found = found.concat( current ); // save all of the blocks of rules with rem in a property
            foundProps = foundProps.concat( remCurrent ); // save all of the properties with rem
        }
    },

    buildCSS = function () { // first build each individual rule from elements in the found array and then add it to the string of rules.
        var pattern = /[\w\d\s\-\/\\%#:,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!,.'"*()]*[;}]/g; // find properties with rem values in them
        for( var i = 0; i < found.length; i++ ){
            rules = rules + found[i].substr(0,found[i].indexOf("{")+1); // save the selector portion of each rule with a rem value
            var current = found[i].match( pattern );
            for( var j = 0; j<current.length; j++ ){ // build a new set of with only the selector and properties that have rem in the value
                rules = rules + current[j];
                if( j === current.length-1 && rules[rules.length-1] !== "}" ){
                    rules = rules + "\n}";
                }
            }
        }

        parseCSS();
    },

    parseCSS = function () { // replace each set of parentheses with evaluated content
        for( var i = 0; i < foundProps.length; i++ ){
            css[i] = Math.round( parseFloat(foundProps[i].substr(0,foundProps[i].length-3)*fontSize) ) + 'px';
        }

        loadCSS();
    },

    loadCSS = function () { // replace and load the new rules
        for( var i = 0; i < css.length; i++ ){ // only run this loop as many times as css has entries
            if( css[i] ){
                rules = rules.replace( foundProps[i],css[i] ); // replace old rules with our processed rules
            }
        }
        var remcss = document.createElement( 'style' );
        remcss.setAttribute( 'type', 'text/css' );
        remcss.id = 'remReplace';
        document.getElementsByTagName( 'head' )[0].appendChild( remcss );   // create the new element
        if( remcss.styleSheet ) {
            remcss.styleSheet.cssText = rules; // IE8 will not support innerHTML on read-only elements, such as STYLE
        } else {
            remcss.appendChild( document.createTextNode( rules ) );
        }
    },

    xhr = function ( url, callback ) { // create new XMLHttpRequest object and run it
        try {
            //try to create a request object
            //arranging the two conditions this way is for IE7/8's benefit
            //so that it works with any combination of ActiveX or Native XHR settings, 
            //as long as one or the other is enabled; but if both are enabled
            //it prefers ActiveX, which means it still works with local files
            //(Native XHR in IE7/8 is blocked and throws "access is denied",
            // but ActiveX is permitted if the user allows it [default is to prompt])
            var xhr = window.ActiveXObject ? ( new ActiveXObject('Microsoft.XMLHTTP') || new ActiveXObject('Msxml2.XMLHTTP') ) : new XMLHttpRequest();

            xhr.open( 'GET', url, true );
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 ){
                    callback(xhr, url);
                } // else { callback function on AJAX error }
            };

            xhr.send( null );
        } catch (e){
            if ( window.XDomainRequest ) {
                var xdr = new XDomainRequest();
                xdr.open('get', url);
                xdr.onload = function() {
                    callback(xdr, url);
                };
                xdr.onerror = function() {
                    return false; // xdr load fail
                };
                xdr.send();
            }
        }
    },

    // Remove queries.
    removeMediaQueries = function(css) {
        // Test for Media Query support
        if ( !window.matchMedia && !window.msMatchMedia ) {
            // If the browser doesn't support media queries, we find all @media declarations in the CSS and remove them.
            // Note: Since @rules can't be nested in the CSS spec, we're safe to just check for the closest following "}}" to the "@media".
            css = css.replace(/@media[\s\S]*?\}\s*\}/g, "");
        }

        return css;
    };

    if( !cssremunit() ){ // this checks if the rem value is supported
        var rules = '', // initialize the rules variable in this scope so it can be used later
            links = isStyleSheet(), // initialize the array holding the sheets urls for use later
            importLinks = [], //initialize the array holding the import sheet urls for use later
            found = [], // initialize the array holding the found rules for use later
            foundProps = [], // initialize the array holding the found properties for use later
            preCSS = [], // initialize array that holds css before being parsed
            CSSLinks = [], //initialize array holding css links returned from xhr
            css = [], // initialize the array holding the parsed rules for use later
            fontSize = '';

        // Notice: rem is a "root em" that means that in case when html element size was changed by css
        // or style we should not change document.documentElement.fontSize to 1em - only body size should be changed
        // to 1em for calculation

        fontSize = (function () {
            var doc = document,
                docElement = doc.documentElement,
                body = doc.body || doc.createElement('body'),
                isFakeBody = !doc.body,
                div = doc.createElement('div'),
                currentSize = body.style.fontSize,
                size;

            if ( isFakeBody ) {
                docElement.appendChild( body );
            }

            div.style.cssText = 'width:1em; position:absolute; visibility:hidden; padding: 0;';

            body.style.fontSize = '1em';

            body.appendChild( div );
            size = div.offsetWidth;

            if ( isFakeBody ) {
                docElement.removeChild( body );
            }
            else {
                body.removeChild( div );
                body.style.fontSize = currentSize;
            }

            return size;
        }());

        processLinks();
    } // else { do nothing, you are awesome and have REM support }

})(window);
