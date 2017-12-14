/**
 * Created by 1mango01 on 16/10/26.
 */
//函数参数的默认值
//参数变量是默认声明,不可用let,const再次声明
//与解构赋值默认值结合使用
//参数默认值应该是尾参数,否则参数无法省略
//指定了参数默认值后,length属性失真,length = 函数参数个数 - 指定了默认值的参数个数
//参数默认值是一个变量,先当前函数作用域取值后全局作用域取值
{
    function log(x, y = '66') {
        console.log(x, y);
    };
    log('hello'); //hello, 66

    function foo({x = 2, y = 6}) {
        console.log(x, y);
    };
    log(foo({x: 1})); //1,6
    log(foo({x: undefined, y: 7})); //2,7
    console.log(foo.length); //0

    let x = 6;

    function f(x, y = x) {
        console.log(y);
    };
    f(2); //2
}

//rest参数(...变量名),将函数参数变成一个数组,代替arguments对象
//rest参数后不能在跟其他参数
{
    function add(...values) {
        for (let v of values) {
            console.log(v);
        }
    };

    add(1, 2, 3); //1,2,3
}

//扩展运算符(...),rest参数的逆运算,将数组转为逗号分隔的参数序列,代替apply方法
{
    function add(x, y, z) {
        console.log(x + y + z);
    }

    add(...["1", "2", "3"]); //add("1", "2", "3");
}
