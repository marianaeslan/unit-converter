let converterBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
let resultLength = document.getElementById("len-result")
let resultVol= document.getElementById("vol-result")
let resultMass = document.getElementById("mass-result")
const hiddenSpan = document.getElementById('hidden-span')

converterBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let toFeet = (baseValue * 3.281).toFixed(3)
    let toMeters = (baseValue / 3.281).toFixed(3)
    resultLength.textContent = `${baseValue} meters = ${toFeet} feet | ${baseValue} feet = ${toMeters} meters`

    let toGallons = (baseValue * 0.264).toFixed(3)
    let toLiters = (baseValue / 0.264).toFixed(3)
    resultVol.textContent = `${baseValue} liters = ${toGallons} gallons | ${baseValue} gallons = ${toLiters} liters`

    let toPounds = (baseValue * 2.204).toFixed(3)
    let toKg = (baseValue / 2.204).toFixed(3)
    resultMass.textContent = `${baseValue} kilos = ${toPounds} pounds | ${baseValue} pounds = ${toKg} kilos`
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
