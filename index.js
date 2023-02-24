const convertButton = document.getElementById("convertBtn")
let lengthResult = document.getElementById("lengthResult")
let volumeResult = document.getElementById("volumeResult")
let massResult = document.getElementById("massResult")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
    
convertButton.addEventListener("click", function() {
    //why do I have to declare this variable inside the function?
    let enteredNumber = document.getElementById("enteredNum").value
    
    lengthResult.textContent = `${enteredNumber} meters = ${Math.round((enteredNumber * meterToFeet) * 1000) / 1000} feet | ${enteredNumber} feet = ${Math.round((enteredNumber / meterToFeet) * 1000) / 1000} meters` 
    
    volumeResult.textContent = `${enteredNumber} liters = ${Math.round((enteredNumber * literToGallon) * 1000) / 1000} gallons | ${enteredNumber} gallons = ${Math.round((enteredNumber / literToGallon) * 1000) / 1000} liters`
    
    massResult.textContent = `${enteredNumber} kilos = ${Math.round((enteredNumber * kiloToPound) * 1000) / 1000} pounds | ${enteredNumber} pounds = ${Math.round((enteredNumber / kiloToPound) * 1000) / 1000} kilos`
})