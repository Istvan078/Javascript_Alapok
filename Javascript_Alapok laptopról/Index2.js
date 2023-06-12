/*console.log("Hello Soterline");

let x = 2;
let y = 3;

console.log(x+y);

var s = "Elso "; // a szokoz is erteknek szamit
let k = "_JS_ ";
var f = "kodom";

console.log(s+k+f);

var number = 100;
var string = "Szoveg erteke: ";

console.log(number + string);
console.log(string + number);


var firstNumber = 34;
var hisIsAString = "This is a String";

console.log("Az en szamom: " + firstNumber);

x = 5;

console.log(x);

var v= "23";

console.log(x * v);

console.log(string + y * x + " " + v);

var a = "Anna "
let p = "Panna "
let h = "Hanna "
let d = "Dolly "
let m = "Molly "
var f = "Fred "
var s = "Samu "
let al = "Alfred "
let vez = "Kovacs "
let kuty = "kutyaja "
var u = 5

console.log(d+m+f+s+al);
console.log(vez+a+vez+p+vez+h);
console.log(a+kuty+d+p+kuty+m+h+kuty+f);
console.log("Kovacs lanyok allatainak szama: " + u);

var a = 3
var b = 4
var c = 5

console.log("Haromszog terulete: "+a*b*c+" cm");
console.log("Haromszog kerulete: "+(a+b+c)+" cm")


var szog=25
var szog2=45

console.log("A harmadik szog foka: "+(90-szog-szog2)+" fok");


var z= 10.00
var i= 10
var u= 10.26
console.log(z,i,u)

var z = 12e5
var i = 12e-5
console.log(z,i)

var z= BigInt("32586293856293659236532985629385638296523985");
console.log(z)

var z = 5
var i = 8
var u= 5
console.log(z==u, z==i)

var cars = ["Audi", "Volvo", "Fiat", "Mercedes"] //Array létrehozás, mindig szögletes zárójelbe írjuk
console.log(cars[0], cars[1], cars[2], cars [3])

var person = {firstName:"Istvan", surname: "Kalmar", age: "30 years", height: "172 cm", weight: "60 kg"} //Object létrehozás, mindig kapcsoszárójelbe írjuk
console.log(person.firstName, person.surname, person.age, person.weight, person.height)

console.log(typeof person) // A typeof operátor megmondja, hogy milyen adattípusú egy adott változó.

console.log(typeof cars)

console.log(typeof z)

var time; // Undefined az értéke ennek a változónak, mivel nem adtam neki értéket.Így az adattípusa is Undefined
console.log(time)

let tim= 10.30;
tim= undefined //bármilyen adattípust ki lehet üríteni, ha undifened értéket adunk a változónak, utána undefined típus lesz.;
console.log(typeof tim)

function myFunction(p1, p2) {return p1/p2;} // a kódot, amit végre akarsz hajtatni a funkcióval azt a kapcsoszárójelbe kell írni, a zárójelben a paraméter nevek vannak, a function keyword után a name van
console.log(myFunction(10,5))

function toCelsius(f) {return (5/9) * (f-32);}
console.log(toCelsius(77))

var a ="A hőmérséklet" + toCelsius(77) + "fok"; //A funkciót meglehet hívni a változó értékébe is egyből!
console.log(a)

const person2= {firstName: "Béla",
surname: "Kovács",
fullName: function(){return this.firstName+" "+this.surname}
}
console.log(person2.fullName())

function my1() {
    document.getElementById("ido").innerHTML = Date();
  }

var idezet = "Ez \"egy hosszú\" \\idézettel teli\\ szöveg" // A \ jellel alakitom at a specialis karaktereket Stringgé!!!!!
console.log(idezet)

var sortores = "hjksjfhds sdghjskdjghsd dsgjkshdg\
dsgsdgdsgsdgsdgsdgsdg\
" // Stringen belül \ jellel csinálunk sortörést, stringen kívül operátorok, pl = után enter billentyű
var sortores = "dsjhgksjdhgk jsdjkghdsjkgh ksdgh kjhkjdsg" +
"kdsjglsdjglkdsjglkdsjglkdsjgkdslgjdslkgjslkjgsldkjgldgksjg" // Megtörni egy stringet úgy is lehet ha + jelet használunk a sortörés(enter lenyomása előtt)

var txt = "kdsjlghdsglkdshglkshgdlskhdgldkshglhdgdfhfdhfdhfdhsl"
var hossz = txt.length // a length property a string hosszát mutatja meg számban mérve
console.log(hossz)

let lovercase = "kisbetűből nagybetű"
let nagy = lovercase.toUpperCase()
console.log(nagy)
let uppercase = "NAGYBETŰBŐL KICSI"
let kics = uppercase.toLowerCase()
console.log(kics)

var concat = "Földvár felé, féluton "
var concat2 = "Eljátszottam "
var concat3 = "A dalt"
var concat4= concat.concat(concat2, concat3)
console.log(concat4)

var hu = "Hello".concat(" World"," Plus2")
console.log(hu)

var trim= "hjfjf             "
var trim2= trim.length
var trim3= trim.trim()
console.log(trim2,trim3.length)

var num= 15
var texti= num.toString()
console.log(texti.padEnd(9,"x")) 

const osztály = 22;
const fiu = 10;
const lany = 12;
const fiufoci = 5;
const fiukosar = 3;
const lanyszurkolo = 10;
const lanymatek = 2;
var dobas = 5;
let gool = false;

console.log(lanyszurkolo/2+lanymatek/2);

switch(dobas){
  case 10 : uzenet = "Gratulalok!";
  break;
  case 5 : uzenet = "HÚÚÚÚÚÚ";
  break;
  default : uzenet = "Alakul";
};

console.log(uzenet);

if(gool===true){
  alert("ÚÚÚÚÚÚÚÚÚÚÚÚÚÚ")
}
else{
  alert("ÁÁÁÁÁÁÁÁÁÁÁÁÁ")};

                //  FUNCTION  //
  
function first(n, m, r){
return n+m-r;
}
console.log(first(6,7,2));

function sec(z,y){
return z*z - y;
};
console.log(sec(2,1));

function sec1(){
  let y=5;          // Függvényen belül a let-el deklarálunk változót, mert a let az csak a függvényen belül értelmezhető.
  if(y > 0){
  
  }
}
sec1();

//21 és 39 összeadásának, szorzatának eredményét írja ki a consol log


function egy(){
  let a=21;
  let b=39;
  let c=a+b;
  let d=a*b;
  let e=c/2;
  let f=d/2;
  return [c, d, e, f]
}
console.log(egy())

function egy1(a,b){
  return a+b;
}
function egy2(a,b){
  return a*b;
}
console.log(egy1(21,39), egy2(21,39), egy2(21,39)/2);

function ketto(a,b){
let anegyzet = a*a;
let bnegyzet =b*b;
let abosszeg = anegyzet + bnegyzet 
if(abosszeg%2 == 0){
console.log(abosszeg);
}else{
  console.log("Kerek egy uj szampart");
}
}

ketto(4,4);

function oszthato(n,m){
  let g = n*n + m*m;
  if(g%2 == 0){
    console.log("ok");
  }else{
    console.log("Kerek új számokat");
  }
}

oszthato(46,65);



            //  CIKLUSOK  //

let x;
let i;

for(i=150; i>=100; i--){
  x += "A ciklusváltozó értéke: " + i + "\n"
}
console.log(x);
*/


var y;
var i = 0;

while (i<10){
  y=i;
  i++;
}
console.log(y);

var y;
var i= 0;

do{
  y=i;
  i++;
}while(i<10);
console.log(i);


let nums = ""; // semmilyen érték
var i;
for(i=0; i<=5; i++){
  nums += i + "\n"
}
console.log(nums);

for(i=0; i<=500; i++){
  
  if(i%2 == 0){         //paros szamok megjelenítése 0 és 500 között
    let paros = i;
    console.log("Paros Szamok: "+ paros);
  }
  
} console.log("A ciklus lefutott: " + i);

var x = 0;
for(i=0; i<=500; i++){
  if(i%2 == 1){        //paratlan szamok megjelenítése 0 és 500 között
    let k2 = i;
    console.log("Páratlan Számok: " + k2);
    x++;
  } 
  } 
  console.log("Darabszám :" + x)

for(i=500; i<=1000; i++){
if(i%3 == 0){
  console.log(i);
}
}

function egy(y){
  if(y%3 == 0){
    console.log("Ez a szám osztható 3-al");
  }else{console.log("Ez a szám nem osztható 3-al");}
}

egy(7)

var i = 0;
var t = 0;

for(i=0;i<100;i++){
  if(i%3 == 0){
    console.log(t + " :Osztható 3-al");
    t++;
  }else{console.log(t + " :Nem osztható 3-al");
t++;
}
}