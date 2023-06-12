var tulajdonsagok = document.querySelector(".tulajdonsagok");
tulajdonsagok.style.display="none";
var header = document.getElementById("header");

function tulajdonsagokKatt(){
    tulajdonsagok.style.display = "block";
    window.location.href = "#tulajdonsagok";
}

function foOldalKatt(){
    
    document.getElementById("body").style.transition= "opacity 3s ease-in-out"
    document.getElementById("body").style.opacity = "0"
    tulajdonsagok.style.display = "none";
    window.location.href = "#header"
    header.addEventListener("mouseleave", function(){
        document.getElementById("body").style.transition= "opacity 3s ease-in-out"
        document.getElementById("body").style.opacity = "1"
    })
        
    
}

const telefon = {3 :"SAMSUNG", 4:"Galaxy S22" , 0:"Érintőképernyős" , 1:"146 x 70,6 x 7,6 mm" , 2: 167 + "g" }
//const rendszer = {operaciosRendszer: "Android 12", okostelefon: "Igen", processzorGyarto: "Exynos 2200", processzorTipusa: "MTK 5G-B+",
//processzorMagokSzama: 8, processzorSebessege: "2.8GHz,2.5GHz,1.8GHz"}

const rendszer = {0: "Android 12", 1: "Igen", 2: "Exynos 2200", 3: "MTK 5G-B+",
4: 8, 5: "2.8GHz,2.5GHz,1.8GHz"}


//const nev = Array.from(document.getElementsByClassName("nev"));
//const sel = Array.from(querySelectorAll(nev))
//nev[1].push.insertAdjacentText("beforeend",telefon.neve);
//const nev2= nev.insertAdjacentText= ("beforeend",telefon.neve)





/* var text = "";
for(let x in rendszer){
    text += rendszer[x] + " ";
} */

var rendszer1 = document.querySelectorAll("#rendszer p");
for(var i=0; i<rendszer1.length; i++){
    rendszer1[i].insertAdjacentText("beforeend", rendszer[i])
}

var fizikaijellemzok = document.querySelectorAll("#fizikaiJellemzok p");
for(var i=0; i<fizikaijellemzok.length; i++){
    fizikaijellemzok[i].insertAdjacentText("beforeend", telefon[i]);
}

var nevTipus = document.querySelectorAll(".nevTipus1");

console.log(nevTipus.length)

for(i=0; i<nevTipus.length; i++){
    if(i===0 || i===2)
    {nevTipus[i].insertAdjacentText("beforeend", telefon[3])}
    else if(i===1 || i===3){
        nevTipus[i].insertAdjacentText("beforeend", telefon[4])
    }
}

const memoria = {belsoMemoria: "128/256 GB", ramMeret: "8 GB"}
const kijelzo = {kijelzoTipusa: "Dynamic AMOLED 2X", kijelzoMerete: 6.1+"”", felbontas: "FHD+ (2340 x 1080) PX", szinmelyseg: "16 millió"}

// List all Elements  
/* let text = "";
for(let x in kijelzo){
    text += x + ": " + kijelzo[x] + "\n"
}
document.getElementById("forInCiklussalObjectKiiratva").innerHTML= text;
console.log(text)

const arrKijelzo=Object.values(kijelzo); //tömböt csinál az objektum értékeiből
console.log(arrKijelzo);

/*
const JSONstringify = JSON.stringify(kijelzo); //stringgé alakítja át az objektumot, a tulajdonságok neveit is!
console.log(JSONstringify)



class elsoOsztaly {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(){
        const datum= new Date();
        return datum.getFullYear() - this.year;
    }
}
const auto = new elsoOsztaly("Fiat",1992)

var targetDate = new Date('2023-05-10 10:22:00')
function visszaszamlalometodus1(){
var currentDate = new Date();
var idoKulonbsegKiszamitasa = targetDate - currentDate;
var seconds = Math.floor(idoKulonbsegKiszamitasa / 1000);
var countDownElement = document.getElementById("visszaszamlalo");
countDownElement.innerHTML = formatTime(seconds);
//console.log(idoKulonbsegKiszamitasa)
if(seconds<=0){
    clearInterval(setInterval1);
    countDownElement.innerHTML = "Az idő lejárt!"
}
    }
function formatTime(seconds){
    var ora= Math.floor(seconds/3600);
    var perc= Math.floor((seconds % 3600)/60);
    var masodperc= seconds % 60;
    //console.log(seconds)
    return `${padZero(ora)}:${padZero(perc)}:${padZero(masodperc)}`
    
}

function padZero(value){
return value.toString().padStart(2,'0');
}
var setInterval1 = setInterval(visszaszamlalometodus1,1000)
*/

var memoria1 = document.querySelectorAll("#memoria p");
    for(i=0; i<memoria1.length; i++){
    if(i===0)
    {memoria1[i].insertAdjacentText("beforeend", memoria.belsoMemoria)}
    else if(i===1)
    {memoria1[i].insertAdjacentText("beforeend", memoria.ramMeret)}
}  

var kijelzo1 = document.querySelectorAll("#kijelzo p");
for(i=0; i<kijelzo1.length;){
    kijelzo1[i].insertAdjacentText("beforeend", kijelzo.kijelzoTipusa);
    i++;
    kijelzo1[i].insertAdjacentText("beforeend", kijelzo.kijelzoMerete);
    i++;
    kijelzo1[i].insertAdjacentText("beforeend", kijelzo.felbontas);
    i++;
    kijelzo1[i].insertAdjacentText("beforeend", kijelzo.szinmelyseg);
    i++;
}

tulajdonsagok.style.border = "2px solid #b3b2b2";
var tulajStyle = tulajdonsagok.style;
tulajStyle.backgroundColor = "rgba(241, 244, 238, 0.7)";

var fiz = document.getElementById("fizikaiJellemzok2");

fiz.addEventListener("mouseenter", function()
{   fiz.style.color= "red";
       this.style.fontSize= "36px";
        this.style.transition = "font-size 3s";
    fizikaijellemzok.forEach(function(elemek){
        stilusMouseEnter(elemek);
        

        var currentPosition = 0;
        var targetPosition = 750;
        var increment = 3;
        var intervalTime = 10;
        elemek.style.position="relative"
        elemek.style.left= 0;
        var animation;
        elemek.style.transition= "2s"


        function slideText() {
            if(currentPosition >= targetPosition){
                clearInterval(animation);
            }else {
                currentPosition += increment;
                elemek.style.left = currentPosition + "px";}}

                setTimeout(function(){
                animation = setInterval(slideText, intervalTime);
                }, 2000)
        
    })})

    fiz.addEventListener("mouseleave", function()
    {   fiz.style.color = "blue"
        fizikaijellemzok.forEach(function(elemek){
      stilusMouseLeave(elemek)
    })    })



var rendszerEsemenyfigyelo = document.getElementById("rendszer1");

rendszerEsemenyfigyelo.addEventListener("mouseenter", function(){
    rendszerEsemenyfigyelo.style.color = "red"
    rendszerEsemenyfigyelo.style.fontSize= "36px"
        this.style.transition = "font-size 3s"
    rendszer1.forEach(function(elemek){
        stilusMouseEnter(elemek);
        

        var delay = 2000;

        var currentPosition = 0;
        var targetPosition = 750;
        var increment = 3;
        var intervalTime = 10;
        elemek.style.position="relative"
        elemek.style.left= 0;
        var animation;
        elemek.style.transition= "2s"
        
        function slideText() {
            if(currentPosition >= targetPosition){
                clearInterval(animation);
            }else {
                currentPosition += increment;
                elemek.style.left = currentPosition + "px";}}
                
        setTimeout(function(){
         animation = setInterval(slideText, intervalTime);
         }, delay);
              

        })})

rendszerEsemenyfigyelo.addEventListener("mouseleave", function(){
    rendszerEsemenyfigyelo.style.color = "blue";
    rendszer1.forEach(function(elemek){
        stilusMouseLeave(elemek)
    })
})

var memoria2 = document.getElementById("memoria1");

memoria2.addEventListener("mouseenter", function(){
    memoria2.style.color = "red"
    memoria2.style.fontSize = "36px"
    memoria2.style.transition = "font-size 3s"
    memoria1.forEach(function(elemek){
        stilusMouseEnter(elemek);

        var increment = 3;
        var currentPosition = 0;
        var targetPosition = 750;
        var intervalTime = 10;
        var animation;
        elemek.style.position = "relative"
        elemek.style.left = "0"
        elemek.style.transition = "2s"

        function slideText(){
            if(currentPosition >= targetPosition){
                clearInterval(animation)
            } else {
                currentPosition += increment;
                elemek.style.left = currentPosition + "px"
            }
        }
        setTimeout(function(){
            animation = setInterval(slideText, intervalTime)
        }, 2000)
    })
})

memoria2.addEventListener("mouseleave", function(){
    memoria2.style.color = "blue";
    memoria1.forEach(function(elemek){
        stilusMouseLeave(elemek)
    })})

var kijelzo2 = document.getElementById("kijelzo1");
kijelzo2.addEventListener("mouseenter", function(){
    kijelzo2.style.color = "red"
    kijelzo2.style.fontSize = "36px"
    kijelzo2.style.transition = "font-size 3s"
    kijelzo1.forEach(function(elemek){
        stilusMouseEnter(elemek);
    
            var increment = 3;
            var currentPosition = 0;
            var targetPosition = 750;
            var intervalTime = 10;
            var animation;
            elemek.style.position = "relative"
            elemek.style.left = "0"
            elemek.style.transition = "2s"
    
            function slideText(){
                if(currentPosition >= targetPosition){
                    clearInterval(animation)
                } else {
                    currentPosition += increment;
                    elemek.style.left = currentPosition + "px"
                }
            }
            setTimeout(function(){
                animation = setInterval(slideText, intervalTime)
            }, 2000)
        })
    })


kijelzo2.addEventListener("mouseleave", function(){
    kijelzo2.style.color = "blue";
        kijelzo1.forEach(function(elemek){
            stilusMouseLeave(elemek)
        })})


function stilusMouseEnter(elemek){
    elemek.style.color = "#b3b2b2";
    elemek.style.fontSize= "30px";
        elemek.style.transition = "font-size 3s"
        elemek.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.6)"
        elemek.style.backgroundColor = "rgba(20, 145, 32, 0.7)"
        elemek.style.boxShadow = "10px 10px 10px rgba(232, 240, 5, 0.7)"
        elemek.style.fontWeight = "bold"
        elemek.style.transition = "color 5s ease-in-out";
        elemek.style.position = "relative"
        elemek.style.left = "0"
        elemek.style.transition = "2s"
}

function stilusMouseLeave(elemek){
    elemek.style.color = "";
    elemek.style.backgroundColor = "";
    elemek.style.fontWeight = "";
}

function slide(elemek){
    var increment = 3;
            var currentPosition = 0;
            var targetPosition = 750;
            var intervalTime = 10;
            var animation;

    
            function slideText(){
                if(currentPosition >= targetPosition){
                    clearInterval(animation)
                } else {
                    currentPosition += increment;
                    elemek.style.left = currentPosition + "px"
                }
            }
            setTimeout(function(){
                animation = setInterval(slideText, intervalTime)
            }, 2000)
}


var nevt = document.getElementById("nevt");
nevt.addEventListener("mouseenter", function(){
nevTipus.forEach(function(elemek){
    slide(elemek);
    stilusMouseEnter(elemek);
    elemek.style.fontSize = "50px"
    elemek.style.fontStyle = "italic"
})})

nevt.addEventListener("mouseleave", function(){
    nevTipus.forEach(function(elemek){
        stilusMouseLeave(elemek)})})

 var tulajdonsagok1 = document.getElementById("nevt");
var h2 = document.querySelectorAll(".nevTipus1")
tulajdonsagok1.addEventListener("mouseleave", function(){
    tulajdonsagok1.classList.remove('nevt');
     for(i=0;i<1;i++){
            tulajdonsagok1.style.transition = "opacity 14s ease-in-out";
            tulajdonsagok1.style.opacity = "0";
        }})

        tulajdonsagok1.addEventListener("mouseenter", function(){
            tulajdonsagok1.classList.add('nevt');
            for(i=0;i<1;i++){
                    tulajdonsagok1.style.transition = "opacity 3s ease-in-out";
                    tulajdonsagok1.style.opacity = "1";
                }
                })
    /*tulajdonsagok1.style.opacity = "0"
    while(tulajdonsagok1.style.opacity = "0"){
        tulajdonsagok1.style.transition = "opacity 3s ease-in-out";
        tulajdonsagok1.style.opacity = "1"; */




 /*   for (var i = 0; i < nevTipus.length; i++) {
        nevTipus.forEach(function(h2)
        {h2.style.opacity= "1"})
    console.log(i)}
}) */ 

function opacityIn(){
    tulajdonsagok1.style.transition = "opacity 5s ease";
    tulajdonsagok1.style.opacity = "1";}

/* function createBubble(){
    var bubble = document.createElement("div");
    bubble.classList.add("bubble");
    document.getElementById("body").appendChild(bubble);
    bubble.addEventListener("animationend", function(){
    bubble.parentNode.removeChild(bubble);
    })
    }
setInterval(createBubble,1000); */
function randomSzamGeneralo(minErtek,maxErtek){
    return Math.floor(Math.random() * (maxErtek - minErtek + 1)) + minErtek
}


function createBubble() {
    var bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.getElementById('tulajdonsagok').appendChild(bubble);
var maxX =  - 50;  //Maximális X pozíció a képernyőn
  var maxY = window.innerHeight - 50; //Maximális Y pozíció a képernyőn

  var randomX = Math.floor(Math.random() * maxX); // Véletlen X pozíció
  var randomY = Math.floor(Math.random() * maxY);

  bubble.style.left = randomX + 'px';
  bubble.style.top = randomY + 'px';

  var randomDuration = randomSzamGeneralo(5,30) // Véletlen időtartam (40-45 másodperc)
  bubble.style.animationDuration = randomDuration + 's';

  setTimeout(function() {
    bubble.parentNode.removeChild(bubble);
  }, randomDuration * 1000);
}

setInterval(createBubble, 1000);

/*

function backtick2(){
    var egy = "női név"
    var ketto ="férfi név"
    var harom = "semleges"
    var negy = "barack" + 25
    return `${console.log("gatya"), console.log("alma")} Andrea: ${backTick(egy, negy, egy)} ${backTick(ketto, harom)}${backTick(harom, negy)}`
} console.log(backtick2())

function backTick(value,value2,value3){
return (value+=value2+value3).toString().padStart(2,'0'),
value3= new Date();
}   */