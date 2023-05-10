let myFrindes =["Mohammad","Ali","Sami","Jamal",["Hadeel","Noor"]];


console.log(`Hello ${myFrindes[0]}`);
console.log(`Hello ${myFrindes[4][1]}`);
console.log(`Hello ${myFrindes[4][1][2]}`);

myFrindes[0]="Ahmad";
console.log(`Print Array After Change Index 0 
from Mohammad To ${myFrindes}`);

myFrindes[4][0]="Heba";
console.log(myFrindes);


console.log(myFrindes.length);
myFrindes[7]="Ammer";
console.log(`Add Two Empty
 ${myFrindes}`);
console.log(myFrindes.length);

console.log("your change length")
myFrindes.length=3;
console.log(myFrindes);


console.log("Add And Remove From First Array And End");

console.log("unshift user to add in first");
myFrindes.unshift("Tahseen","Adel");
console.log(myFrindes);

myFrindes.unshift(["rama","khadija"]);
console.log(myFrindes);

console.log("Add From End");
myFrindes.push("Adel");
myFrindes.push("Jemel");
console.log(myFrindes);

console.log("Remove From First");

myFrindes.shift();
console.log(myFrindes);

let firstName=myFrindes.shift();
console.log(`The Name Remove from first is ${firstName}`);


firstName=myFrindes.pop();
console.log(`The Name Remove From Last is ${firstName}`);



console.log("Search In Array Using indexOf ,lastIndexOf and includes");
console.log(myFrindes);

console.log("using inndexOf");
console.log(`Search Adel ${myFrindes.indexOf("Adel")}`);
console.log(`Search Adel ${myFrindes.indexOf("Adel",2)}`);

console.log("using lastIndexOf");
console.log(myFrindes.lastIndexOf("Adel"));
console.log(myFrindes.lastIndexOf("Adel",2));

console.log("using includes");
console.log(myFrindes.includes("Adel"));

if(myFrindes.includes("Adel")===true){
    console.log("Yes is Exist");
}


console.log("Sort And Reverse");
let arrNum=[5,60,20,100,9000,1000000,2,0];
console.log(arrNum);

console.log("Sort Array Number");
console.log(arrNum.sort());

let arrStr=["Sami","Hello","Ahmad"];
console.log(arrStr);

console.log(arrStr.sort());

console.log(arrStr.concat(arrNum).sort());

console.log("Reverse Array");
console.log(arrNum.reverse());

console.log("Slice Method");
let arr=["Sami","Hello","Ahmad","Ali","Jammal"];

console.log(arr.slice());
console.log(arr.slice(3));
console.log(arr.slice(2,3));
console.log(arr.slice(-3));
console.log(arr.slice(1,-2));


console.log("splice is remove and add take Parmeter (start,how you want remove,what you want add)");
console.log(arr);
arr.splice(0,0,"Awni");
console.log(arr);

arr.splice(3,2,"SSSS","ZZZ");
console.log(arr);

arr.splice(3);
console.log(arr);

let names=arr.splice(1,1);
console.log(names);
console.log(arr);

arr.splice(0,1);
console.log(arr);

console.log("Concat And Join");
let arr1=["Sami","Hello","Ahmad","Ali","Jammal"];
let arr2=[5,60,20,100,9000,1000000,2,0];
let arr3=["Sami","Hello","Ahmad"];

let arr4=arr1.concat(arr2,arr3,["BBB","AAAAAAA"]);
console.log(arr4);

console.log(arr4.join());
console.log(arr4.join(""));
console.log(arr4.join(" "));
console.log(arr4.join("$"));
console.log(arr4.join("_"));
console.log(arr4.join("|"));















