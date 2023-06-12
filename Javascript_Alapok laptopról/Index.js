console.log("Hello Soterline");

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