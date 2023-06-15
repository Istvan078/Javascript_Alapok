function JSON1(){
    var nyelvek = [             //  JSON Object
        {"nev": "HTML", "kiterjesztes": ".html"},
        {"nev": "CSS", "kiterjesztes": ".css"},
        {"nev": "Javascript", "kiterjesztes": ".js"}
    ]
    document.getElementById("JSONgyakorlas").innerHTML = JSON.stringify(nyelvek)
}

var obj = {nev: "HTML", kiterjesztes: ".html"} // object

var JSONobj = [{"nev": "HTML", "kiterjesztes": ".html"},
{"nev": "HTML", "kiterjesztes": ".html"},
{"nev": "HTML", "kiterjesztes": ".html"}]

const x = document.getElementById("geolocation")

function getLocation(){
    try {  // try = legalabb egyszer meg kell probalnia
        navigator.geolocation.getCurrentPosition(mutasdAPozit);
    } catch { // ha nem megy a try akkor belep a catch-be!
        x.innerHTML = err;
    }
}

function mutasdAPozit(pozicio){
    x.innerHTML = "Latitude: " +
    pozicio.coords.latitude + "\n" +
    "Longitude: " + pozicio.coords.longitude;
}

function vicc(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(adat => {
        console.log("Adat: ", adat)
        document.getElementById("vicc").innerHTML = adat.value;
        document.getElementById("vicc").style.display = "block"
        const kep = document.querySelector("img");
        kep.style.display = "block"
        kep.src = "https://pbs.twimg.com/profile_images/1407346896/89_400x400.jpg"
        if (!adat.ok){
            throw Error(adat.statusText)
        } else {
            return adat;
        }
    })
    .catch(error => {
        console.log(error)
    })
}

function bezar(){
    document.getElementById("vicc").style.display = "none"
    const kep = document.querySelector("img");
    kep.style.display= "none"
}
