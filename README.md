# ExactTarget UI Candidates 

This is the candaidate test for Salesforce Marketing Cloud UI developers. It is **NOT** pass/fail. It is intended to provide insight into the range of your skill set. Please do what you can.

Read *ALL* bullet points.

Please title your pull request with "ATTENTION: _&lt;Name of your Salesforce Contact&gt;"_

## Here are the guidelines for the test:
+ Be sure to read all the bullet points below.
+ Please take no longer than 48 hours from first commit (see meta.txt bellow) unless otherwise requested.
+ Any method you write MUST have an associated unit test, all unit tests must reside in the /tests directory.
+ All tests MUST pass, any untested code will not be considered a valid test.
+ UnitTest: relative path to your own unit test suite
+ Fork this repository, do your work, commit early/often with descriptive messages. When finished, send a pull request.
+ The "JsAndDom.*" (html and js) files have a series of questions/tasks for you to complete.
+ The "UI_CandidateTest_IMH_dashboard.*" files (png and psd) are for you to replicate.
+ You may use any JavaScript and/or CSS library you wish, or none at all.
+ You may use an external or inline JavaScript file(s).
+ Filenames must remain the same as in the original repository.
+ testdata.txt contains the data your code will be run against. You may use it as you wish in your code and/or testing.
+ For browsers, your code should run without errors on the latest of the major browsers.
+ You get to define 'latest' and 'major', but be prepared to defend your choices.
+ Yes, you MUST include IE, but only 8 or higher.

## First task to be completed
+ Create a meta.txt file that includes the following information:
+ Start Time: [unix timestamp]
+ This should be your first commit.

### Bonus points by adding the following to meta.txt file
+ TotalTime: HHmm
+ BrowserTesting: Browser.name Browser.version etc

## Portions of the test which MUST be 100% functional
+ Small and Medium panels in the "Pulse" window must be able to toggle with a click, only 1 panel can be in "Medium View" at any given time.
+ Each item under the "Interactive Marketing Hub" must have hovers and click states associated with them.
+ Clicking help link must load and parse a JSON object (help.json) with help details which are then rendered onscreen. Bonus points for help as an overlay dialog.

##Authors

**Adam Alexander**

+ http://twitter.com/adamalex
+ http://github.com/adamalex

**Matt Beard**

+ http://github.com/mbeard

**Bryan Kohlmeier**

+ http://github.com/bkohlmeier

**Kevin Parkerson**

+ http://github.com/kevinparkerson

**Stephen Williams**

+ http://twitter.com/swilliamsui
+ http://github.com/swilliamsui

**Jason Schmidt**

+ http://twitter.com/zannalov
+ https://github.com/zannalov

**Benjamin Dean**

+ http://twitter.com/bdeanet
+ http://github.com/creatovisguru

**Scott Plumlee**

+ http://github.com/plumlee

**Stephen Barker**

+ http://github.com/sbarkerET
+ http://twitter.com/sbarkerET
