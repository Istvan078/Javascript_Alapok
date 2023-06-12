/*
var cimsor = document.getElementById("cimsor1")
var body = document.getElementById("body");
var cimsorOffset = cimsor.offsetTop;
var footer = document.getElementById("footer");
var footerOffset = footer.offsetTop;

function cimsor1(){
document.getElementById("cimsor1").classList.toggle("cimsor3",true)}

function cimsor2(){
    document.getElementById("cimsor1").classList.add("cimsor1", "cimsor2", "cimsor3");
    document.getElementById("cimsor1").insertAdjacentText("beforeend", cimsor.classList.length)
    cimsor.insertAdjacentText("beforeend", cimsor.classList.contains("cimsor3"))
    cimsor.insertAdjacentText("beforeend", cimsor.classList)
}

function cimsor3(){
    if(cimsor.classList.contains("cimsor1"))
    {cimsor.classList.remove("cimsor3")}
}

console.log(cimsor.classList.contains("cimsor1"))

document.getElementById("valassz").onclick= function(){menu()}

function menu(){
    document.getElementById("menu").classList.toggle("menu")
}



function sticky(){
    if(window.pageYOffset >= footerOffset){
        footer.classList.add("sticky")
    }else {
        footer.classList.remove("sticky")
    }
}
console.log(footer.offsetTop)

var nodeList= document.getElementsByName("kis");
var nodeList2 = document.querySelectorAll("h2")

console.log(nodeList2[0])

var kiiratas = document.getElementById("kiiratas");

var node = "";
for(let valtozo of nodeList){
   node += valtozo.textContent + " " + "\n"
}
kiiratas.innerText = node

const cars = ["BMW", "Volvo", "Mini"];
var array = "";
for(let x of cars){
    array += x + " "
}

let language = "JavaScript " + "Betascript";
let string= ""
for(let x of language)
{string += x }

const person = {fname:"John", lname:"Doe", age:25};
let object = "";
for(let x in person){
    object += x + " " + person[x] + " " + "\n"
}

const numbers = [45, 4, 9, 16, 25];

let szamok = "";
for(let x in numbers)
{szamok += numbers[x] + " "}

let forEachTomb = "";
numbers.forEach(callBackFunction);

function callBackFunction(egyErtekEgyKorAlatt,indexSzamKiirasa,osszesErtekKiirasaEgyKorAlatt){
    forEachTomb += egyErtekEgyKorAlatt + ", " + "Indexszám: "+ indexSzamKiirasa + " " + "\n" + osszesErtekKiirasaEgyKorAlatt +"\n"
}

kiiratas.innerText = forEachTomb

let x = 6;
let y = 3;

kiiratas.innerText = (x < 10 && y > 1) + "\n" + (x < 10 && y < 1) + !(x == y) + (2 < "12")

function bolean(){
    let voteable;
    let age = Number(document.getElementById("age").value)
    if(isNaN(age)){
        voteable =  " Ez nem egy szám!"
    } else{
        voteable = (age<18) ? " Túl fiatal vagy" : " Mehet szavazni máris"  
        /*Conditional (Ternary) Operator
        JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
        Syntax
        variablename = (condition) ? value1:value2 */ /*
    }
    document.getElementById("demo").innerHTML = voteable;
}

let name1;
let text = "missing";   //  Nullish coalescing operator: ??
let result = name1 ?? text;  // a ?? azt vizsgálja, hogy az érték undefined vagy null-e, ha azok, akkor továbbmegy a következő értékre és azt írja ki

kiiratas.innerText = result

// Create an object:  Optional Chaining Operator: ?. ha undfined vagy 0 az érték, akkor undifened értékkel tér vissza 
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
kiiratas.innerText = car?.name;


kiiratas.innerText = Boolean(car.type)

// A Math az egy objektum a js-ben. matematikai feladatokat végezhetsz el vele számokon.
// A Math objektumnak nincs constructor-a. Statikus objektum. Minden módszert és propertit lehet használni anélkül hogy előbb elkészítenénk a Math objektumot
kiiratas.innerText = Math.PI   // a Pi értéke
kiiratas.innerText = Math.E
kiiratas.innerText = Math.SQRT2  // 2 gyöke
kiiratas.innerText = Math.SQRT1_2 //1/2 gyöke
kiiratas.innerText = Math.LN2  // returns the natural logarithm of 2
kiiratas.innerText = Math.LN10 // returns the natural logarithm of 10
Math.LOG2E // returns base 2 logarithm of E
Math.LOG10E // returns base 10 logarithm of E
Math.round(x)	//Returns x rounded to its nearest integer
Math.ceil(x)	//Returns x rounded up to its nearest integer
Math.floor(x)	//Returns x rounded down to its nearest integer
Math.trunc(x) //Returns the integer part of x

kiiratas.innerText = Math.round(5.5 + 6.7)
kiiratas.innerText = Math.floor(4.7)
kiiratas.innerText = Math.ceil(2.2)
kiiratas.innerText = Math.trunc(5.6)  // a Math.trunc() az érték Integer részét adja vissza, itt pl az 5-öt, mert az 5 az egész szám ebben a kódban.

var nincs = "";

kiiratas.innerText = Math.sign(nincs)
kiiratas.innerText = Math.pow(2,3)  // Math.pow() = négyzetre emelés metódus
kiiratas.innerText = Math.sqrt(16)  // Math.sqrt() = a gyökvonás metódus
kiiratas.innerText = Math.abs(-15) // negatív számból pozitívat csinál

// a szögfokoknak vannak a szinusz értékeik. pl:
// a szinusz érték mindig -1 és 1 közötti értéket dob vissza
kiiratas.innerText = Math.sin(78 * Math.PI / 180);
kiiratas.innerText = Math.cos(50 * Math.PI/180);
kiiratas.innerText = Math.min(-2000,20,40,50);
kiiratas.innerText = Math.max(21,124,5464,12313232);
kiiratas.innerText = Math.random() //  A math.random() metódus egy random számot dob vissza 0 és 1 között
kiiratas.innerText = Math.log(15);  // Egy természetes logaritmusát adja vissza egy számnak a Math.log

//The Math.log2() Method Math.log2(x) returns the base 2 logarithm of x. How many times must we multiply 2 to get 8?
kiiratas.innerText = Math.log2(8);

//The Math.log10() Method Math.log10(x) returns the base 10 logarithm of x. How many times must we multiply 10 to get 1000?
kiiratas.innerText = Math.log10(1000)

kiiratas.innerText = Math.floor(Math.random() * 10)
kiiratas.innerText = Math.floor(Math.random() *101)
kiiratas.innerText = Math.floor(Math.random() *100) + 1

function randomSzamGeneralo(minErtek,maxErtek){
    return Math.floor(Math.random() * (maxErtek - minErtek + 1)) + minErtek
}

kiiratas.innerText = randomSzamGeneralo(40,100)

var kiiratas2 = 1000; 
function resize(){
if(window.innerWidth<900){
        clearInterval(frissito) }
else if(window.innerWidth<1400){frissito(kiiratas.innerText = window.innerWidth,3000)}
}


function frissito(feladat,ismetlodesIdeje){
   var set = setInterval(function(){ feladat
},ismetlodesIdeje)
    return set}
    window.addEventListener("resize", resize )
    
    
    
    
    function frissito1(feladat){
       return function(){
        if(new Date().getSeconds() !== feladat.getSeconds())
        {feladat = new Date()}
             kiiratas.innerHTML = feladat
       }
     }

var date = new Date()

var date1= setInterval(frissito1(date),10000)


let tomb = ["nev", "telefonszam", "email"]
let maptomb = tomb.map(map);

function map(value, index, array){
    return value + " " + index + " " + array
}

kiiratas.innerText = maptomb

const myArr = [1, 2, 3, 4, 5, 6,7,5,40,55];
const newArr = myArr.flatMap((x) => x * 3) // a .flatMap() módszer új tömböt csinál
kiiratas.innerHTML = newArr;

const filterTomb= newArr.filter(szuro);
function szuro(ertek){
    return ertek <= 10;
}
kiiratas.innerHTML = filterTomb

const reduce1= myArr.reduce(reduce,100);
function reduce(total,value,index,array){
    return total+value
}
kiiratas.innerHTML = reduce1

const reduceRight = myArr.reduceRight(reduce,50)
kiiratas.innerHTML = reduceRight

const numbers1 = [45, 4, 9, 16, 25];
let over18 = numbers1.every(szuroevery)
function szuroevery(value, index){
    return value>=30
}
kiiratas.innerHTML = over18;

let sometest = numbers1.some(szuroevery);
kiiratas.innerHTML = sometest;

let indexOf = myArr.indexOf(4)
kiiratas.innerHTML = indexOf
let lastIndexOf = myArr.lastIndexOf(5)
kiiratas.innerHTML = lastIndexOf

let find = myArr.find(szuroevery)
kiiratas.innerHTML = find

let findIndex = myArr.findIndex(szuroevery)
kiiratas.innerHTML = findIndex

let arrayFrom = Array.from("matyas,gabor,teszta") //zárójelbe írni, hogy miből csináljon tömböt
kiiratas.innerHTML = arrayFrom

let keys1 = ""
let keys = myArr.keys(); // a keys() módszer az indexszámokat gyűjti össze egy változóba, utána for...of ciklussal végig lehet járni, majd kiiratni
for(let x of keys)
{keys1 += x}
kiiratas.innerHTML = keys1;

let arr = ""
let Arrayiterator = myArr.entries();  // index/kulcs + értékpárokban szerzi meg a tömb értékeit

for(let x of Arrayiterator)
{arr += x + "\n"}
kiiratas.innerHTML = arr;

let includes = myArr.includes(40);
kiiratas.innerHTML = includes;

const q = ["alma", "barack", "szilva"]
const q1 = ["édes", "savanyú", "sós"]
const q2 = ["martini", "pálinka", "bor"]
const myArr2 = [...q,...q1,...q2]            // ... operátor = Array spread operátor több tömböt fűz össze egy tömbbé

kiiratas.innerHTML = myArr2

*/

/*
let input = document.getElementById("asztalokszama")
let asztalokSzama = 0;
let aszama = document.getElementById("aszama")
let ujAsztalokSzama = []
let asztalclasses =Array.from(document.querySelectorAll(".asztal"))
parseInt(input.value);

function asztalokSzama1(){
    if(asztalokSzama<=13 && input.value<=13){  
            asztalokSzama = input.value;
            aszama.innerText = asztalokSzama;
    if(ujAsztalokSzama.length<=13){
            ujAsztalokSzama.push(input.value);
            document.getElementById("asztal1").innerText=ujAsztalokSzama
            //for(let i=0;i<input.value;i++){
            //    ujAsztalokSzama.push([i])
           // }
         } else{
            alert("Ennyi asztalt nem foglalhat!")
         }
         
}}

input.addEventListener("input", asztalokSzama1)


let inputElem = document.getElementById("asztalokInput");
let mentesGomb = document.getElementById("mentesGomb");
let mentettErtekLista = document.getElementById("mentettErtekLista");

mentesGomb.addEventListener("click", function() {
  if (beirtErtek !== "" && beirtErtek<=13) {
    let ujElem = document.createElement("p");
    ujElem.innerText = beirtErtek;
    mentettErtekLista.appendChild(ujElem);
    inputElem.value = "";
  }
}); */

let input = document.getElementById("asztalokszama")
let asztalokSzama = 0;
let aszama = document.getElementById("aszama")
let ujAsztalokSzama = []
let asztalclasses =Array.from(document.querySelectorAll(".asztal"))
let par;
let red;


function asztalokSzama1(){
     let inp = parseInt(input.value)

    if(asztalokSzama<=13 && inp<=13){  
            asztalokSzama = inp;
            aszama.innerText = asztalokSzama;
         if(ujAsztalokSzama.length<=13){
            ujAsztalokSzama.push(inp);
           red= ujAsztalokSzama.reduce(reduce1)
           par = parseInt(red)
            document.getElementById("asztal1").innerText=par
             if(par>13){
        document.getElementById("asztal1").innerText = "Az összes asztal foglalt!"
        }
         } else{
            alert("Ennyi asztalt nem foglalhat!")
         }} return
        }

input.addEventListener("input", asztalokSzama1)
asztalokSzama1()
console.log(ujAsztalokSzama)




function asztalfoglalas(){
   let prompt1 = alert("Kérlek add meg az input mezőbe hány asztalt foglalsz!")
}

function hanyfore(){
    let prompt1 = prompt("Hány főre?")
    if (prompt1>65)
    {prompt("Sajnos 65-nél több főre nem foglalhat, kérem adjon meg egy másik összeget")
} else if(prompt1<2){
    prompt("A foglalás minimum 2 főnél kezdődik, kérem adjon meg egy másik összeget!")
}
}

let foglaloemberekinput = document.getElementById("foglalokszama")
let tomb2 = [];
let osszesszam = +document.getElementById("osszes")
let xd = + document.getElementById("xd")

let foglaloemberekszama;
szamlalo()
console.log(foglaloemberekszama)
function szamlalo(){
    let inp = parseInt(foglaloemberekinput.value.replace(/\D/g, ""))
  for(let i=-3; i<=61; i++){
   foglaloemberekszama= i += 4
    if(inp === foglaloemberekszama){
        alert("Legalább még egy főt meg kell adnod az asztalfoglaláshoz! ")
         } }
if(tomb2.length<=65){
    tomb2.push(inp)
   let red1= tomb2.reduce(reduce1)
   let par2 = parseInt(red1)
   xd.innerHTML = par2
   console.log(inp)
}
    
} 

foglaloemberekinput.addEventListener("input", szamlalo)


function megerosites(){
 osszesszam.innerText = szamlalo(foglaloemberekinput.value) + asztalokSzama1(input.value)
}



 // let tomb = [1,2,3,4]
 // var tombosszeselem = "";
 
 // function forOf(tombneve){
 //   for(let x of tombneve)
  //  {tombosszeselem += parseInt(x)}
 // }
 // forOf(tomb);
//  parseInt(tombosszeselem);
  



  //const numbers = [45, 4, 9, 16, 25];
//let sum = tomb.reduce(reduce1);


function reduce1(total, value) {
  return total + value;
}





// HTML elemek elérése
const asztalokSzamaElem = document.getElementById("asztalokszama1");
const emberSzamaElem = document.getElementById("emberekszama");
const foglalasGomb = document.getElementById("foglalas");
const asztszam = document.getElementById("asztszam")
const foglszam = document.getElementById("foglszam")
let szamlalo1 = 0;
let elozoertek = null ;
let asztalszamlalo = 0;
let asztalertek = null


// Inicializálás
let lefoglaltAsztalok = [];
let lefoglaltEmberek = [];

// Foglalás eseménykezelő
foglalasGomb.addEventListener("click", () => {
  const asztalokSzama = parseInt(asztalokSzamaElem.value);
  const emberSzama = parseInt(emberSzamaElem.value);

  if (asztalokSzama <= 0 || emberSzama <= 0) {
    alert("A megadott értékeknek pozitívnak kell lenniük!");
     }

  if (asztalokSzama > 13) {
    asztszam.innerText= "Maximum 13 asztalt foglalhat! "
  }

  if (emberSzama > 65) {
    foglszam.innerText= "Maximum 65 ember foglalhat! "
    
  }

  if (emberSzama < asztalokSzama * 2) {
    foglszam.innerText= "Minimum 2 embernek kell foglalni 1 asztalt!";
  }
  if(lefoglaltEmberek<65 && lefoglaltAsztalok <13)
  {lefoglaltAsztalok.push(asztalokSzama);
  lefoglaltEmberek.push(emberSzama);}
  else{
    asztszam.innerText = "Sajnos foglalt az összes aztal!"
    foglszam.innerText = "Telt ház van!"
  }

  if (asztalokSzama === elozoertek) {
    szamlalo1 ++;
    if(szamlalo1 ===1)
    {alert("Az adott asztal már lefoglalva van!");}
  }else {
    szamlalo1 = 0;
  }
  elozoertek = asztalokSzama;

  document.getElementById("lefoglaltAsztalok").innerText = lefoglaltAsztalok.reduce((a, b) => a + b, 0);;
  document.getElementById("lefoglaltEmberek").innerText = lefoglaltEmberek.reduce((a, b) => a + b, 0);
});

  // Asztal és ember hozzáadása a lefoglaltakhoz


  // Lefoglalt asztalok és emberek számának kiírása
  
