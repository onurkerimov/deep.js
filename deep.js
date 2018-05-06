/*
 * deep.js v0.1
 * Copyright (c) 2018 Onur Kerimov
 * http://github.com/onurkerimov
 * Licensed under the MIT license
 */

function deep(arr, callback) { 

    if (arr.length === 1) {
        var rng = range(arr)
        return customForEach(rng, callback)
    } else if (typeof arr === 'number'){ 
        var rng = range([arr])
        return customForEach(rng, callback)
    }
    // reverse
    arr = arr.reverse()

    // generate ranges
    var rng = range(arr)

    // render possible cases
    var comb = allPossibleCases(rng)

    // reverse again
    comb = comb.map(el => el.reverse())

    // callback
    customForEach(comb, callback)

    function range(arr) {
        arr = arr.map((num) => {
            var el = []
            for (var i = 0; i < num; i++) {
                el.push(i)
            }
            return el
        })
        return arr
    }

    function customForEach(dis, callback) {
        customMap(dis, callback);
        return dis;

        function customMap(dis, callback) {
            var results = []
            for (var i = 0; i < dis.length; i++) {
                results.push(callback.call(dis, ...dis[i], i));
            }
            return results;
        }
    }

    function allPossibleCases(arr) {
        // https://stackoverflow.com/questions/4331092/finding-all-combinations-of-javascript-array-values
        if (arr.length == 1) {
            return arr[0];
        } else {
            var result = [];
            var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
            for (var i = 0; i < allCasesOfRest.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    var temp = Array.of(arr[0][j]).concat(allCasesOfRest[i])
                    result.push(temp);
                }
            }
            return result;
        }
    }
}