/**
 * Created by 1mango01 on 16/8/4.
 */

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