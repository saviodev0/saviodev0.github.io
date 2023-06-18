const Buttonconvert = document.querySelector(".convert-button")
const select = document.querySelector(".select-money")

    function convertvalues() {
const currencyReal = document.querySelector(".value")
const other = document.querySelector(".dolar-and-other")

const valueDigict = document.querySelector(".input-money").value

const dolarvalue = 4.87
const bitcoinvalue = 125000
const eurovalue = 5.27
const libravalue = 6.0

const somed = valueDigict / dolarvalue


 currencyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueDigict)
       
    if(select.value == "dolar"){
        other.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueDigict / dolarvalue)
    } 

    if(select.value == "euro"){
        other.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueDigict / eurovalue)
    }

    if(select.value == "libra"){
        other.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueDigict / libravalue)
    }

    if(select.value == "bitcoin"){
        other.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valueDigict / bitcoinvalue)
    }
}

function euroconvert(){
const currencyname = document.getElementById("text-two")
const currencyImage = document.querySelector(".image-currency")

if(select.value == "dolar"){
    currencyname.innerHTML="Dolar" 
    currencyImage.src ="./estados-unidos (1) 1.png"
}

if(select.value == "euro"){
    currencyname.innerHTML="Euro"
    currencyImage.src ="./Design sem nome 3.png"
}

if(select.value == "libra"){
    currencyname.innerHTML="Libra"
    currencyImage.src = "./libra 1.png"
}

if(select.value == "bitcoin"){
    currencyname.innerHTML="Bitcoin"
    currencyImage.src ="./bitcoin 1.png"
}


convertvalues()


}


select.addEventListener("change" , euroconvert)

Buttonconvert.addEventListener("click", convertvalues)
    
