# deep.js

**deep.js** is a small plugin that you can include in your projects and libraries. It can easily simulate nested loops, no matter what the depth is. It can be used as an alternative for nested `for` or `forEach` loops (see Performance section). It is inspired from `itertools.product` function in Python.

Normally, 3 nested `for` loops take up this much space:
```js
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 4; k++) {
            console.log(i, j, k)
        }
    }
}
```
With **deep.js**, it can turn into a one-liner:
```js
deep([2, 3, 4], (i, j, k) => console.log(i, j, k))
```
---
Perhaps you are parsing a 5 dimensional array:
```js
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 4; k++) {
            for (var l = 0; l < 3; l++) {
                for (var m = 0; m < 2; m++) {
                    doSomething(arr[i][j][k][l][m])
                }
            }
        }
    }
}
```
With **deep.js**, 
```js
deep([2, 3, 4, 3, 2],
     (i, j, k, l, m) => doSomething(arr[i][j][k][l][m])
)
```


## Performance
According to my computer, it's 40% slower than `for`. Its performance is similar to `forEach` , which is 39% slower than `for` . (See the benchmark in https://jsperf.com/deepfor) Thus, when it comes to performance, it can only be considered as a replacement for nested `forEach`, not `for`. However, if the task is not CPU-intensive, this plugin can be effortlessly used instead of classical `for`.

## Credit
ffriend's answer in [this](https://stackoverflow.com/questions/4331092/finding-all-combinations-of-javascript-array-values) stackoverflow question