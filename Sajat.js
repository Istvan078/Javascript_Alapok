/*const egy = function myFunction()
        {document.getElementById('vsz').innerHTML='Almacsutka'};
        let x = 78;
alert(x);

let r = 5;
r-=10;
console.log(r) ;
var y = 8;
y*=2;
console.log(y);
var y = 2;
y**= 3;
console.log(y);

var u= "hello,vilag";
var split = u.split(" ") // Stringet arraye alakit at, vesszot rak a szokozok helyere. split on spaces
var split = u.split("|") // Stringet arrayye alakit. split on pipes
var split = u.split(",") // Stringet arraye alakitja. split on commas
function ketto() {document.getElementById("split").innerHTML= split};

var i = "A stella itt van stella, eszik a STELLA csontot";
console.log(i.indexOf("stella")); /* indexOf() -> megmondja hanyadik karakternel kezdodik a string, 
amit keresel vele. a zarojelbe kell beirni a stringet amit keresel. A javas. a poziciokat 0-tol szamolja*/
/*console.log(i.lastIndexOf("stella")); // az utolso string helyet mutatja a zarojelbe irt stringbol
console.log(i.indexOf("stella",9));
console.log(i.lastIndexOf("stella",6));
console.log(i.search("stella")); //nem lehet 2. parametert megadni a searchnek szamban, az indexOf pedig nem tud regular expressionoket keresni
console.log(i.match(/stella/g)); // -->regular expression global search jelzovel
//ha nem irod bele a matchnel a global flaget akkor csak az elso eredmenyt fogja visszadobni
console.log(i.match(/stella/gi)); // az i a case-insensitive jelzo
console.log(i.matchAll(/stella/gi));
console.log(i.includes("kaja")); //az includes true vagy false erteket dob vissza, kezdo keresesi parametert is lehet hozzaadni
console.log(i.startsWith("A")); //true or false, attol fuggoen hogy a megadott stringgel kezdodik-e a string
console.log(i.startsWith("stella")); //start poziciot meg lehet hatarozni
console.log(i.startsWith("stella", 17));
console.log(i.endsWith("csontot")); // true or false
console.log(i.endsWith("eszik"));
console.log(i.endsWith("stella", 8)); // vegzodik-e ugy egy szo a 8. karakternel a string elejetol nezve, hogy stella?
*/

var tempLit= "Pajti";
var tempLit2= "Stella";
console.log(`A kutyaim neve: ${tempLit} es ${tempLit2}.`); // Template Literal

var ex=125e7; //1250000000  exponentiation
var ex1= 125e-4; //0.0125
console.log(ex,ex1);  //A Javascript szamok mindig 64 bit Floating Point-osak
//a szamokat 64 bitben tarolja, amiben a szam a 0 es 51 bit kozott van, a hatvany 52 es 62 kozott, a jel pedig a 63.bit
// az Integerek 15 szamjegyig pontosak, a tizedesjegyek maximum szama 17 lehet.
//A Floating Point szamtana nem mindig pontos. Ilyenkor segit ha szorozzuk 10-el a szamokat, utana pedig elosszuk 10-el.
var n = 0.2 + 0.1;
var n1= (0.2*10+ 0.1*10) / 10
console.log(n, n1)

var n = "200"   /*A Javascript osztasnal a "stringszamokat" atkonvertalja normal szamokka, illetve szorzasnal es
kivonasnal is, viszont osszaadasnal nem!!*/
var n1= "20"
console.log(n/n1)

var na = 100;
var na1= "Virsli";
var na2 = 100/"Virsli"
console.log(na/na1);  // NaN = Not a Number - akkor dobja ki, ha pl. szamot osztasz betus stringgel.
console.log(na/"10");
console.log(isNaN(na2));   //true or false, ha nem szam az eredmeny, akkor true(isNan())
console.log(typeof NaN,",", typeof na1);

var inf= 0x14;
console.log(inf/0); //ha tul nagy a szam vagy 0-val osztasz azt irja ki hogy infinity.
console.log(inf);
var hex= 0x2456; //ha 0x-et irsz egy szam ele atvaltja hexadecimalis ertekbe.
console.log(hex);
console.log(na.toString(2)); // a toString-el lehet atvaltani a szamunkat egy masik szamrendszerbe, pl. binarisba, vagy octal-ba(8-as)

var ob = new Number(12); //new-al lehet szamot objektumma atalakitani, viszont nem javallt, mert komplikalja a kodot es lassitja a betoltesi sebesseget
console.log(typeof ob);

var big= BigInt("9999999999999999999999999999999999999999999999999999999999999999999"); //15 kar. feletti szamokhoz!
var big1= 9999999999999999999999999999999999999999999999999999999999999999999999999999999n;
console.log(big1);
var big= 58n;
var big1= Number(big) / 35;  //a BigInteger nem lehet tizedes szam, ezert ha osztok at kell valtani elobb normal szam adattipusba!
console.log(big1);
var bin= 0b11111111111111000000000000000000n;
var oct= 0o3342432432423324245675464545663434534535354354345345435n;
var hex= 0x657576576575467478686857657857567467467478476487n;
console.log(bin,",",oct, ",",hex)

var num= Number.MAX_SAFE_INTEGER;
var num1 = Number.MIN_SAFE_INTEGER;
console.log(num, num1)

console.log(Number.isInteger(678)) //  Number.isInteger() - igaz vagy hamis(egesz szam e a szam)
console.log(Number.isInteger(678.5))
console.log(Number.isSafeInteger(56757657)) // true or false a szam biztonsagos Integer-e?
console.log(Number.isSafeInteger(564564564564564654564564564645645645645645645646))

/* Safe integers are all integers from -(2az53-on - 1) to +(2az53-on - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992. */

var st = 234
var st1 = st.toString()  //  toString() atalakitja a szamot stringge
console.log(st1)
console.log(typeof st1)

var ex = 9.656
var ex1= ex.toExponential(5); // atalakitja exponencialis szamma, a parameterertektol fugg hogy hany tizedesjegyig mutassa.
var ex2= ex.toExponential();
console.log(ex1)  //  Kerekitest is csinal, ha itt pl. 2-ot irsz be a zarojelbe.
console.log(ex2)

var fix = 10.476538;
console.log(fix.toFixed(3)); // 10.477-et dob vissza

var topre = 235.786;
console.log(topre.toPrecision(5)) //  a zarojelben itt az ossz karakter hossza van

var t = new Number(25); //  Number Objectte alakitasa
var ti = t.valueOf();  //  A valueOf() atalakitja az Objectet Numberre
console.log(typeof ti, ti);

var t= true;
console.log(Number (t));  // A Number() atalakitja szamma a valtozot, true erteke 1, false erteke 0.
console.log(Number(false));

var date= new Date("2023-02-02");
var szam = Number(date);                  //  A datumot szamma konvertalja at!!
console.log(szam, date);

var par = "25 Parse";
var par2 = " 5765 5475747 "; //csak egesz szamot dob vissza
console.log(parseInt(par), parseInt(par2)); //a parseInt() elemez egy Stringet es visszadob egy szamot, csak az ELSOt.
var fl = "1.245";
console.log(parseFloat(fl))  // elemez egy stringet es egy szamot dob vissza, ez lehet tizedes jegyes szam is.
                                // NUMBER METHODS:
console.log(Number.isInteger(st))
console.log(Number.isSafeInteger(4564564564565654674574745754745774745745457474))
console.log(Number.parseFloat("12.5747547"))
console.log(Number.parseInt(par))
                                        //NUMBER PROPERTYK:
console.log(Number.EPSILON) // Azt mutatja mennyi a kulonbseg 1 es a legkisebb floating point szam kozott, ami nagyobb, mint 1
console.log(Number.MAX_VALUE) // A legnagyobb lehetseges szamot mutatja a JavaScriptben
console.log(Number.MIN_VALUE) // A legkisebb lehetseges szam a JavaScriptben
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

var op = -2/0;
var op1 = 2/0;
console.log(op, op1)

  //ARRAY://

const ar = [];    //  Arrayt altalaban const kulcsszoval keszitunk, 0. elem az Array 1. eleme
ar[0]= "Fagyi";
ar[1] = "Piskota";  // Ugy tudsz hozzaferni egy Array elemhez, hogy hivatkozol az index szamra pl: [1]
ar[2] = "Csoki";
ar[3] = "Keksz";

const ar1 = ["Fagyi", "Piskota", "Csoki", "Keksz"];  // igy is lehet Arrayt kesziteni
const ar2 = new Array("Macska", "Kutya", "Kacsa", "Liba")
console.log(ar, ar1, ar2)

ar[1] = "Napolyi";
console.log(ar.length);  //  length property azt mutatja meg milyen hosszu az array, az array elemek szamat dobja ki.
var egy = ar[0];
console.log(egy)
var utolso = ar[ar.length-1]; // Igy hozza tudok ferni az arrayem utolso elemehez
console.log(utolso)

var pu = ar.push("Torta")  //  A .push() method uj elemet ad az arraynek
ar[ar.length] = "Chips"  //  a .length propertyvel is hozza lehet adni uj elemet
console.log(ar)

const szamok = new Array(2,3,4,5,6,7,8);  // Arraykeszitesi modszerek //
const szamok2 = [1,2,3,4,5]    //  biztonsagosabb ezt a modszert hasznalni, kevesebb az error
console.log(szamok, szamok2, Array.isArray(szamok))
  //  Az Array.isArray() lekerdezi hogy az arrayunk arrey-e? True or false
  console.log(szamok instanceof Array)  //  instanceof Array-el is meglehet hatarozni hogy az a valtozo array-e?

var szam = toString(szamok);
var join = szamok2.join("/")   /*  A .join method atalakitja stringge az arrayt es a zarojelben megadhatod stringben,
hogy milyen jel legyen a szavak/elemek kozott */ 
console.log(typeof szam, typeof join, join);

ar.pop()   //  A .pop() method kiveszi az utolso elemet az array-bol
ar.push("Csokolade")
ar.shift() // A .shit() method kiveszi az elso elemet es eggyel lejebb viszi a tobbi elem indexet
ar.unshift("Palacsinta")  //  A .unshift() method az array elejere tesz be egy uj elemet
ar[ar.length] = "Sokadik";  //  a .length property uj elemet ad hozza az array vegere.
console.log(ar)

const szamok3= szamok.concat(szamok2,ar,"Peter");  //  a .concat() method osszeolvaszt eggye tobb arrayt egy uj arrayben, a regiek nem fognak torlodni
const arr = [[2,3],[5,6],[8,9]]
const arr1 = arr.flat()  // .flat() method
console.log(szamok3, arr1)

var sp = ar.splice(2,3,"Vadalma", "Vadkorte");
ar.splice(0,1);  //  Torleshez
const ar5 =ar.slice(1,3);  /* kivag egy reszletet az arraybol, de az eredetibol nem vagja ki, a szamok a zjelben
a mettol meddig vagja ki az elemeket! */
console.log(sp,ar, ar5)  //  A .splice() modszerrel uj elemeket lehet behelyezni, a masodik szam a zjelben pedig hogy hany elemet toroljon ki

console.log(ar.sort(), ar) // .sort() method elrendezi az array elemeit ABC sorrendben
console.log(ar.reverse()); // a .reverse() method forditott ABC sorrendbe helyezi az elemeket

const szam78 = [78, 124, 58, 11, 26,2456, 92]
function f1(a,b) {return a-b};  // osszehasonlito funkcio ascending(novekvo sorrend)
function f2(a,b) {return b-a};  // osszehasonlito funkcio descending(csokkeno sorrend)
function f3(arr) {return Math.max.apply(null, arr)}  // modszer arreyben a legnagyobb szam meghatarozasahoz!!!
function f4(arr) {return Math.min.apply(null,arr)}  // modszer arreyben a legkisebb szam meghatarozasahoz
console.log(szam78.sort(f1))  //  megfelelo szamsorrend letrehozasahoz arrayen belul

console.log(szam78[szam78.length-1])  //  a valtozo[valtozo.length-1] visszadobja a legnagyobb erteket az arrayben sort utan persze
console.log(szam78[0])  //  a 0. index pedig a legkisebb erteket dobja ki sort utan
console.log(szam78.sort(f2))
console.log(szam78[0],szam78[szam78.length-1])
console.log(f3(szam78), f4(szam78))

function f5(a,b) {return a.Evjarat-b.Evjarat}  //  Object Array sortolasahoz funkcio
const ob1 = [
        {Tipus: "Volvo", Evjarat: 1992},
        {Tipus: "Mazda", Evjarat: 2023},
        {Tipus: "Audi", Evjarat: 2000}        
];
console.log(ob1.sort(f5));  //  Object array sortolasa

                            //  FUNCTIONS  //
const f10 = function(a,b){return a*b};
var fu = f10(5,5);   //   A funkciokat lehet hasznalni valuekent, ertekekkent
console.log(fu)
const f11 = new Function("a", "b", "return a*b");  // ez a Function Constructor modszer function letrehozasara
var fu = f11(4,3);
console.log(fu);

// van function hoisting, ezert a funkciot meg lehet hivni, mielott letre lenne hozva

(function() {let x="Hello";})(); //  Ez egy Self-Invoking funkcio, meghivja sajat magat automatikusan

function f13(a,b){return a*b};                //  A funkciokat expressionokben is lehet hasznalni
var yu = f13(4,3) * 2;     // Expressionben hasznalva
console.log(yu);                                   //   A funkciok objektumok, vannak propertyjeik es methodjaik is

function f14(a,b){return arguments.length};  // property, ami az argumentek szamat dobja vissza, lasd egy sorral lejjebb
var yu1 = f14(2,3);
console.log(yu1);

var s1 = f13.toString();   // a .toString() atalakitja a functiont stringge!

const ar10 = (x,y) => x*y;   /*  ez az Arrow Function! itt ki lehet hagyni a return, function keywordot es a 
kapcsoszarojeleket, arrow funcionok nem hoistolnak, meghatarozni object methodokat nem jok
rovid szabalyrendszer, irhatunk vele function expressionoket*/
var rt1 = ar10(4,5);
console.log(rt1);

//HAZI FELADAT:

function alert(a,b) {
  return a/b
}
var aler = alert(20,5);
console.log(aler);




const person12 = {
  firstName: "Edina",
  lastName: "Dolmai",
  fullName: function(){
    return this.firstName + " " + this.lastName;
}}
const person23 = {
  firstName: "Peter",
  lastName: "Szabo"
}

let fullName = person12.fullName.bind(person23);
console.log(fullName());

let counter = 0
function novelo() {
  counter +=1;                   // szamlalonovelo funkcio. minden alkalommal, amikor meghivom, eggyel noveli a szaml.
}                                 // erteket
novelo();novelo();novelo();
console.log(counter);

const self = (function () {  // self-invoking function closure-el, hogy a szamlalot helyi valtozokent tudja novelni a 
  let counter1 = 0;         // funkcio, ha meghivjuk a valtozot, ami funkciokent mukodik
  return function () {counter1 +=1; return counter1}
})();
self ();
self ();
self ();
self ();
self ();