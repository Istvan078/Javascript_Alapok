var pTag= document.getElementById("pTag")
var pTag2 = document.getElementById("pTag2")
var pTag3 = document.getElementById("pTag3")
var pTag4 = document.getElementById("pTag4")

var inputNumber1 = document.getElementById("numberInput").value
var inputNumber2 = document.getElementById("numberInput2").value

pTag.style.fontSize = "50px"

/*      function igeret(visszaTeroErtekAPromisebol){
pTag.innerText = visszaTeroErtekAPromisebol
};

let promise = new Promise(function(valasz,elutasitas){
    let valtozo = 100;
if(valtozo ==100){
    valasz("Megfelelo szamot adtal meg!");
} else {
    elutasitas("Nem megfelelo szamot adtal meg!")
}
});

promise.then(
    function(ertek){
        igeret(ertek)
    },
    function(hiba){
        igeret(hiba)
    }
)

const myPromise = new Promise(function(siker,error){
    
   var idozito =  setTimeout(function(){
        pTag.style.fontSize = "40px"
        pTag.style.color = "white"
        pTag.style.backgroundImage = "linear-gradient(to right,purple, red, pink)"
        siker("Szeretlek <3")
    },3000)
})

myPromise.then(function(validag){
    pTag.innerText = validag;
    
})                                        /* akkor jo a promise, ha nem tudjuk az adatokat, de tudjuk, hogy valamilyen
                                               eredmennyel vissza kell ternunk, meg nem tudjuk milyen eredmennyel
                                               meg nem tudjuk elore mi fog tortenni, csak valamit igerunk, hogy igen
                                               adatot fogunk megadni. a felhasznalonak kotelezo megadni egy bizonyos
                                               adatot, hogy megjelenitsunk egy bizonyos reszt, pl. neem tudjuk milyen
                                               csillagjegy es o megadja hogy kos es utana jelenitunk meg infokat miutan
                                               beirta hogy kos pl. amig a promiseunk nem kap adatot addig nem fut le*/

                            // CALLBACK FUNCTIONS  //

/*
function visszahivo(visszakapottErtek){
    pTag2.innerText = visszakapottErtek 
}

function egy(){
    visszahivo("Kevin")
}

function ketto(){
    visszahivo(15000 + " Csok")
}
egy()
ketto()
egy()

// A callback fuggvenynel is csak azt tudjuk hogy lesz majd egy adat, de hogy mi azt meg nem. ilyen szempontbol
// hasonlo a promisehoz, de nem promise

function emptyDivMaker(){
    var newDiv = document.createElement("div")
    newDiv.classList.add("newDivsClass")
    document.body.appendChild(newDiv)
    return newDiv
    }
var emptyDiv = emptyDivMaker()


function showAndHide(){           
        pTag2.style.fontSize = "67px"
        pTag2.innerText = "Kecske!"
        pTag2.style.color = "green"
        pTag2.style.backgroundImage = "linear-gradient(to top, blue, green)"
    setTimeout(function(){
        pTag2.style.fontSize = "50px";
        pTag2.style.color = "white"
        pTag2.style.backgroundImage = "linear-gradient(to bottom, pink,red,purple)"
        pTag2.innerText = "Szeretlek!"
        setTimeout(showAndHide,2000)
    },2000)
}

showAndHide()
*/

/*
// Meg nem tortenik semmi, de a hatterben mar munkara kesz...
function megjelentoSzovegCallBack(ujDoboz, adat){
ujDoboz.innerHTML = adat
}

//  Ez a CallBack function, mert ezt fogjuk visszahivni
function myCalculator(num1,num2){
let eredmeny = num1+num2
return eredmeny
}

//  Erteket adunk a kalkulator funkcionknak
let szamok = myCalculator(inputNumber1 = 23,inputNumber2 = 46);

//  Meghivjuk, azaz fut a kalkulator(a szamok valtozoban)
megjelentoSzovegCallBack(emptyDiv,szamok)


 //  Mas Megoldas: 
 function megjelenoSzovegCallBack(szoveg){
    pTag3.innerHTML = szoveg
 }

 function myCalculator2(num1,num2,myCallBack){
    let eredmeny = num1+num2;
    myCallBack(eredmeny)   //  A myCallBack itt nem funkcio, csak atadunk a funkcio 3.parameterenek egy erteket a zarojelben, hogy az legyen a 3.parameter!
 }

 myCalculator2(50,50,megjelenoSzovegCallBack)




/*  fetch //-->
var myCalculator1 = url   // osszeadas //  Kaptunk egy api-t a backendtol, amiben van egy function
//  .then ag -->
function displayer(adat){
    pTag3.innerHTML = adat
}

num11 = 11;
num22 = 22;

myCalculator1(num11,num22,displayer)

// .catch ag (error ag) -->  //

getKeres  // adatot kuldunk a szerver fele es varunk valaszt
//  adat: mondjuk 2 szam, valasz: tartalmaz egy uj adatot                */




const szamokTomb = [1,-5,6,7,-76,-120,4,12,34,-87]

// Call removeNeg with a Callback
const positiveNumbers = removeNeg(szamokTomb, (x) => x>=0)

// Display Result
pTag4.innerHTML = positiveNumbers

// Remove negative numbers
function removeNeg(numbers, callback){
const uresTomb = [];
for(const y of numbers){
    if(callback(y)){
        uresTomb.push(y)
    }
} return uresTomb;
}

setTimeout(callback,3000)

function callback(){
    pTag.innerHTML = "Jo reggelt"
}

setTimeout(function(){
    ujfunkc("Jo napot!")
},3000)

function ujfunkc(adat){
    pTag.innerHTML = adat
}

setInterval(callback2,1000)

function callback2(){
    let dateAndTime = new Date();
    pTag.innerHTML = dateAndTime.getHours() + ":" + dateAndTime.getMinutes() + ":" + dateAndTime.getSeconds();
}


function displayer(adat1){
    pTag4.innerHTML = adat1
    }


async function asyncFunkcio(){
 return "Hello"
}

// Ez ugyanaz, mint az elozo: 

function asyncFunkcio2() {
    return Promise.resolve("Hello");
  }

asyncFunkcio().then(
    function(siker){displayer(siker)},
    function(hiba){displayer(hiba)}
    )


async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    pTag3.innerHTML = await myPromise;            //  az await keyword hasznalata a promise-ban
  }
  
  myDisplay();

 // Pelda reject nelkul:
async function myDisplay2() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  pTag3.innerHTML = await myPromise;
}

myDisplay2();

async function myDisplay3(){
    let prom = new Promise(function (resolve){
        setTimeout(function (){resolve("Szeretlek!")},3000)
    })
    pTag3.innerHTML = await prom
}

myDisplay3();