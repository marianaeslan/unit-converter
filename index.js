let converterBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
let resultLength = document.getElementById("len-result")
let resultVol= document.getElementById("vol-result")
let resultMass = document.getElementById("mass-result")
let resultTemp = document.getElementById("temp-result")
let resultL = document.getElementById("l-result")
let resultDist = document.getElementById("dist-result")
const hiddenSpan = document.getElementById('hidden-span')

converterBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let toFeet = (baseValue * 3.281).toFixed(2)
    let toMeters = (baseValue / 3.281).toFixed(2)
    resultLength.textContent = `${baseValue} meters = ${toFeet} feet | ${baseValue} feet = ${toMeters} meters`

    let toCm = baseValue / 100
    let toM = baseValue * 100
    resultL.textContent = `${baseValue} meters = ${toCm} cm | ${baseValue} cm = ${toM} meters`

    let toGallons = (baseValue * 0.264).toFixed(1)
    let toLiters = (baseValue / 0.264).toFixed(1)
    resultVol.textContent = `${baseValue} liters = ${toGallons} gallons | ${baseValue} gallons = ${toLiters} liters`

    let toPounds = (baseValue * 2.204).toFixed(2)
    let toKg = (baseValue / 2.204).toFixed(2)
    resultMass.textContent = `${baseValue} kilos = ${toPounds} pounds | ${baseValue} pounds = ${toKg} kilos`

    let toCelsius = ((baseValue - 32) / 1.8).toFixed(1)
    let toFarenheit = ((baseValue * 1.8) + 32).toFixed(1)
    resultTemp.textContent = `${baseValue} fahrenheit = ${toCelsius} celsius | ${baseValue} celsius = ${toFarenheit} fahrenheit`

    let toKm = (baseValue * 1.6).toFixed(1)
    let toMiles = (baseValue / 1.6).toFixed(1)
    resultDist.textContent = `${baseValue} miles = ${toKm} Km | ${baseValue} Km = ${toMiles} miles`
})

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        converterBtn.click()
    }
})

inputEl.addEventListener('input', function() {
    hiddenSpan.textContent = inputEl.value || inputEl.placeholder
    inputEl.style.width = hiddenSpan.offsetWidth + 10 + 'px'
})

inputEl.dispatchEvent(new Event('input'));
