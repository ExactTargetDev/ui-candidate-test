function Benchmark(func) {
    var start = performance.now();
    func();
    var duration = performance.now() - start;
    // console.log('Benchmark: ', duration);
    return duration;
}

function Compare(func, reps){
    reps = reps || 100;
    var t = [];
    var avg = [];
    for(var i = 0; i<func.length ; i++){
        t[i] = 0;
    }

    for(var i = 0; i<func.length ; i++){
        for(var r = 0; r<reps ; r++){
            t[i] += Benchmark(func[i]);
        }
    }

    for(var i = 0; i<func.length ; i++){
        avg[i] = t[i]/reps;
    }

    var fastestTime = Math.min.apply(this, avg);
    var result = {
        averages: avg,
        result: "Function" + (avg.indexOf(fastestTime)+1) + " is the fastest"
    };

    console.log("Compare Result: ", result);
    return result;
}



// Test Functions
// function f1(values){
//     var read = {};
//     var arr = [];
//     for(var i=0; i<values.length; i++){
//         var val = values[i];
//         if(read[val] !== true){
//             arr.push(val);
//         }
//         read[val] = true;
//     }
//     return arr;
// }
//
// function f2(values){
//     var read = {};
//     for(var i=values.length-1; 0 <= i; i--){
//         var val = values[i];
//         if(read[val] === true){
//             values.splice(i,1);
//         }
//         read[val] = true;
//     }
//     return values;
// }
// var Arr = [];
// Compare([f1.bind(this, Arr), f2.bind(this, Arr)]);
