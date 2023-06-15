let pTag1 = document.getElementById("pTag1");

const szemelyObjektum = {Vezeteknev: "Kalmar", Keresztnev: "Istvan", Kor: 30, Hajszin: "Fekete", Testmagassag:172 + "cm"
, TeljesNev: function(){return this.Vezeteknev + " "+ this.Keresztnev} }

// obj proprety erteke lehet akar egy function is vagy egy masik objektum



const szemelyObjektum2 = {};
szemelyObjektum2.Vezeteknev = "Csiszar"
szemelyObjektum2.Keresztnev = "Klaudia"

pTag1.innerHTML = szemelyObjektum2.Vezeteknev + szemelyObjektum2.Keresztnev;

const szemelyObjektum3 = new Object();
szemelyObjektum3.Vezeteknev = "Voros";

                                        //  For...in loop


let objErtekek = "";
for(x in szemelyObjektum){
objErtekek += x + " " + szemelyObjektum[x] + "<br>";
}             

pTag1.innerHTML = objErtekek
pTag1.innerHTML = szemelyObjektum2["Vezeteknev"]

delete szemelyObjektum2.Vezeteknev;
// Vagy
delete szemelyObjektum2["Vezeteknev"]
// a delete keyword az erteket is torli es a property-t is
pTag1.innerHTML = szemelyObjektum2.Vezeteknev

const myObj = {
    name:"John",
    age:30,
    cars: {                    //  Egy objektum propertyjenek erteke lehet egy objektum is!!
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

pTag1.innerHTML = myObj.cars.car1;
pTag1.innerHTML = myObj["cars"]["car2"];
pTag1.innerHTML = myObj.cars["car3"]

//  Az ertekek az objektumban lehetnek tombok is es az ertekek a tombben lehetnek objektumok is.

const myObj2 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

//  Ahhoz, hogy tombokhoz hozzaferj tombokon belul hasznal for...in loopot mindegyik tombre

let tombAdatok = ""
for(x in myObj2.cars){
tombAdatok += "<h1>" + myObj2.cars[x].name + "</h1>"

for(y in myObj2.cars[x].models){
tombAdatok += myObj2.cars[x].models[y]
}
}
pTag1.innerHTML = tombAdatok;
pTag1.innerHTML = szemelyObjektum.TeljesNev()

//  A this kulcsszo egy objektumra utal. hogy melyik objektumra attol fugg hogyan hasznalod.
//  Onmagaban a this a globalis objektumra utal es egy fuggvenyben is.
//  Egy esemenynel, a this arra az elemre utal, amelyik megkapja az esemenyt, pl. button onclicknel a button-ra utal a this.
//  Methods like call(), apply(), and bind() can refer this to any object.
//  Methods are functions stored as object properties.
//  You access an object method with the following syntax: objectName.methodName()
//  You will typically describe fullName() as a method of the person object, and fullName as a property.

//  Adding a new method to an object is easy:
/*  person.name = function () {
    return this.firstName + " " + this.lastName;
  };  */

let szo = "Hello Vilag!"
szo = szo.toUpperCase();
pTag1.innerText = szo;


//  Any JavaScript object can be converted to an array using Object.values()
var objektbolTomb = Object.values(szemelyObjektum)
pTag1.innerText = objektbolTomb  //  Az Object.values() megjeleniti az objektum ertekeit.

var objektumStringge = JSON.stringify(szemelyObjektum2);
pTag1.innerHTML = typeof objektumStringge;

const person = {
    name: "John",
    today: new Date()     //  objektum propertyjeben uj datumot is lehet tarolni!!
  };

let string= JSON.stringify(person)
pTag1.innerHTML = string

//   JSON.stringify will not stringify functions
//   This can be "fixed" if you convert the functions into strings before stringifying

const person1 = {
    name: "John",
    age: function () {return 30;}
  };
  person1.age = person1.age.toString();  //  A funckciot Stringge konvertaljuk
  
  let myString = JSON.stringify(person1);  //  Utana stringifyoljuk az objectet
  pTag1.innerText = myString;

  //  Lehet JSON.stringify-olni a tomboket is.

const arr = ["John", "Peter", "Sally", "Jane"];

let myString2 = JSON.stringify(arr);
pTag1.innerText =  myString2;

//  Object Accesorok  -  Getter, Setter  //

//  Getters and setters allow you to get and set object properties via methods.
//  A getterekkel meg lehet szerezni az objektum propertijeit metodusok segitsegevel.

const person3 = {
    firstName: "John",
    lastName: "Doe",
    language: "spanyol",
    get firs(){
        return this.firstName.toUpperCase();
    },
    get lang() {
      return this.language;
    },
    set lName(laName){
        this.lastName = laName
    }
  };
  person3.lName = "Kalmar"  //  beallitani egy object property erteket setterrel


  pTag1.insertAdjacentText("beforeend", " " + person3.lang)

// Setter-el az object propertyjet lehet beallitani

pTag1.insertAdjacentText("beforeend", " " + person3["lastName"])

pTag1.insertAdjacentText("beforeend", " " + person3.firs)

const person4 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set langu(lang) {
      this.language = lang.toUpperCase();
    }
  };

person4.langu = "nemet";
pTag1.insertAdjacentText("beforeend", " " + person4["language"]);

//  Ezzel a metodussal meglehet adni getter-eket es setter-eket
//  Object.defineProperty()

const object1 = {szamlalo: 0}
// Define setters and getters
Object.defineProperty(object1, "reset",{
    get : function () {this.szamlalo = 0}
});
Object.defineProperty(object1, "increment",{
    get : function () {this.szamlalo++;}
});
Object.defineProperty(object1,"decrement",{
    get : function () {this.szamlalo--;}
});
Object.defineProperty(object1,"add",{
    set : function (value){this.szamlalo += value;}
});
Object.defineProperty(object1,"subtract",{
    set : function (value){this.szamlalo -= value;}
});

pTag1.insertAdjacentText("beforeend",object1.add = 5);
pTag1.insertAdjacentText("beforeend",object1.add = 5);
pTag1.insertAdjacentText("beforeend",object1.reset);
pTag1.insertAdjacentText("beforeend",object1.subtract = 2);
pTag1.insertAdjacentText("beforeend",object1.increment);
pTag1.insertAdjacentText("beforeend",object1.decrement);
pTag1.insertAdjacentText("beforeend",object1.szamlalo);

//  Object Constructors  //  Objektum epitok  // The way to create an "object type", 
//  is to use an object constructor function.
//  Objects of the same type are created by calling the constructor function with 
//  the new keyword

function SzemelyObjektEpito(vez, ker, age, haj){
    this.vezeteknev = vez;
    this.keresztnev = ker;
    this.kor = age;
    this.hajszin = haj;
    this.nemzetiseg = "Magyar"   //  Igy az object propertynek lehet alapertelmezett erteket adni
}

const szemelyObject = new SzemelyObjektEpito("Keresztes", "Geza", 45, "barna")

pTag1.insertAdjacentText("beforeend"," " + szemelyObject.nemzetiseg);

// Add a name method to object
szemelyObject.name = function() {
    return this.vezeteknev + " " + this.keresztnev;
  };
  pTag1.insertAdjacentText("beforeend"," " + szemelyObject.name());

//  Az epito funkcio meghatarozhat metodusokat is
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
      return this.firstName + " " + this.lastName;
    };
  }
function Person2(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
    this.lastName = name;
    };
  }
const person8 = new Person2("Sandor", "Andras", 35, "barna");
person8.changeName("Peter");
pTag1.insertAdjacentText("beforeend"," " + person8.lastName );

//  JavaScript has built-in constructors for native objects:

//  new String()    // A new String object
//  new Number()    // A new Number object
//  new Boolean()   // A new Boolean object
//  new Object()    // A new Object object
//  new Array()     // A new Array object
//  new RegExp()    // A new RegExp object
//  new Function()  // A new Function object
//  new Date()      // A new Date object

//  Object.prototype  Ez az osszes javascript object prototipusanak csucsa. Ne modositsd.

//  The JavaScript prototype property allows you to add new properties to object constructors:
function Person3(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
Person3.prototype.nemzetiseg = "Magyar"
console.log(Person3.prototype.nemzetiseg)

//  The JavaScript prototype property also allows you to add new methods to objects constructors:
Person3.prototype.teljesNev = function (){
    return this.lastName + this.firstName
}
const szemely3 = new Person3("Geza", "Juhasz", 23, "kek")
console.log(szemely3.teljesNev())

//  for...of Loop-al lehet itaralni stringeket es tomboket is
const nev = "W3Schools"
let kiiratas = ""
for(valtozo of nev){
kiiratas += valtozo + "<br>"
}

pTag1.innerHTML = kiiratas

const tomb = [1,45,6,8,2,99,78];
kiiratas = "";
for(ertek of tomb){
    kiiratas += ertek + "<br>";
}

pTag1.innerHTML = kiiratas


// Home Made Iterable, a next metodussal lehet elkesziteni
function szamaim(){  // The problem with a home made iterable:
                     // It does not support the JavaScript for..of statement.
  let n = 0
  return {
    next: function(){
      n += 10;
      return {value:n, done: false};
    }
  };
}

// Create Iterable
const n = szamaim();
n.next();   //  minden meghivaskor noveli az n erteket 10-el
n.next();
pTag1.innerHTML = n.next().value

//  A javascript iteralo egy objektum aminek van Symbol.iterator-a
//  A Symbol.iterator az egy fuggveny ami return-ol egy next() fuggvenyt
//  Egy itaralo-t lehet iteralni a kovetkezo koddal: for(const x of iterable) {}

//  Eloszor csinalunk egy objektumot
const objektum1 = {};

//  Utana iteralhatova tesszuk
objektum1[Symbol.iterator] = function (){
  let n = 0;
  kesz = false
  return {
    next() {
      n += 10;
      if(n == 100){kesz = true}
      return {value:n, done:kesz}
    }
  }
}

//  mostmar lehet az objektumon haszznalni a for...of loop-ot
//  The Symbol.iterator method is called automatically by for..of
kiiratas = ""
for(x of objektum1){
kiiratas += x + "<br>"
}
pTag1.innerHTML = kiiratas

//  The Symbol.iterator method is called automatically by for..of
//  De manualisan is meg lehet hivni:

// Create an Iterator:
let iterator = objektum1[Symbol.iterator]();

kiiratas = ""
while(true){  //  Itt a true azt jelenti hogy a ciklus vegtelenszer fut le
  const result = iterator.next();
  if(result.done) break  //  Viszont a break megallitja a ciklust futtatasat!
  kiiratas += result.value + "<br>"  //  Ez a kod csak a break utan hajtodik vegre es egyszer, miutan a result.done igazra valtozik
}

pTag1.innerHTML = kiiratas

                      //  Set = Egyedi ertekek gyujtemenye  //


//  Minden ertek csak egyszer szerepelhet egy set-ben
//  Egy set barmilyen adattipus barmilyen erteket tartalmazhatja

//  a new Set() uj setet hoz letre

//  Adj egy tombot a new Set()-nek:
const letters = new Set(["a","b","c","d","e"])

//  Create a Set and add literal values:

const letters2 = new Set();
letters2.add("a");
letters2.add("b");
letters2.add("c");

// Csinalj valtozokat:
const a = "a";
const b = "b";
const c = "c";

// Create a Set:
const letters3 = new Set();

// Add hozza a valtozokat a sethez:
letters3.add(a);
letters3.add(b);
letters3.add(c);

pTag1.innerHTML = letters3.size
//  Ha ugyanazt az elemet adod hozza tobbszor, csak az elso lesz elmentve

//  A forEach() modszer meghiv egy fuggvenyt minden set elemre

kiiratas = ""
letters.forEach(function(setelem){
  kiiratas += setelem + "<br>"
})
pTag1.innerHTML = kiiratas

//  A values() metodus egy itarator objektumot return-ol ami tartalmazza a set minden erteket

letters.values();
//  Mostmar hasznalhatod az iterator objektumot hogy hozzaferj az elemekhez

// Create an Iterator Object
const myIterator = letters2.values();

// List all Values:
kiiratas = ""
for(x of myIterator){
  kiiratas += x + "<br>"
}
pTag1.innerHTML = kiiratas

//  A Set has no keys. keys() returns the same as values(). letters.keys()   // Returns [object Set Iterator]
//  entries() returns [value,value] pairs instead of [key,value] pairs.
const iteratorObject2 = letters.entries();

//  List all Entries:

kiiratas = ""
for(x of iteratorObject2){
  kiiratas += x + "<br>"
}
pTag1.innerHTML = kiiratas

//  A Set-ek Objektumok
//  instanceof = valami peldanya-e valaminek. pl:
pTag1.innerHTML = letters instanceof Set;


                          //  Maps  //

//  A Map kulcs ertek parokat tartalmaz ami barmilyen adattipus lehet
//  A Map emlekszik a kulcsok beillesztesenek eredeti SORRENDJERE.
//  A Mapnak van egy property-je ami megmutatja a Map meretet.
//  A new Map() egy uj Map Objektumot kesz
//  A set() beallitja az erteket egy kulcsnak a Mapban 
//  A get() megszerzi az erteket egy kulcsnak a Mapban
//  delete()	Removes a Map element specified by a key
//  A has() igazkent ter vissza, ha egy adott kulcs van a Map-ben
//  A forEach() modszer meghiv egy callback-et minden kulcs/ertek parra a Map-ben
//  Az entries() egy object itarator-t ad vissza a kulcs/ertek parokkal a Map-ben
//  A keys() egy iteralhato objektumot ad vissza a kulcsokkal a Map-bol
//  A values() metodus iteralhato objektumot ad vissza a Map ertekeibol.
//  A size property visszaadja a Map elemeinek szamat

//  You can create a Map by passing an Array to the new Map() constructor:
//  Uj Map letrehozasa:
const fruits = new Map([
  ["alma",500],
  ["korte", 700],
  ["barack", 900]
])
pTag1.innerHTML = fruits.get("alma")

//  You can add elements to a Map with the set() method:

const fruits2 = new Map();
fruits2.set("palinka", 1500);
fruits2.set("bor", 650);
fruits2.set("likor", 2000);
pTag1.innerHTML = fruits2.get("likor");

//  A set() metodussal meg is lehet valtoztatni mar meglevo Map ertekeket
fruits2.set("likor", 1250);
pTag1.innerHTML = fruits2.get("likor");
pTag1.innerHTML = fruits2.size
fruits2.delete("bor");
pTag1.innerHTML = fruits2.has("likor")

//  A clear() method minden elemet torol a Map-bol
fruits2.clear();
pTag1.innerHTML = fruits2.has("likor");

pTag1.innerHTML = fruits instanceof Map;

//  Mik a kulonbsegek az Objektumok es a Map-ok kozott:
//  Az obejktum direkt modon nem iteralhato, a map direkt modon iteralhato
//  Az objectnek nincs size propertyje, a Map-nak van
/*  Az objectnel a kulcsoknak stringeknek vagy szimbolumoknak kell lenniuk.
    A Mapnal a kulcs barmilyen adattipus lehet.
    Az objektumnal a kulcsok nincsenek jol rendszerezve, a mapnal a kulcsok rendszerezve vannak
    beillesztesi sorrend szerint.
    Az obejktumnak vannak alapertelmezett kulcsai, a Mapnak nincsenek.  */

// List all entries

kiiratas = "";
fruits.forEach(function(ertek,kulcs){    //  a forEach()method mindig egy callback funkciot hasznal
kiiratas += kulcs + ": " + ertek + "<br>"
})
pTag1.innerHTML = kiiratas

//  Az entries() metodus viszont egy iterator objektumot hoz letre a kulcs es ertek parokkal a Map-bol


kiiratas = "";
for(const x of fruits.entries()){
  kiiratas += x + "<br>"
}
pTag1.innerHTML = kiiratas

//  The keys() method returns an iterator object with the keys in a Map:

kiiratas = "";
for(const x of fruits.keys()){
  kiiratas += x
}
pTag1.innerHTML = kiiratas

//  The values() method returns an iterator object with the values in a Map:

kiiratas = "";
for(const x of fruits.values()){
  kiiratas += x
}
pTag1.innerHTML = kiiratas

//  A values() metodust arra is hasznalhatod hogy osszeadd az ertekeket egy Map-ban
// Sum all value:
let total = 0;
for(x of fruits.values()){
  total += x
}
pTag1.innerHTML = total

//  A Map-ban az objektumokat lehet kulcskent hasznalni, ez egy fontos eleme a Map-nek:
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits4 = new Map();

// Add new Elements to the Map
fruits4.set(apples, 500);  //  itt a kulcs egy objektum, ezert nem szabad stringbe irni.
fruits4.set(bananas, 300);
fruits4.set(oranges, 200);

pTag1.innerHTML = fruits4.get(apples);