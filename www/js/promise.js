/**
 * Created by 1mango01 on 16/10/26.
 */

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
            value  => P.resolve(callback()).then(() => value),
            reason => P.resolve(callback()).then(() => {
            throw reason
        })
    );
};

Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
        .catch(function (reason) {
            // 抛出一个全局错误
            setTimeout(() => {
                throw reason
            }, 0);
        });
};

function runAsync1() {
    let p = new Promise(function (resolve, reject) {
        console.log('begin 1');
        setTimeout(()=> {
            resolve('data 1');
        });
    });

    return p;
};

function runAsync2() {
    let p = new Promise(function (resolve, reject) {
        console.log('begin 2');
        setTimeout(()=> {
            resolve('data 2');
        });
    });

    return p;
};

function runAsync3() {
    let p = new Promise(function (resolve, reject) {
        console.log('begin 3');
        setTimeout(()=> {
            resolve('data 3');
        });
    });

    return p;
};

runAsync1()
    .then((data)=> {
        console.log(data);

        return runAsync2();
    })
    .then((data)=> {
        console.log(data);

        return runAsync3();
    })
    .then((data)=> {
        console.log(data);

        return runAsync3();
    })
    .finally(()=> {
        console.log("finish");
    })
    .done(()=> {
        console.log("all success");
    });


var readFileAsync = function (name) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=> {
            resolve({name});
        }, 5000);
    });
};

//async function gen() {
//    console.log('-------------gen start-------------');
//    //await暂停直到promise返回,才开始执行下一个
//    await readFileAsync('66').then((data)=> {
//        console.log(data);
//    });
//    await readFileAsync('77').then((data)=> {
//        console.log(data);
//    });
//    console.log('-------------gen end-------------');
//}
//
//gen();
//console.log('-------------out-------------');
////gen start -> out -> 66 -> 77 -> gen end

function* gen() {
    console.log('-------------gen start-------------');
    yield readFileAsync('66');
    yield readFileAsync('77');
    console.log('-------------gen end-------------');
};

let g = gen();
console.log('-------------out-------------');
let f1 = g.next();//{done:false, value:Promise}
f1.value.then(function (data) {
    console.log(data);
    return g.next().value;//{done:false, value:Promise}
}).then(function (data) {
    console.log(data);
    g.next(); //{done:ture, value:null}
});
// out -> gen start -> 66 -> 7 -> gen end

class Point {
    constructor(x) {
        this.x = x;
    }

    toString() {
        return this.x;
    }
}

class ColorPoint extends Point {
    constructor(x, color) {
        super(x);
        this.color = color;
    }

    toString() {
        return this.color + " " + super.toString();
    }

}

let cp = new ColorPoint(0, "rbg");
alert(cp.toString());//rbg 0

const s = new Set([1, 1, 2]);
//add, delete, has, clear
s.add("2");
//keys(), values(), entries(), forEach()
//因为Set结构没有key值只有value所以keys,values方法行为一致
for (let item of s.keys()) {
    console.log("set:" + item);//输出:1,2,"2"
}
for (let item of s.values()) {
    console.log("set:" + item);//输出值:1,2,"2"
}
for (let item of s.entries()) {
    console.log(item);//输出:[1, 1],[2, 2],["2", "2"]
}
for (let item of s) {
    console.log(item);//输出:1,2,"2"
}
//输出:1:1,2:2,"2":"2"
s.forEach((value, key)=>console.log(key + ":" + value));

let a = [[1], [2]];
const ws = new WeakSet(a);
//add, delete, has
ws.add({});
//let b = [1,2];
//Error,因为WeakSet要求b中每个成员是对象1,2是值
//const ws = new WeakSet(b);


const m = new Map();
const k = {key: 66};
//set, get, delete, has, clear, size
m.set(k, 'content');
const m2 = new Map([['key1', 'value1'], ['key2', 'value2']]);
//keys(), values(), entries(), forEach()
for (let key of m2.keys()) {
    console.log(key);//输出:key1, key2
}
for (let value of m2.values()) {
    console.log(value);//输出:value1, value2
}
for (let [key, value] of m2.entries()) {
    console.log(key, value);//输出:key1, value1, key2, value2
}
//同上
for (let [key, value] of m2) {
}
const reporter = {
    report: function () {
        return "66 say:";
    }
}
//支持forEach,添加第二个参数,用来绑定this
m2.forEach(function (value, key, map) {
    console.log(this.report(), key, value);
}, reporter);


function tempAlert() {
    return 66;
};

let temp = `hello ${tempAlert()}`;
alert(temp);

function Defer(executor) {
    var self = this;
    self.status = 'pending';
    self.data = undefined;
    self.onResolvedCallback = [];
    self.onRejectedCallback = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved';
            self.data = value;
            for (let i of self.onResolvedCallback) {
                self.onResolvedCallback[i](value);
            }
        }
    }

    try {
        //setTimeout();
        executor(resolve);
        //executor.call(this, this.resolve.bind(this), this.reject.bind(this));
    }
    catch (e) {
        reject(e);
        //this.reject(e);
    }
};

Defer.prototype = {
    constructor: Defer,
    then: function (onResolved) {
        var self = this;
        var promise2;

        if (self.status === 'resolved') {
            return promise2 = new Defer(function (resolve) {
                try {
                    var x = onResolved(self.data);
                    if (x instanceof Defer) {
                        x.then(resolve);
                    }

                    resolve(x);
                }
            });
        }

        if (self.status === 'pending') {
            return promise2 = new Promise(function (resolve) {
                self.onResolvedCallback.push(function (value) {
                    try {
                        var x = onResolved(self.data);
                        //返回值为Promise
                        if (x instanceof Defer) {
                            x.then(resolve);
                        }
                    }
                });
            });
        }
    }
};

var d = new Defer(function (resolve) {
    setTimeout(function () {
        resolve({a: 0});
    }, 1000);
});

d.then(function (data) {
    alert(data);
});
