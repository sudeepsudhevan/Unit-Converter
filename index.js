// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const input = document.getElementById("input")
const btnEl = document.getElementById("inputBtn")
const meterFeet = document.getElementById("MF")
const literGallon = document.getElementById("LG")
const massPound = document.getElementById("KP")

input.value = 1
render(input.value)

btnEl.addEventListener("click", function(){
    render(Number(input.value))
})

function render(value){
    meterFeet.innerHTML= textGenerator(value,"meters","feet",3.281) 
    literGallon.innerHTML = textGenerator(value, "lites","gallons",0.264)
    massPound.innerHTML = textGenerator(value, "kilos", "pounds", 2.204)
}

function textGenerator(value,firstUnit, secondUnit, conversionRate){
    return `
    ${value} ${firstUnit} = ${(value * conversionRate).toFixed(3)} ${secondUnit} 
    | ${value} ${secondUnit} = ${(value / conversionRate).toFixed(3)} ${firstUnit}
    `
}