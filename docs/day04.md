---
outline: deep
---

# Day03

## 类 [class]

在 `ES6` 中就有 类 的概念了，在 `TS` 中对类添加一些功能，这里直说下几个常用的

> 先写个基础的 类

```js
class Parent {
    constructor(name) {
        this.name = name;
    }
    eat(){
        console.log(`${this.name}在吃饭`);
    }    
}

let zs = new Parent('张三');
zs.eat(); // "张三在吃饭"

```

> 我们先来说下 `3` 个访问修饰符

`Public` ：修饰的属性或方法时共有的，在 `任何地方` 都能访问

`Private` ：修饰的属性或方法是私有的，只有 `本类` 中能访问

`Protected` ：修饰的属性或方法是受保护的，在 `本类` 和 `子类中` 能够访问

比如指定父类中 `money` 访问权限为 `private` ，只能在 `Parent` 访问，子类访问会出错。

```ts
class Parent {
    public name:string;
    private money:number;
    constructor(name:string) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name}在吃饭`);
    }
}

class Son extends Parent { 
    private son_money:number;
    constructor(name:string) {
        super(name);
        this.son_money = super.money; // Error: Access to protected member money on a class that is not a subclass of Parent.
        // "money" 为私有属性，只能在类 "Parent" 中访问        
    }
}

```

我们可以设置访问权限为 `protected` ，这样子类就能访问

```ts
class Parent {
    public name:string;
    protected money:number;
    constructor(name:string) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name}在吃饭`);
    }
}

class Son extends Parent { 
    private son_money:number;
    constructor(name:string) {
        super(name);
        this.son_money = super.money; 
    }
}

```

> 静态属性 `static`

上面的 `name money` 这两个属性都是通过 实例 去访问的

使用 `static` 修饰符的属性是通过 类 去访问，是每个实例共有的

同样 `static` 可以修饰方法，用 `static` 修饰的方法为 类方法，可以使用类直接调用

```ts
class Parent {
    static species:string = 'human';
    public name:string; 
    private money:number;
    constructor(name:string){
        this.name = name;
    }
    eat() {
        console.log(`${this.name}在吃饭`);
    }
}

console.log(Parent.species);

```

> 只读 `readonly` 

我们给属性添加上 `readonly` 就能保证该属性 `只读，不能修改`，如果存在 `static` 修饰符，写在其后

```ts
class Parent {
    static readonly species:string = 'human';
    public name:string; 
    private money:number;
    constructor(name:string){
        this.name = name;
    }
    eat() {
        console.log(`${this.name}在吃饭`);
    }
}

Parent.species = 'dog'; // error: species is read only
// 无法分配到 "species" ，因为它是只读属性


```

> 抽象类 `abstract`

`TS` 新增的抽象类，还是简单说下概念吧，我们写一个累的时候，不希望直接使用该类创建实例 **（不能被new）** ，那么我们把它设置为抽象类，让它不能被实例化

只能被继承

在 `class` 前面 添加 `abstract` 修饰符

在抽象类中 可以写 *`抽象方法`*，抽象类没有方法体

举个例子：一个动物的抽象类，有个叫的方法，不可能 每个动物的叫声一样吧，我们可以把它设置为抽象方法，具体功能子类进行实现（该怎么叫就由子类来写）

```ts
abstract class Animal {
    public name:string;
    constructor(name:string) {
        this.name = name;
    }
    abstract braking(): void;
}

class Cat extends Animal {
    constructor(name:string) {
        super(name);
    }
    barking() {
        console.log('喵 ~ 喵 ！喵？');
    }
}

````

