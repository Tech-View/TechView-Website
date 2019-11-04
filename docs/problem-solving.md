---
id: problem-solving
title: Problem Solving
sidebar_label: Problem Solving
---

## Given a list of ordered integers with some of the numbers missing (and with possible duplicates), find the missing numbers. Example: `missingInts([1, 1, 2, 5, 8, 8]) //[3, 4, 6, 7]`

```javascript
function missingInts(arr = []) {
  let result = null;
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    result = arr[x + 1] - arr[x];
    if (result > 1) {
      for (let y = 1; y < result; y++) {
        newArr.push(arr[x] + y);
      }
    }
  }
  return newArr;
}
```



