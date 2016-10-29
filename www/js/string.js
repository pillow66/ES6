/**
 * Created by 1mango01 on 16/8/4.
 */

//模板字符串,用反引号`标识
//可当普通字符串,可定义多行字符串,或在字符串中嵌入变量${}, {}中可以进行运算,调用方法
//如果{}中返回的对象不是string,默认调用toString方法
//模板可以嵌套
{
    let s = `hello`;
    console.log(s);

    //多行字符串
    let s2 = `hello
    word`;
    console.log(s2);

    let name = "66";
    let s3 = `hello ${name + "jiang"}`;
    console.log(s3);

    let tmpl = addrs => `
        <div>
            ${addrs.map(addr => `
                <span>${addr.first}</span>
            `).join('')}
        </div>
    `;
    console.log(tmpl([{first: 1}, {first: 2}]));
}

//标签模板,跟着一个函数名后
//标签模板,字符里有变量,会被处理成多个参数,再调用
{
    //alert`log`;

    let a = 1;
    let b = 2;

    function tag(...values){
    };

    tag`hello ${a} world ${b}`; //tag(['hello', 'world', ''], 1, 2);
}


/*var template = `<ul>
 <% for(var i=0; i < data.supplies.length; i++) { %>
 <li><%= data.supplies[i] %></li>
 <% } %>
 </ul>`;

 function compile(template) {
 var evalExpr = /<%=(.+?)%>/g;
 var expr = /<%([\s\S]+?)%>/g;

 template = template
 .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
 .replace(expr, '`); \n $1 \n  echo(`');

 alert(template);

 template = 'echo(`' + template + '`);';

 alert(template);

 var script = `(function parse(data){
 var output = "";

 function echo(html){
 output += html;
 }

 ${ template }

 return output;
 })`;

 alert(script);
 return script;
 }


 //过滤HTML
 var parse = eval(compile(template));
 alert(parse({supplies: ["broom", "mop", "cleaner"]}));

 var sender = "66";
 var message = SaferHTML`<p>${sender} has sent you a message.</p>`;
 //SaferHTML(templateData, 66);
 //templateDate == ['<p>', ' has sent you a message.'];

 function SaferHTML(templateData) {
 var s = templateData[0];
 alert(s + " " + templateData.length + " " + templateData[1]  + "" + arguments.length + " " + String(arguments[1]));

 for (var i = 1; i < arguments.length; i++) {
 var arg = String(arguments[i]);

 s += arg.replace(/&/g, "&amp;")
 .replace(/</g, "&lt;")
 .replace(/>/g, "&gt;");

 s += templateData[i];
 }
 return s;
 }

 //String.raw()
 console.log(String.raw`\u{20BB7}` + " " + `\u{20BB7}`);
 console.log(String.raw({raw:'test'}, 0, 1, 2));
 //\u{20BB7} 吉
 */