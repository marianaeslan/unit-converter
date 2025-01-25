let converterBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const conversionType = document.getElementById("conversion-type"); 
let resultLength = document.getElementById("len-result");
let resultVol = document.getElementById("vol-result");
let resultMass = document.getElementById("mass-result");
let resultTemp = document.getElementById("temp-result");
let resultDist = document.getElementById("dist-result");
let resultL = document.getElementById("l-result");
const hiddenSpan = document.getElementById('hidden-span');


converterBtn.addEventListener("click", function () {
  let baseValue = parseFloat(inputEl.value);
  let selectedOption = conversionType.value; 


  resultLength.textContent = "";
  resultL.textContent = "";
  resultVol.textContent = "";
  resultMass.textContent = "";
  resultTemp.textContent = "";
  resultDist.textContent = "";

  if (isNaN(baseValue)) {
      alert("Please, insert a valid value!");
      return;
  }

  switch (selectedOption) {
      case "length01":
          let toFeet = (baseValue * 3.281).toFixed(2);
          let toMeters = (baseValue / 3.281).toFixed(2);
          resultLength.textContent = `${baseValue} meters = ${toFeet} feet | ${baseValue} feet = ${toMeters} meters`;
          break;

      case "length02":
          let toCm = (baseValue * 100).toFixed(2);
          let toM = (baseValue / 100).toFixed(2);
          resultL.textContent = `${baseValue} meters = ${toCm} cm | ${baseValue} cm = ${toM} meters`;
          break;

      case "volume":
          let toGallons = (baseValue * 0.264).toFixed(2);
          let toLiters = (baseValue / 0.264).toFixed(2);
          resultVol.textContent = `${baseValue} liters = ${toGallons} gallons | ${baseValue} gallons = ${toLiters} liters`;
          break;

      case "mass":
          let toPounds = (baseValue * 2.204).toFixed(2);
          let toKg = (baseValue / 2.204).toFixed(2);
          resultMass.textContent = `${baseValue} kilos = ${toPounds} pounds | ${baseValue} pounds = ${toKg} kilos`;
          break;

      case "temp":
          let toCelsius = ((baseValue - 32) / 1.8).toFixed(2);
          let toFahrenheit = (baseValue * 1.8 + 32).toFixed(2);
          resultTemp.textContent = `${baseValue} Fahrenheit = ${toCelsius} Celsius | ${baseValue} Celsius = ${toFahrenheit} Fahrenheit`;
          break;

      case "distance":
          let toKm = (baseValue * 1.609).toFixed(2);
          let toMiles = (baseValue / 1.609).toFixed(2);
          resultDist.textContent = `${baseValue} miles = ${toKm} km | ${baseValue} km = ${toMiles} miles`;
          break;

      default:
          alert("Please, select an option!");
          break;
  }
});

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
