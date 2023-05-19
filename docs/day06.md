---
outline: deep
---

# Day03

## 枚举 [enum]

> 常量是在项目中经常使用，虽然 `const` 可以声明常量，但是有的常量取值是在一个范围里的，这里我就需要使用 `enum` 来进行处理

### 1.数字枚举

```ts
// 枚举星期
enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

// 默认从 0 开始

console.log(Week.Monday) // 0
console.log(Week.Friday) // 4
console.log(Week.Sunday) // 6

// 也可以 通过下标获取
console.log(Week[0]) // Monday
console.log(Week[2]) // Wednesday 
console.log(Week[6]) // Sunday

```

> 可以修改枚举中的初始值

```ts
// 枚举星期
enum Week { 
    Monday = 3, 
    Tuesday,
    Wednesday, 
    Thursday, 
    Friday, 
    Saturday,
    Sunday,
}  

// 修改之后一次增加

console.log(Week.Monday) // 3
console.log(Week.Sunday) // 9

```

### 2.字符串枚举

```ts
// 枚举星期
enum Week {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
 	Sunday = 'Sunday',
}

// 获取一个值后，对 week 枚举的值进行匹配
const value = 'Tuesday'
if (value === Week.Tuesday) {
    console.log('匹配成功')
} else {
    throw new Error('匹配失败')
}

```

### 3.常量枚举

在 `enum` 前面添加一个 `const` 即可，它提高了性能

通过编译后的js对比一下：

```js

// 枚举星期
var Week;
(function (Week) {
    Week["Monday"] = "Monday";
    Week["Tuesday"] = "Tuesday";
    Week["Wednesday"] = "Wednesday";
    Week["Thursday"] = "Thursday";
    Week["Friday"] = "Friday";
    Week["Saturday"] = "Saturday";
    Week["Sunday"] = "Sunday"; 
})(Week || (Week = {}));

// 获得一个值后，对 week 枚举的值进行匹配
var value = 'Tuesday';
if (value === Week.Tuesday) {
    console.log('匹配成功')
} else {
    throw new Error('匹配失败')
} 

```

而常量枚举编译后的对比为

```js
// 常量枚举直接找出 Week.Tuesday 上面一截都没了
var value = 'Tuesday';
if (value === "Tuesday") {
    console.log('匹配成功')
} else {
    throw new Error('匹配失败')
}
```