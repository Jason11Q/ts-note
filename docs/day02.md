---
outline: deep
---

# Day02

## 复杂类型

### Array 类型

> 推荐第一种写法，第二种为泛型写法。

```ts
let arr:string[] = ["a", "b"];
let array:Array<string> = ["a", "b"];

arr.push(8); // Argument of type 'number' is not assignable to parameter of type 'string'
array = ['c', 'd', 6]; // Type 'number' is not assignable to type 'string'

```
> 多类型数组

```ts
let arr2:(number|string)[] = [1, 'a'];
arr2 = ['b', 2];
```

### 元组

> 可以理解为多类型且固定类型顺序的数组

```ts
let tuple:[string,boolean]= ['test', true];
```

### 接口

> interface,一般用于类型约束或者方法组合继承等

```ts
interface Device {
    type:string,
    width:number,
    height:number
}

// 定义 phone
let phone :Device = {
    type:'iPhone',
    width:0.07,
    height:0.18
}

```
- 属性*后*添加?表示可空属性
- 属性*前*添加readonly表示只读属性

### 函数

> function 可以规定函数的输入类型和返回类型进行约束
> 在*形参后面*接冒号声明 形参的类型，在*（）后面*冒号声明 返回值类型

- 传入多余的参数会报错
- 同上支持可选参数？，可选参数只能是最后一个参数，后面不能再声明规定类型的形参
- 支持表达式写法

```ts
function sum(num1:number,num2:number):number {
    return num1+num2;
}

sun(1,2);
sum(1,2,3);// Error

function sumThree(num1:number,num2:number,num3?:number):number {
    return num1+num2;
}

sumThree(1,2);
sumThree(1,2,3);

// function error
function sumFour(num1:number,num2:number,num3?:number,z:number):number {
    return num1+num2;
}

// function OK
function sumMore(num1:number,num2:number,num3?:number,z?:number):number {
    return num1+num2;
}

//除了上面声明式写法，还有一种表达式写法
const sunLambda = (num1:number,num2:number,num3?:number):number=>{
    return num1+num2;
}
```

> 使用变量定义函数类型

```ts
const sunLambda = (num1:number,num2:number,num3?:number):number=>{
    return num1+num2;
}
// ()里面是输入的形参的 类型
// => 代表是 返回值 的类型
// : 后面的都是声明类型，和代码逻辑没有关系
let mySum:(num1:number,num2:number,num3?:number)=>number=sunLambda;
```





