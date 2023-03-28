# Day01

## 类型检查

```ts
const a:string = 1; // error -> Type 'number' is not assignable to type 'string'.
```

## 八种内置类型

```ts
const str: string = 'China';
const num: number = 666;
const bool: boolean = true;
const u: undefined = undefined;
const n: null = null;
const big: bigint = 100n;
const sym: symbol = Symbol('a');
const obj: object = { a: 1 };
```

**默认情况 null 和 undefined 是所有类型的子类型，可以赋值给任意类型**
> 如果在 tsconfig.json 里配置了 "strictNullChecks":true，<br/>
null就只能赋值给any、unknown和它本身的类型（null）;<br/>
undefined就只能赋值给any、unknown、void和它本身的类型（undefined）<br/>
没有 tsconfig.json ,则默认为开启

## 同一个作用域下变量不能多次声明

```ts
let num: number = 1; //Cannot redeclare block-scoped variable 'num'
```

> 这种情况可以使用 { } 来隔离作用域

```ts
{
  let big: bigint = 100n;
  let num: number = 1;
  big = num; //Type 'number' is not assignable to type 'bigint'. (ts2322)
}
```
