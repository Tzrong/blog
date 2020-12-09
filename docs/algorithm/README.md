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

## 判断变量是否相等

JavaScript 提供三种不同的值比较操作

-   严格相等比较，使用===
-   抽象相等比较，使用==
-   Object.is(x,y)[ES6 新特性]：同值相等（推荐使用）
    补充：

1. ===: 进行相同的比较，不进行类型转换(如果类型不同，总是返回 false)
2. ==: 执行类型转换，比较两个值是否相等
3. Object.is: 与===相同，但是对于 NaN 和-0 和+0 进行特殊处理，Object.is(NaN, NaN)为 true，Object.is(+0, -0)是 false

## 删除字符串中的所有相邻重复项

给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
在 S 上反复执行重复项删除操作，直到无法继续删除。
在完成所有重复项删除操作后返回最终的字符串。答案保证唯一

```
输入：'abbaca',
输出：'ca'
解释：
例如，在'abbaca'中，可以删除'bb'，得到'aaca',再去删除'aa',得到字符串为'ca'
```

思路：遍历字符串，
取出栈头字符，判断当前字符与栈头字符是否一致

-   不一致，栈头字符进栈，当前字符进栈
-   一致，即栈头字符与当前字符相同相邻，都不需要进栈，直接进入下次遍历

```js
const removeRepeat = (str) => {
    const result = [];
    for (cur of str) {
        let pre = result.pop();
        if (pre !== cur) {
            pre && result.push(pre);
            result.push(cur);
        }
    }
    return result.join('');
};
```

## 树形结构查找符合条件的元素

```js
const arr = [
    {
        label: '1',
        children: [
            {
                label: '1-1',
            },
            {
                label: '1-2',
            },
        ],
    },
    {
        label: '2',
        children: [
            {
                label: '2-1',
            },
            {
                label: '2-2',
            },
        ],
    },
];
// 方法一
function findTallyOne(arr, value) {
    for (let item of arr || []) {
        if (item.label === value) return item;
        const result = findTallyOne(item.children, value);
        if (result) return result;
    }
}
// 方法二
function findTallyOne2(arr, value) {
    const temp_data = [...arr];
    while (temp_data.length) {
        const result = temp_data.shift();
        if (result.label === value) return result;
        result.children && temp_data.push(...result.children);
    }
}
```

## 数组常用方法

-   生成[1, 100]这样的数组

```js
let arr = new Array(100).fill(0).map((item, index) => index + 1);
```

-   数组解构赋值

```js
// 交换变量
let a = 1;
let b = 2;
[a, b] = [b, a]; // a为1:b为2
```

-   数组浅拷贝

```js
const arr = [1, 2, 3];
const arrClone = [...arr];
arr.slice(0, arr.length) / Arror.from(arr);
```

-   数组合并

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
arr1.concat(arr2);
```

-   数组取交集

```js
const a = [0, 1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7, 8];
const duplicatedValues = [...new Set(a)].filter((item) => item.includes(item));
```

-   数组取差集

```js
const a = [0, 1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7, 8];
const diffValues = [...new Set([...a, ...b])].filter((item) => !b.includes(item) || !a.includes(item));
```

-   数组转对象

```js
const arr = [1, 2, 3, 4];
const newObj = { ...arr }; // {0: 1, 1: 2, 3: 3, 3: 4}
// 使用Array.from()将类数组转化为数组
const obj = { 0: 0, 1: 1, 2: 2, length: 3 };
const newArr = Array.from(obj); // [0, 1,2]
```

-   巧用 reduce

```js
const arr = [1, 2, 3, 4, 5];

// 方法1  遍历了两次，效率低
const value = arr.filter((item) => item % 2 === 0).map((item) => ({ value: item }));

// 方法1  一次遍历，效率高
const value = arr.reduce((prev, curr) => {
    return curr % 2 === 0 ? [...prev, curr] : prev;
}, []);
```

-   常见的深浅拷贝方法
