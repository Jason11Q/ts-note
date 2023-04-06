---
outline: deep
---

# Day03

## 复杂类型

### 联合类型 [union types]

> 如果一个变量类型可能是几种类型的时候，我们可以用 `any` ，但是 `any` 的范围太大了，不到万不得已不使用。
> 我们如果知道是其中的哪几种类型的话，我们可以使用联合类型来定义（使用 | 分割）

```ts
// 联合类型
let abc : number | string;
abc = '123';
abc = 123;
```

**注意：**：在没有赋值之前，只能访问功能的方法、属性

```ts
abc.toString();
abc.valueOf();
abc.length; // Property 'length' does not exist on type 'string | number'.  Property 'length' does not exist on type 'number'.(2339)
```

### 对象 [object]

> 直接 `let a: object;` 没有意义，`js` 中对象太多了

```ts
let person:{name:string; age:number}
person = {
    name: 'John',
    age: 34
}
```
> 属性必须在类型 `{ name: string, age: number }` 中

### 断言 [type inference]

> 当在上面联合类型的变量传入的时候，我们声明了这个类型为 `number | string` 它能不能调用 `length` 属性或方法。
> 机器没法判断这个类型，但是我们比机器更了解这个类型，我们人为可以指定类型 `string` 这里我们就可以用到类型断言

1.使用 `as` 来进行断言

```ts
function getLength(params: number | string): number {
    const str = params as string;
    if (str.length){
        return str.length;
    }
    return str.toString().length;    
}
```

2.还有一种写法 `<类型>` ，两者的功能都是一样的

```ts
function getLen(params: number | string): number {
    const str = <string>params;
    if (str.length){
        return str.length;
    }
    return str.toString().length;    
}
```

### 类型守卫 [type guard]

> 遇到联合离线的时候，使用 `类型守卫` 可以缩小范围

```ts
function getLength2(params: number | string): number {
    if (typeof params === "string") {
        return params.length;
    }
    return params.toString().length;
}
```

> 类型守卫 除了 `typeof` 之外，还有 `instanceof 、 in`





