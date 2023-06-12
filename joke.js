function joke() {
    fetch("https://api.chucknorris.io/jokes/random"
    )
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log("data", data);
            document.getElementById('joke').innerHTML = data.value;
            const img = document.querySelector("img");
            img.src = "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSse3HRtpkCj3MlSv2lJ_bXfCe2voXMtGle8-0pC6DgtO8LjdoDImaH_sJDssSIE45CdOIIJMGr_d1fwjmLhso";
            if (!data.ok) {
                throw Error(data.statusText)
            } else {
                return data;
            }
        })
        .catch(error => {
            console.log(error)
        })
}


let osszeadas1 = document.getElementById("osszeadas").value

let eredmeny = document.getElementById("kalkulator")

function kalkulator(ertek){
    
    eredmeny.innerHTML = ertek
}

function osszeadas(){
    kalkulator("A szám értéke: " + (1+1) + osszeadas1)
}

osszeadas()

function kivonas(){
    kalkulator("A szám értéke: " + (10-6))
}
kivonas()
osszeadas()

function ketto(parameter){
    document.getElementById("promise").innerHTML = parameter
}

let promise = new Promise(function(adat1, adat2){
    let x= 5;
    if(x==5) {
        adat1("ok")
    }else{
        adat2("hiba")
    }
});

promise.then(
    function(ertek) {ketto(ertek);},
    function(error) {ketto(error)}
)