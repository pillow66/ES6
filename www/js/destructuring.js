/**
 * Created by 1mango01 on 16/10/26.
 */

/*
//数组解构赋值
//模式匹配
//解构失败,变量等于undefined
//等号右边不是数组或可遍历结构,将会报错
//解构赋值允许指定默认值,ES6内部使用===判断一个值是undefined,则默认值生效,默认值如果是函数,惰性求值
{
    let [a,b,c] = [1, 2, 3];
    console.log(a); // 1

    //let [d] = null; // error
    let [foo = 6] = [];
    console.log(foo); // 6

    function f() {
        return 66;
    };
    let [x = f()] = [1];
    console.log(x); // 1

    //let [x = y, y = 1] = []; // error y尚未声明
}

//对象解构赋值
//对象的属性没有次序,变量必须与属性同名,可以为变量取别名
//使用let, const解构赋值写法变量声明和赋值一体,再度声明同名变量会报错
//支持默认值,生效条件 === undefined
{
    let {foo} = {foo: "a"}; // let {foo:foo} = {foo:"a"}
    console.log(foo); // a

    let {foo2:baz} = {foo2: "b"};
    console.log(baz); // b
    //console.log(foo2); // error foo2是模式不会赋值

    //let foo; // error

    let {message:msg = 'hello world'} = {};
    console.log(msg); // hello world
}

//字符串解构赋值
{
    let [a,b] = 'hello';
    console.log(a + b); // he

    let {length:len} = 'hello';
    console.log(len); // 5
}

//数值和布尔值结构赋值
//解构时等号右边是数值和布尔值,先转为对象
//null和undefined无法转对象,会报错
{
    let {toString:str1} = 123;
    str1 === Number.prototype.toString; // true

    let {toString:str2} = true;
    str2 === Boolean.prototype.toString; // true

    //let {prop:x } = unll; // error
}

//函数参数的解构赋值
{
    function add([x=6,y=7]) {
        return x + y;
    };

    function del({x, y} = {x: 0, y: 0}) {
        return x - y;
    };

    console.log(add([1, 2])); // 3
    console.log(add([])); // 13

    console.log(del({x: 5, y: 1})); // 4
    console.log(del()); // 0
}

//圆括号

//用途
//交换变量值
//从函数返回多个值
//函数参数定义
//函数参数默认值
//提取JSON
//遍历Map
//加载模块指定方法
{
    let x = 1;
    let y = 2;
    [x, y] = [y, x];
    console.log(x); // 2
    console.log(y); // 1

    function f() {
        return [1, 2, 3];
    };
    let [a,b,c] = f();
    console.log(a, b, c);

    function f2({x, y, z}) {
        console.log(x, y, z);
    };
    f2({z: 3, x: 1, y: 2}); // 无序参数

    let json = {
        id: 42,
        name: "lulu"
    };
    let {id, name} = json;
    console.log(id, name);

    let map = new Map();
    map.set('first', '1');
    for(let [key, value] of map){
        console.log(key, value);
    }

    //const {SourceMapConsumer, SourceNode} = require("source-map");
}
*/