---
outline: deep
---

# Day03

## 接口 [interface]

> 为什么会出现接口

为了解决 继承 的困境（类继承只能继承一个）

还有一种情况，为了功能或者复用，或者提取的一些共性的东西，本身之间是没有关系的，用继承套娃也能实现，但是没有意义，也不是一个好的实现方式。（比如人能洗衣服，洗衣机能洗衣服，洗衣服是共同的功能，但是洗衣机和人是没有一个共同的父类的，这种情况用接口去提取并实现这个功能就比较合适）

> 我们可以用 `implements` 来实现接口

```ts
// 衣服接口
interface Clothes {
    washClothes():void
}

// 人类
class Person implements Clothes {
    washClothes(){
        console.log('人在洗衣服');
    }
}

// 洗衣机类
class WashMachine implements Clothes {
    washClothes(){
        console.log('洗衣机在洗衣服');
    }
}

```

> 接口可以多实现

```ts
// 衣服接口
interface Clothes {
    washClothes():void
}

// 吃接口
interface Eat {
    eatMeal():void
}

// 人类
class Person implements Clothes,Eat {
    washClothes(){
        console.log('人在洗衣服');
    }

    eatMeal(){
        console.log('人在吃饭');
    }
}


```

> 接口之间可以继承 

下面这个例子接口继承了另一个接口，这样人类就只需实现一个接口就行

```ts
// 衣服接口
interface Clothes {
    washClothes():void
}

// 吃接口
interface Eat extends Clothes {
    eatMeal():void
}

// 人类
class Person implements Eat {
    washClothes(){
        console.log('人在洗衣服');
    }

    eatMeal(){
        console.log('人在吃饭');
    }
}
```