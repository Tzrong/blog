---
title: 关于javaScript的练习
sidebar: auto
sidebarDepth: 2
---

## 实现数组的 map 方法

数组的 map 方法创建一个新的数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值

方法一：

```js
Array.prototype.myMap = function(fn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this));
    }
    return result;
};
```

方法二：利用 reduce 实现数组的 map 方法

```js
Array.prototype.myMap2 = function(fn) {
    return this.reduce((acc, cur, index) => {
        acc.push(fn(cur, index, this));
        return acc;
    }, []);
};
```

## 实现一个函数，每次调用 foo 会返回 foo 被访问次数，foo.clear()归零

```js
function foo() {
    if (!foo.count) {
        foo.count = 1;
    } else {
        foo.count++;
    }
    return foo.count;
}
foo.clear = function() {
    this.count = 0;
    return this.count;
};
foo(); // 1
foo(); // 2
foo(); // 3
foo.clear(); // 0
```

## 整数反转

利用数组的反转方法

```js
let reverse = function(x) {
    if (isNaN(x)) return;
    let isSign = Math.sign(x);
    let result =
        Number(
            Math.abs(x)
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * isSign;
    if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    return result;
};
reverse(123); // 321
reverse(-123); // -321
reverse(120); //21
```
