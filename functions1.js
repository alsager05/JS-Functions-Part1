function printName() {
  console.log("sarah");
}
//printName();


function printAge(birthYear) {
console.log(`you are ${2024 - birthYear}.`);
}
//printAge(1982);

function printAgeAndName(birthYear,Name){
    console.log(`Hello ${Name} you are ${2024 - birthYear} years old.`);
}
//printAgeAndName(1982,"sarah");

function printHello (Name,Language){
if(Language==="en"){
    console.log(`Hello ${Name}`);
}else if(Language==="es"){
    console.log(`Hola ${Name}`);
}else if(Language==="fr"){
    console.log(`Bonjour ${Name}`);
}else if(Language==="tr"){
    console.log(`Marhaba ${Name}`);
}
}
//printHello("sarah","tr");
//printHello("sarah","en");
//printHello("sarah","es");
//printHello("sarah","fr");

function printMax(a,b){
    if(a>b){
        console.log(a);
    }else{
        console.log(b);
    }
}
//printMax(13,5);