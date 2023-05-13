function sum1(num1,num2){
console.log(num1+num2)
}

sum1(15,20)



function sum2(...num){
   let sum=0;
    for(let i=0;i<num.length;i++){
    sum+=num[i];
    }
return sum;
}

console.log(sum2(20,50,30,10,90));


function Total(type,...num){
    total=0;

    if(type=="+"){
    for(let i=0;i<num.length;i++){
        total+=num[i];
    }

}
else if(type=="-"){
    for(let i=0;i<num.length;i++){
        total-=num[i];
}
}

else if(type=="*"){
    total=1;
    for(let i=0;i<num.length;i++){
        total*=num[i];
}

}


return total;
}

console.log(Total("+",20,50,30,10,90));
console.log(Total("-",20,50,30,10,90));
console.log(Total("*",20,50,30,10,90));



function showData(us="Unknow",age="Unknow",hour=0,...skills)
{
    document.write('<div>');
    document.write(`<h1>Welcome , ${us}</h1>`);
    document.write(`<h3>Age : ${age}</h3>`);
    document.write(`<h3>Hour Rate : $${hour}</h3>`);

    if(skills.length==0){
        document.write(`No Skills`);
    }
    else{
        document.write(`Skills is : ${skills.join(" | ")}`);
    }
    document.write('</div>');
}


showData("Mohammad",30,25,"HTML","CSS","Javascript");




function functionChallange(...par)
{
let name,age,avialbe;
for(let i=0;i<par.length;i++){
    if(typeof par[i]== "string")
    name=par[i];
    else if(typeof par[i]== "number")
     age=par[i];
     else
     avialbe=par[i];
}

document.write('<div>');
document.write(`<h1>Hello , ${name}</h1>`);
document.write(`<h3>Your Age Is  ${age}</h3>`);
if(avialbe==true)
document.write(`<h3>Your Available </h3>`);
else
document.write(`<h3>Your Not Available </h3>`);

document.write('</div>');
}


functionChallange("Mohammad",30,true);
functionChallange(30,false,"Mohammad");
functionChallange(true,"Mohammad",30);
