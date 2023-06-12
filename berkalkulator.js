var fizetesed = document.getElementById("fizetesed");
var egyebek = document.getElementById("egyebek"); 
var brutto = document.getElementById("brutto");

fizetesed.addEventListener("input", Ft);
egyebek.addEventListener("input", Ft);

function Ft(){
    fizetesed.value = fizetesed.value.replace(/\D/g, "") + " Ft";  // Az érték előtt levő összes nem szám karaktert eltávolítja a .replace(/\D/g, "") módszer
    egyebek.value = egyebek.value.replace(/\D/g, "") + " Ft"
}



fizetesed.addEventListener("input", szamokOsszege) ;
egyebek.addEventListener("input", szamokOsszege);

function szamokOsszege(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    brutto.value = eredmeny + " Ft";   
   }

var ado = document.getElementById("ado");

fizetesed.addEventListener("input", ado1)
egyebek.addEventListener("input", ado1)

function ado1(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    var ado2= eredmeny * 0.155;
    ado.value = Math.floor(ado2) + " Ft";
    }

var nyugdijJarulek = document.getElementById("nyugdij");

fizetesed.addEventListener("input", nyugdijj)
egyebek.addEventListener("input", nyugdijj)

function nyugdijj(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    const nyugdij = eredmeny * 0.1;
    nyugdijJarulek.value = Math.ceil(nyugdij) + " Ft";
}

const egbiztositas = document.getElementById("egbizt")

fizetesed.addEventListener("input", egbizt1);
egyebek.addEventListener("input", egbizt1);

function egbizt1(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    const egbizt = eredmeny * 0.07;
    egbiztositas.value = Math.round(egbizt) + " Ft";
}

const munkaeroPiaciJarulek = document.getElementById("munkaeropj");

fizetesed.addEventListener("input", munkaeropj);
egyebek.addEventListener("input", munkaeropj);

function munkaeropj(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    const munkaerop = eredmeny * 0.015;
    munkaeroPiaciJarulek.value = Math.round(munkaerop) + " Ft";
}

var netto = document.getElementById("netto");

fizetesed.addEventListener("input", netto1);
egyebek.addEventListener("input", netto1);

function netto1(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    var ado2= eredmeny * 0.155;
    const munkaerop = eredmeny * 0.015;
    const egbizt = eredmeny * 0.07;
    const nyugdij = eredmeny * 0.1;
    var netto1 = eredmeny - munkaerop - egbizt - nyugdij - ado2;
    netto.value = netto1.toFixed(0) + " Ft";}

const szocho = document.getElementById("szocho");

fizetesed.addEventListener("input", szocho1);
egyebek.addEventListener("input", szocho1);

function szocho1(){
var eredmeny= parseInt(fizetesed.value) + parseInt(egyebek.value);
var szocho2 = eredmeny * 0.13;
szocho.value= szocho2.toFixed(0) + " Ft";
}

const munkaeroPiaciHozzajarulas = document.getElementById("munkaerpia");

fizetesed.addEventListener("input", munkaerph1);
egyebek.addEventListener("input", munkaerph1);

function munkaerph1(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    var munkaerph = eredmeny * 0.015;
    munkaeroPiaciHozzajarulas.value = Math.round(munkaerph) + " Ft";
}

const munkaltatoiraf = document.getElementById("munkraf");

fizetesed.addEventListener("input", raforditas);
egyebek.addEventListener("input", raforditas);

function raforditas(){
    var eredmeny = parseInt(fizetesed.value) + parseInt(egyebek.value);
    var szocho2 = eredmeny * 0.13;
    var munkaerph = eredmeny * 0.015;
    munkaltatoiraf.value = Math.floor(eredmeny + szocho2 + munkaerph) + " Ft" 
}


function onBlur1(){
    const salary = parseInt(fizetesed.value);
    if(salary<0 || salary < 500 || salary === ""){
    alert("Kérem adjom meg megfelelő összeget!");
    fizetesed.value= ""
}}

function onBlur2(){
    const egyeb = parseInt(egyebek.value);
    if(egyeb<0 || egyeb<500 || egyeb === ""){
        alert("Kérem adjom meg megfelelő összeget!");
        egyebek.value= ""
    }}

    
    setTimeout(function (){document.getElementById("fizetesed").style.display="none";}, 0)
    setTimeout(function (){document.getElementById("fizetesed").style.display="grid";}, 1000)

    setTimeout(function (){document.getElementById("egyebek").style.display="none";}, 0)
    setTimeout(function (){document.getElementById("egyebek").style.display="grid";}, 2000)

    setTimeout(function (){document.getElementById("brutto").style.display="none";}, 0)
    setTimeout(function (){document.getElementById("brutto").style.display="grid";}, 3000)

    var egy = document.querySelectorAll("#ado,#nyugdij,#egbizt,#munkaeropj,#netto,#szocho,#munkaerpia,#munkraf")

    egy.forEach(function(element){
        setTimeout(function (){
            setTimeout (function (){
            element.style.display="none";
        }, 0)})});

        egy.forEach(function(element){
            setTimeout(function (){
                setTimeout (function (){
                element.style.display="grid";
            }, 4000)})});

            // egyebek.removeEventListener("input", Ft, false)  --  Ha false-nak írom a 3. paramétert akkor szedi le az eseményfigyelőt, true-nál rajtahagyja.

           //  preventDefault();
                    //  TÖMBÖK(ARRAYS)  //

    /*   var tomb= [356,357,245];
       console.log(tomb);
       var tomb2 = [];
       tomb2[0] = "egy";
       tomb2[1] = "ketto";
       console.log(tomb2[0]);
       var tomb3 = ["alma", "körte", "barack"]
       console.log(tomb3[2]);

       var x = tomb3[0];
       console.log(x);
       tomb3[0] = "cseresznye";
       console.log(tomb3[0]);

       tomb3.push("banán"); // a push metódus a tömb végére illeszti be az új elemet
       console.log(tomb3);
       tomb3.pop(); // a pop metódus az utolsó elemet törli a tömbből
       console.log(tomb3);

      // delete tomb3[0]; // delete-et nem szabad használni, mert nem változik a length és undefined értéket ad
       // console.log(tomb3[0]);

       console.log(tomb3.length);

       var tomb4 = [[1,45,65],["szilva","lista","pálinka"],[25,42,63]]; // többdimenziós tömb
       console.log(tomb4[0][0]);
       console.log(tomb4[1]);
       console.log(tomb4[2][1]); // a 2. indexű tömbünk 1. indexű eleme
            // Egy tömbnek azonos típusú értékeket érdemes adni. pl. csak számokat egy tömbbe, vagy csak stringeket
            // Keverni is lehet Integert Stringekkel egy tömbben, de nem érdemes, mert logikailag nincs értelme
            // A tömb elnevezése is beszédes legyen!

//   FELADAT     //
var array = [["Alma","Banán","Szőlő", "Narancs", "Barack", "Kiwi", "Ananász", "Körte"],
["Répa", "Retek", "Hagyma","Uborka", "Krumpli"],
[[],[]]];

for(i=0; i<=50; i++){
    if (i%2 == 0){
        array[2][0].push(i)
    } else{
        array[2][1].push(i)
    }
}

console.log(array[2][1]);

document.getElementById("elsoTomb").innerText = array[0] + " Elemek Száma: " + array[0].length;
document.getElementById("masodikTomb").innerText = array[1] + " Elemek Száma: " + array[1].length;
document.getElementById("harmadikTomb").innerText = array[2] + " Páros Elemek Száma: " + array[2][0].length + " Páratlan Elemek Száma: " + array[2][1].length;

array[0].pop();
array[1].pop();
array[2][0].pop();
array[2][1].pop();
array[0].splice(2,1);
array[1].splice(2,1);
array[2][0].splice(2,1);
array[2][1].splice(2,1);

document.getElementById("elsoTomb1").innerText = array[0] + " Elemek Száma: " + array[0].length;
document.getElementById("masodikTomb1").innerText = array[1] + " Elemek Száma: " + array[1].length;
document.getElementById("harmadikTomb1").innerText = array[2] + " Páros Elemek Száma: " + array[2][0].length + " Páratlan Elemek Száma: " + array[2][1].length;

array[0].push("Kakiszilva");
array[1].push("Majomkenyérfa");
array[2][0].push(52);
array[2][1].push(51);

document.getElementById("elsoTomb2").innerText = array[0] + " Elemek Száma: " + array[0].length;
document.getElementById("masodikTomb2").innerText = array[1] + " Elemek Száma: " + array[1].length;
document.getElementById("harmadikTomb2").innerText = array[2] + " Páros Elemek Száma: " + array[2][0].length + " Páratlan Elemek Száma: " + array[2][1].length;

// stringet integerrel össze lehet adni tömbben.

array[0].splice( 1, 0, array[2][0][3])

document.getElementById("elsoTomb3").innerText = array[0] + " Elemek Száma: " + array[0].length;

document.getElementById("osszeAdottErtek").innerText = "Párosoldal 3.indexű elem + Páratlan oldal 5.indexű elem összeadott értéke: " + (array[2][0][3] + array[2][1][5]);

const objektum = {type: "Audi", model: "A3", color: "Ezüst", age: 23};
var person = {fname: "John", lname: "Doe", age: 23, height: 172};
document.getElementById("elsoObjektum").innerText="Az autóm: " + objektum.type + " " + objektum.model + " " +objektum.color+ " " +objektum.age;
document.getElementById("masodikObjektum").innerText= "A személy: " + person.fname + " "  + person.lname + " "  + person.age + " "  + person.height;

person.city = "London"
console.log(person.city)
person.city = "Belgrád"
console.log(person.city)  */

var body = document.getElementById("body");
var indul = document.getElementById("namostmartenyleg");
var kezdhetjuk1 = document.getElementById("kezdhetjuk");

function kezdhetjuk(){
    body.style.transition = "opacity 5s ease-in-out";
    body.style.opacity = "0";
    setTime(indul, "display" , "block")
    indul.addEventListener("mouseenter", function(){
        transition(indul,"color", 5000, "ease-in-out")
        setTime(indul, "background-color", "rgba(223, 96, 17, 0.7)")
        transition(indul,"opacity", 1000, "ease-in-out")
        setTime(indul, "opacity" , 0.7)
        setTime(indul, "text-decoration" , "underline")
        setTime(indul, "display" , "block")
        
    })}


function namostmarTenyleg(){
    body.style.transition = "opacity 5s ease-in-out";
    body.style.opacity = "1";
    body.classList.remove("body")
    indul.style.display = "none"
    kezdhetjuk1.style.display = "none"
}

function setTime(elem,property,value){
    elem.style[property] = value;
    setTimeout(function() {
        elem.style.transition = "5s ease-in-out";
      }, 2000);}

      function animateElement(elem, property, targetValue, duration) {
        var startValue = parseFloat(elem.style[property]) || 0;
        var startTime = null;
      
        function animationStep(timestamp) {
          if (!startTime) {startTime = timestamp;}
          var progress = timestamp - startTime;
          var currentValue = startValue + (targetValue - startValue) * (progress / duration);
      
          elem.style[property] = currentValue;
      
          if (progress < duration) {
            requestAnimationFrame(animationStep);
          }
        }
      
        requestAnimationFrame(animationStep);
      }

      function transition(element,property,duration,timingFunction)
      {element.style.transition = '${property} ${duration}ms ${timingFunction}';
    }


//return setTimeout(setTime(),4000)