/**
 * Created by 1mango01 on 16/10/26.
 */

'use strict';


//let区块内声明
//不存在变量提升
//暂时性死区
//不允许重复声明
//ES6允许在块级作用域中声明函数,块级作用域中之外不可引用该函数
//考虑环境导致行为差异太大,避免在块级作用域内声明函数,确有需要,使用函数表达式语法
{
    let a = 1;
    var b = 1;
}
//console.log(a); // error
console.log(b); // 1

{
    console.log(foo); // undefined
    console.log(bar); // error

    var foo = 2;
    let bar = 2;
}

{
    var tmp = 123;
    {
        // TDZ start
        tmp = 'abc'; // error
        let tmp;
        // TDZ end
    }
}

{
    let a = 10;
    //let a = 1; // error
}

{
    let f = function () {
    };
}

//const声明一个只读常量,一旦声明,值不改变
//声明时就要初始化
//其他特性同let
//const只保证变量名指向地址不变,并不保证该地址的数据不变,冻结对象使用Object.freeze()
{
    const pi = 3.14;
    //pi = 6; // error
}

{
    //const pi; // error
}

{
    const foo = {};
    foo.prop = 6;

    const bar = Object.freeze({});
    bar.prop = 6; // error
}

//ES6全局变量let, const, class逐步与顶层对象(window, global)属性脱钩
{
    var a = 1;
    window.a; // 1

    let b = 1;
    window.b; // undefined
}