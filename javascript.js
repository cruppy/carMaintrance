

var fuelPrice = 0
var fullTankFuel = 0
var fullTankMileage = 0
var tankYearMileage = 0
var insuranceOsago = 0
var insuranceKacko = 0
var carTax = 0
var maintranceYear = 0
var additionalCost = 0
var ticket = 0
var rentCarSpace = 0

// COUNT
var total = 0
var resultOneYear = 0
var resultOneDay = 0
var costMileage = 0
var costOneKm = 0
//var fuelTotalPrice = 0


function load() {
    console.log('загружаем тестовые параметры')
    fuelPrice = 45
    fullTankFuel = 65
    fullTankMileage = 430
    tankYearMileage = 12000
    insuranceOsago = 9450
    insuranceKacko = 87000
    carTax = 47500
    maintranceYear = 30500
    additionalCost = 8000
    ticket = 1000
    rentCarSpace = 4500
    console.log(fuelPrice, maintranceYear,ticket)

    document.getElementById("fuelPrice").value = fuelPrice
    document.getElementById("fullTankFuel").value = fullTankFuel
    document.getElementById("fullTankMileage").value = fullTankMileage
    document.getElementById("tankYearMileage").value = tankYearMileage
    document.getElementById("insuranceOsago").value = insuranceOsago
    document.getElementById("insuranceKacko").value = insuranceKacko
    document.getElementById("carTax").value = carTax
    document.getElementById("maintranceYear").value = maintranceYear
    document.getElementById("additionalCost").value = additionalCost
    document.getElementById("ticket").value = ticket
    document.getElementById("rentCarSpace").value = rentCarSpace
    //document.getElementById('fuelTotalPrice').value = fuelTotalPrice

}

//window.onload = load()

function totalCount() {
    // //Стоимость владение в год
    // total = insuranceOsago + insuranceKacko + carTax + maintranceYear + additionalCost + ticket + rentCarSpace
    // console.log('Стоимость владение в год ', total)
    //
    // //Стоимость владедния в день
    //
    // resultOneDay = total / 365
    // console.log('Стоимость владедия за 1 день ', resultOneDay)
    //
    // //Стоимость трат на топливо за 1 год
    //
    // fuelTotalPrice =
    //
    // //стоимость 1 км в год
    //
    // costOneKm = (fullTankFuel / fullTankMileage) * 100
    // console.log('литров на 100 км = ', costOneKm)
    // document.getElementById("costOneKm").value = costOneKm.toFixed(2)
    //
    //

    //траты за 1 год
    total = insuranceOsago + insuranceKacko + carTax + maintranceYear + additionalCost + ticket + rentCarSpace
    document.getElementById("totalCount").value = total

    //стоимость 1 км в год

    costOneKm = (fullTankFuel / fullTankMileage) * 100
    console.log('литров на 100 км = ', costOneKm)
    document.getElementById("costOneKm").value = costOneKm.toFixed(2)

    //расчет стоимости владения за год

    resultOneYear = (total + costMileage)
    console.log('владение за 1 год = ', resultOneYear)
    document.getElementById("resultOneYear").value = resultOneYear.toFixed(2)

    //расчет стоимости владения в день

    resultOneDay = resultOneYear / 365
    console.log('владение за 1 день = ', resultOneDay)
    document.getElementById("resultOneDay").value = resultOneDay.toFixed(2)

    //расчет стоимости 1 км пробега в год

    costMileage = resultOneYear / tankYearMileage
    console.log('стоимость пробега 1 км в год = ', costMileage)
    document.getElementById("costMileage").value = costMileage.toFixed(2)

    //totalCount

}