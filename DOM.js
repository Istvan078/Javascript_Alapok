var pTag1 = document.getElementById("pTag1");

//  When a web page is loaded, the browser creates a Document Object Model of the page.
//  Az object model segitsegevel a javascript egy dinamikus html-t tud csinalni

//  HTML DOM methods are actions you can perform (on HTML Elements).
//  HTML DOM properties are values (of HTML Elements) that you can set or change.
//  A DOM-ban minden HTML elem objektumkent van meghatarozva
//  The programming interface is the properties and methods of each object.
//  A property is a value that you can get or set (like changing the content of an HTML element).
//  A method is an action you can do (like add or deleting an HTML element).

//  Az innerHTML property-vel meg tudjuk szerezni egy elem tartalmat
//  The innerHTML property is useful for getting or replacing the content of HTML elements.

//  The HTML DOM document object is the owner of all other objects in your web page.
//  A document object reprezentalja a weboldaladat, ezert ha barmilyen mas html elemhez akarsz
//  hozzaferni, akkor eloszor a document objecthez kell hozzaferni

//  HTML elemek megkeresese.
//  Metodusok:
//  document.getElementById(id) ; document.getElementsByTagName(name); 
//  document.getElementsByClassName(name)

//  element.attribute = new value	Change the attribute value of an HTML element
//  element.style.property = new style	Change the style of an HTML element
//              Method	                 /                           Description
//  element.setAttribute(attribute, value)	Change the attribute value of an HTML element

//  document.removeChild(element)	Egy html elem eltavolitasa
//  document.appendChild(element)	Egy html elem hozzaadasa
//  document.replaceChild(new, old)	Egy html elem felulirasa egy masikkal
//  document.write(text)	Write into the HTML output stream

//  esemenykezelo hozzaadasa: document.getElementById(id).onclick = function(){code}
//  (esemenykezelo kod hozzaadasa egy onclick esemenyhez)

/*                           A document property-ei:
        Property                    Meghatarozas

    document.anchors	        Returns all <a> elements that have a name attribute
    document.baseURI	        Returns the absolute base URI of the document
    document.body	            Returns the <body> element
    document.cookie	            Returns the document's cookie
    document.doctype	        Returns the document's doctype
    document.documentElement	Returns the <html> element
    document.documentMode	    Returns the mode used by the browser
    document.documentURI	    Returns the URI of the document
    document.domain	            Returns the domain name of the document server
    document.embeds	            Returns all <embed> elements
    document.forms	            Returns all <form> elements
    document.head	            Returns the <head> element
    document.images	            Returns all <img> elements
    document.implementation	    Returns the DOM implementation
    document.inputEncoding	    Returns the document's encoding (character set)
    document.lastModified	    Returns the date and time the document was updated
    document.links	            Returns all <area> and <a> elements that have a href attribute
    document.readyState	        Returns the (loading) status of the document
    document.referrer	        Returns the URI of the referrer (the linking document)
    document.scripts	        Returns all <script> elements
    document.strictErrorChecking	Returns if error checking is enforced
    document.title	            Returns the <title> element
    document.URL	            Returns the complete URL of the document

                            Hogyan talalhatsz meg HTML elemeket?
    Finding HTML elements by id
    Finding HTML elements by tag name
    Finding HTML elements by class name
    Finding HTML elements by CSS selectors
    Finding HTML elements by HTML object collections   */

//  If the element is found, the method will return the element as an object (in element).
//  If the element is not found, element will contain null.
/*  let h2 =   document.getElementById("h2")  
pTag1.innerHTML = h2

let h2Tagek = document.getElementsByTagName("h2")
pTag1.innerHTML = h2Tagek[1].innerHTML

let div1 = document.getElementById("container");
let h2TagekDivenBelul = div1.getElementsByTagName("h2");
pTag1.innerHTML = h2TagekDivenBelul[1].innerHTML;

let allContainerByClass = document.getElementsByClassName("dobozok");
pTag1.innerHTML = allContainerByClass[2].innerHTML

//  If you want to find all HTML elements that match a specified CSS selector 
//  (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
//  This example returns a list of all <h2> elements with class="h2Tagek".
const x = document.querySelectorAll("h2.h2Tagek");
pTag1.innerHTML = x[1].innerHTML

//  Finding HTML Elements by HTML Object Collections
//  This example finds the form element with id="frm1", 
//  in the forms collection, and displays all element values:
const forms = document.forms["frm1"];
let text = ""
for(let i=0; i<forms.length; i++){   //  Ahany input mezo van annyi a form length-je
    text += forms.elements[i].value + "<br>";  //  A .elements-el be tudunk lepni a forman beluli elemekhez
}
pTag1.innerHTML = text

let kep = document.getElementById("kep");

let clickSzamlalo = 0;
function kepValto(){
clickSzamlalo++;
if(clickSzamlalo==1){
return kep.src = "https://img.freepik.com/free-photo/red-sport-car-with-black-autotuning-road_114579-5054.jpg?size=626&ext=jpg&ga=GA1.1.179447484.1685780989&semt=ais"}
else if(clickSzamlalo==2){
    kep.src = "https://img.freepik.com/free-photo/navy-blue-sport-coupe-road-side-view_114579-5046.jpg?size=626&ext=jpg&ga=GA1.1.179447484.1685780989&semt=ais"
} else{return kep.src = "https://img.freepik.com/free-photo/luxury-black-sport-coupe-parking-road_114579-4017.jpg?size=626&ext=jpg&ga=GA1.1.179447484.1685780989&semt=ais"}
}

// a document.write()-al lehet kozvetlen a html-be irni!

//  HTML form validation can be done by JavaScript.
//  If a form field (fname) is empty, this function alerts a message, 
//  and returns false, to prevent the form from being submitted:

function validateForm(){
    let x = document.forms["myForm"]["fname"].value  //  a myformon belul a fname input mezo erteke
    if(x == ""){
        alert("Nem adott meg Keresztnevet!");
        return false
    }
}

//  A javascriptet gyakran hasznaljak, hogy validaljon egy szambevitelt

let szoveg = document.getElementById("szoveg")


function szamEllenorzo(){
    let inputmezo = document.getElementById("szam").value
    let text;
    if(isNaN(inputmezo) || inputmezo<1 || inputmezo>10 ){
        text = "A megadott szam nem megfelelo!"
    } else{text = "A szam megfelelo! Koszonjuk!"}
    szoveg.innerHTML = text
}

//  Typical validation tasks are:

//  has the user filled in all required fields?
//  has the user entered a valid date?
//  has the user entered text in a numeric field?

//  pattern	    Specifies the value pattern of an input element
//  disabled	Specifies that the input element should be disabled
//  a CSS Pseudo Selectorokat :-al jelolik, pl= :required, :optional, :valid

/* Constraint Validation CSS Pseudo Selectors
Selector	Description
:disabled	Selects input elements with the "disabled" attribute specified
:invalid	Selects input elements with invalid values
:optional	Selects input elements with no "required" attribute specified
:required	Selects input elements with the "required" attribute specified
:valid	Selects input elements with valid values     */

//  A display:none az elemet es a helyet teljesen eltavolitja a dokumentumbol, az esemeny-
//  kezelok sem hatnak ra. a visibility:hidden-nel viszont nem tavolitja el az elemet es
//  tovabbra is helyet foglal a dokumentumban es hatnak ra az esemenykezelok

                        //  HTML DOM Animaciok  //

//  Create an Animation Container
//  All animations should be relative to a container element.
//  A kulso kontenert style.position = relative -al erdemes megcsinalni
//  A belso dobozt pedig style.position = absolute -al

/*  JavaScript animations are done by programming gradual changes in an element's style.
The changes are called by a timer. When the timer interval is small, the animation looks continuous.
The basic code is:

id = setInterval(frame, 5);
function frame() {
  if (/* test for finished */ //) {
//    clearInterval(id);
// } else {
    /* code to change the element style */ 
///  }
//}  

function animation(){
    let id = null;
    const belsoDoboz = document.getElementById("animate");
    let pozicio = 0;
    clearInterval(id);
    id = setInterval(frame,5);
    function frame(){
        if(pozicio == 350){
            clearInterval(id);
        }else{
            pozicio++;
            belsoDoboz.style.top = pozicio + "px";
            belsoDoboz.style.left = pozicio + "px"
        }
    }
}

/*  Examples of HTML events:
When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user strokes a key  */

function changeText(a){
a.innerHTML = "Megvaltozott a tartalom!"
}

//  The onload and onunload events are triggered when the user enters or leaves the page.
//  The onload event can be used to check the visitor's browser type and browser version, 
//  and load the proper version of the web page based on the information.
//  The onload and onunload events can be used to deal with cookies.

/*  function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}  */

//  The onchange event is often used in combination with validation of input fields.
//  Az onchange esemeny akkor aktivalodik amikor elhagyod az input mezot

//  Az onmousedown esemeny addig tart, amig lenyomvatartod az egeret
//  Az onmouseup esemeny akkor aktivalodik, amikor elengeded a gombot
//  Az onload esemeny akkor tortenik meg, amikor az oldal betoltodott. Akar body-ra is ra lehet tenni.

//  Az onfocus esemeny akkor aktivalodik, pl. amikor belekattintasz egy input mezobe
//  Az onblur esemeny akkor tortenik meg, amikor egy elem elveszti a fokuszt! az onfocus ellentete.

//  onmouseover: amikor raviszed az egeret, onmouseout, amikor leviszed rola.


//                             ESEMENYFIGYELOK                                        //

//  Az addEventListener() hozzaad egy esemenyfigyelot az adott elemhez es nem irja felul
//  az elotte levo esemenyfigyeloket. Sok esemenyfigyelot lehet ugyanarra az elemre rakni.
//  ugyanabbol a tipusu esemenybol is lehet tobbet ugyanarra az elemre rakni pl:
//  akar 2 onclick esemenyt is rakhatsz ugyanarra az elemre.
//  Barmilyen DOM Objektumra rakhatsz esemenyfigyelot, nem csak HTML elemekre, pl:
//  a window objektumra.
//  Letorolhetsz esemenyfigyelot a removeEventListener() modszerrel.

//  Az 1. parametere az esemelyfigyelonek az esemeny tipusa, pl. click esemeny.
//  A 2. parametere a funkcio amit megakarunk ra hivni.
//  A 3. parametere egy boolean ertek hogy hasznaljon-e Event Bubblingot, vagy Event Capture-t.
//  A 3. parametere opcionalis.
//  onclick helyett click-et irunk click esemenynel az esemenyfigyeloknel.

document.getElementById("gomb1").addEventListener("click",function(){
    document.getElementById("h2Tag2").innerHTML = "Hello"
})
document.getElementById("gomb1").addEventListener("mouseout", mouseOut)

function mouseOut(){
    document.getElementById("h2Tag2").innerHTML = "Jo reggelt!"
}

window.addEventListener("resize",function(){  //  a resize esemeny akkor tortenik ha megvaltoztatom az ablak meretet
    document.getElementById("h2Tag2").innerHTML = "Jo napot!"
})

let p1 = 5;
let p2 = 7;
document.getElementById("gomb1").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("h2Tag2").innerHTML = a * b;
}

//  Az esemeny propagation meghatarozza az esemeny lefutasi sorrendjet az elemekkel kapcsolatban
//  pl: ha van egy p elemed egy div elemen belul es a felhasznalo kattint a p elemre, melyik
//  elem click esemenye tortenjen meg eloszor, a div eleme, vagy a p eleme?
//  A Bubbling-nal a legbelsobb elem esemenye fut le eloszor aztan a kulso. Eloszor a p elem
//  click esemenye fut le, utana pedig a div eleme.
//  A Captureing-nel forditva van. Eloszor a legkulsobb elem click esemenye fut le, majd halad
//  befele. Ennel a peldanal maradva eloszor a div click esemenye majd a p tag click esemenye fut le.
//  A 3. parameter alapertelmezett erteke false tehat hamis, ami a bubbling propagation-t hasznalja,
//  ha az ertek true tehat igaz, akkor az esemeny a Capture-ing propagation-t hasznalja.
//  Pelda:

document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the ptag element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the div element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the ptag element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the div element!");
  }, true);

  //  esemenykezelo torlese:
document.getElementById("gomb1").removeEventListener("mouseout", mouseOut)


//  A HTML Dom-al navigalhatod a node tree-t node kapcsolatokat hasznalva
//  DOM Nodes: minden ami a HTML documentumban van az egy node(csomopont):
//  A teljes dokumentum az egy document node
//  Minden HTML elem egy element node
//  A szoveg a HTML elemeken belul text node
//  minden HTML attributum attribute node
//  minden komment comment node

//  A Javscripttel minden Node-hoz hozza lehet ferni a node tree-ben.
//  Uj csomopontokat lehet csinalni es minden node-ot lehet modositani, vagy torolni.
//  a csomopontok a csomopontfaban hierarchikus kapcsolatban vannak egymassal.
//  kapcsolattipusaik egymassal: Parent, Child, Sibling. Szulo, Gyerek, Testver
//  Egy Node Tree-ben a legfelso node a root(root node)
//  Minden csomopontnak egy szuloje van, a gyokeret leszamitva, annak nincs szuloje
//  Egy csomopontnak lehet tobb gyereke is.
//  A testverek ugyannanak a szulonek a gyerekcsomopontjai.
//  Pelda:

/*
<html>

<head>
  <title>DOM Tutorial</title>
</head>

<body>
  <h1>DOM Lesson one</h1>
  <p>Hello world!</p>
</body>

</html>

From the HTML above you can read:

<html> is the root node
<html> has no parents
<html> is the parent of <head> and <body>
<head> is the first child of <html>
<body> is the last child of <html>
and:

<head> has one child: <title>
<title> has one child (a text node): "DOM Tutorial"
<body> has two children: <h1> and <p>
<h1> has one child: "DOM Lesson one"
<p> has one child: "Hello world!"
<h1> and <p> are siblings           */



//  Navigalni a csomopontok kozott node propertykkel lehet
/*  parentNode, childNodes[nodenumber], firstChild, lastChild, nextSibling,previousSibling
    A textnode erteket el lehet erni az .innerHTML tulajdonsaggal  */
let h2TextNodeErteke =document.getElementById("h2Tag2").innerHTML;
//  Accessing the innerHTML property is the same as accessing the nodeValue of the first child:
h2TextNodeErteke = document.getElementById("h2Tag2").firstChild.nodeValue;
let kiiratoDiv = document.getElementById("kiiratoDiv")
kiiratoDiv.innerHTML = h2TextNodeErteke;
//  Igy is hozzaferhetsz az elso gyerekelemhez:
let h2TextNodeErteke2 = document.getElementById("h2Tag2").childNodes[0].nodeValue;
kiiratoDiv.innerHTML = h2TextNodeErteke2;

//  2 property van, ami teljes hozzaferest ad a dokumentumhoz:
//  a document.body = a dokumentum teste
//  document.documentElement = a teljes dokumentum 
kiiratoDiv.innerHTML = document.documentElement.innerHTML

//  A nodeName property meghatarozza a nevet egy csomopontnak
//  A nodeName readonly
//  a csomopontneve egy elem csomopontjanak ugyanaz mint a Tag neve
//  a csomopontneve az attributumnode-nak az attributum neve
//  a csomopontneve a textNodenak mindig #text
//  a nodeName a dokumentumnNode-nak mindig #document
//  nodeName always contains the uppercase tag name of an HTML element.

//  kiiratoDiv.innerHTML = pTag1.nodeName

//  a nodeValue property meghatarozza az erteket egy csomopontnak
//  a nodeValue az elemcsomopontoknak = null
//  a nodeValue-ja a Textnodeoknak a szoveg maga
//  a nodeValue-ja az attributum csomopontoknak az attributum erteke

//  a nodeType property readonly
//  megmondja a node tipusat
//  kiiratoDiv.innerHTML = pTag1.nodeType

/*  The most important nodeType properties are:
Node	            Type	Example
ELEMENT_NODE	    1	<h1 class="heading">W3Schools</h1>
ATTRIBUTE_NODE	    2	 class = "heading" (deprecated)
TEXT_NODE	        3	W3Schools
COMMENT_NODE	    8	<!-- This is a comment -->
DOCUMENT_NODE	    9	The HTML document itself (the parent of <html>)
DOCUMENT_TYPE_NODE	10	<!Doctype html>
*/

//              Creating New HTML Elements (Nodes)


//  eloszor csinalnod kell egy elementNode-ot, tehat magat az elemet, majd a letrehozott
//  elemet hozza kell adnod egy mar meglevo elemhez

const ujPTagNode = document.createElement("p");
const ujTextNode = document.createTextNode("Egy uj P Tag");
ujPTagNode.appendChild(ujTextNode);

const ujDiv = document.createElement("div");
ujDiv.appendChild(ujPTagNode);
document.body.appendChild(ujDiv);
//  az appendChild modszer mindig utolso gyerekelemkent adja hozza az elemet;

//  az insertBefore() metodussal ezt el lehet kerulni
const ujDiv2 = document.createElement("div");
ujDiv2.appendChild(ujPTagNode);
const div2 = document.getElementById("myDiv1")
document.body.insertBefore(ujDiv2,div2) // 1.parameter: mit rakjon be? 2.par: melyik gyerekelem ele?

//  HTML elemet torolni a remove() metodussal lehet.
div2.remove();

//  For browsers that does not support the remove() method, you have to find the
//  parent node to remove an element:
const parent = document.getElementById("myDiv2");
const child = document.getElementById("myP2");
parent.removeChild(child);  //  a zarojelbe irom azt a gyerekelemet, amit ki akarok torolni

//  Neha eleg, ha tudod a gyerekelem nevet, mert a parentNode property megtalalja a szulojet!
const child2 = document.getElementById("h2Tag3");
child2.parentNode.removeChild(child2)  //  a gyerekelemre kell rarakni a .parentNode property-t
//  es a zarojelben is a gyerekelem nevet kell magadni


//  Elemek felulirasa a DOM-ban a replaceChild() metodussal lehetseges
const parent2 = document.getElementById("div11");
const child3 = document.getElementById("p11");
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
parent2.replaceChild(para,child3);  //  Az 1.parameter hogy mit rakunk be, a 2. hogy minek a helyere!


//                         A HTML Collection Objektum

//  a getElementsByTagName() metodus egy HTMLCollection objektumot ad vissza.
//  A HTMLCollection object az egy tomb szeru lista a HTML elemekrol.
let HTMLCollection1 = document.getElementsByTagName("p");
//  a htmlcollection elemeihez indexelessel lehet hozzaferni, mint a tombokben:
let div22 = document.getElementById("div2");
/*  div22.innerHTML = HTMLCollection1[3].innerHTML

//  a length property megmondja hogy hany elem van a HTML Collection-ben
console.log(HTMLCollection1.length)
//  a length property hasznos, ha keresztul akarsz loopolni az elemeken a HTML Collectionben
//  a HTML Collection-re lehet sima for ciklust alkalmazni length property-vel
 for(i=0;i<HTMLCollection1.length; i++){
    div22.innerHTML += HTMLCollection1[i].innerHTML
}   */

//                          NODELIST


//  a NodeList objektum egy lista a node-okrol amit megfogtal a dokumentumban
//  hasonlo mint a HTML Collection objektum
//  a childNodes property nodelist objektumot dob vissza es a querySeclectorAll() method is.
const myNodeList = document.querySelectorAll("h2");
//  indexszammal hozzalehet ferni a NodeList objektum elemeihez
//  div22.innerHTML = myNodeList[1].innerHTML;
//  a length property itt is megmutatja a csomopontok szamat a csomopontlistaban
//  div22.innerHTML = myNodeList.length;

//  itt is lehet for ciklust hasznalni a length propertyvel a loopolashoz(hurkolashoz):
for(i=0;i<myNodeList.length;i++){
    div22.innerHTML += myNodeList[i]
}

//  a NodeList is egy tombszeru gyujtemeny. a node-okhoz indexszamokkal fersz hozza.
//  a HTML Collection az dokumentum elemek listaja
//  a NodeList pedig dokumentum csomopontok listaja
//  a HTML Collection elemeihez hozzaferhetsz a nevuk,id-juk vagy index szamukon keresztul
//  a NodeList elemeihez csak az indexszamukon keresztul ferhetsz hozza

//  a HTML Collection az mindig egy elo gyujtemeny. Peldaul: ha hozzaadsz egy <li> elemet egy
//  listahoz a DOM-ban, a lista a HTML Collection-ben is meg fog valtozni.

//  a NodeList leggyakrabban egy statikus gyujtemeny. Pelda: ha adsz egy listaelemet a
//  a listahoz a DOMban, a lista a NodeList-ben nem fog megvaltozni.
//  a getElementsByClassName() es a getElementsByTagName() egy HTML Collection-t ad vissza!
//  a querySelectorAll() az statikus NodeList-et ad vissza
//  childNodes property egy elo NodeList-et ad vissza