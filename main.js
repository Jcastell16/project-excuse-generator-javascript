

 let who = ['the dog','my granma','his turtle','my bird'];
 let what = ['eat','pissed','crushed','broked'];
 let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

 window.onload =()=> {
let randomWho = Math.floor(Math.random()*who.length);
let randomWhat = Math.floor(Math.random()*what.length);
let randomWhen = Math.floor(Math.random()*when.length);
let rValue = who[randomWho] + ' ' + what[randomWhat] + ' ' + when[randomWhen];

document.getElementById("myexcuse").innerHTML = rValue;
}
