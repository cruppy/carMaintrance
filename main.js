
function load() {
    console.log('загружаем тестовые параметры');
    let fuelPrice = 45;
    let fullTankFuel = 65;
    let fullTankMileage = 430;
    let tankYearMileage = 12000;
    let insuranceOsago = 9450;
    let insuranceKacko = 87000;
    let carTax = 47500;
    let maintranceYear = 30500;
    let additionalCost = 8000;
    let ticket = 1000;
    let rentCarSpace = 4500;

    console.log(fuelPrice, maintranceYear, ticket);

    const fuelPriceInput = document.getElementById('fuelPrice');
    fuelPriceInput.value = fuelPrice;

    const fullTankFuelInput = document.getElementById('fullTankFuel');
    fullTankFuelInput.value = fullTankFuel;

    const fullTankMileageInput = document.getElementById('fullTankMileage');
    fullTankMileageInput.value = fullTankMileage;

    const tankYearMileageInput = document.getElementById('tankYearMileage');
    tankYearMileageInput.value = tankYearMileage;

    const insuranceOsagoInput = document.getElementById('insuranceOsago');
    insuranceOsagoInput.value = insuranceOsago;

    const insuranceKackoInput = document.getElementById('insuranceKacko');
    insuranceKackoInput.value = insuranceKacko;

    const carTaxInput = document.getElementById('carTax');
    carTaxInput.value = carTax;

    const maintranceYearInput = document.getElementById('maintranceYear');
    maintranceYearInput.value = maintranceYear;

    const additionalCostInput = document.getElementById('additionalCost');
    additionalCostInput.value = additionalCost;

    const ticketInput = document.getElementById('ticket');
    ticketInput.value = ticket;

    const rentCarSpaceInput = document.getElementById('rentCarSpace');
    rentCarSpaceInput.value = rentCarSpace;
}

//window.onload = load()

function totalCount() {
    const fuelPriceInputValue = +document.getElementById('fuelPrice').value;
    const fullTankFuelInputValue = +document.getElementById('fullTankFuel').value;
    const fullTankMileageInputValue = +document.getElementById(
        'fullTankMileage').value;
    const tankYearMileageInputValue = +document.getElementById(
        'tankYearMileage').value;
    const insuranceOsagoInputValue = +document.getElementById(
        'insuranceOsago').value;
    const insuranceKackoInputValue = +document.getElementById(
        'insuranceKacko').value;
    const carTaxInputValue = +document.getElementById('carTax').value;
    const maintranceYearInputValue = +document.getElementById(
        'maintranceYear').value;
    const additionalCostInputValue = +document.getElementById(
        'additionalCost').value;
    const ticketInputValue = +document.getElementById('ticket').value;
    const rentCarSpaceInputValue = +document.getElementById('rentCarSpace').value;

    //траты за 1 год
    const totalCountInput = document.getElementById('totalCount');
    totalCountInput.value = insuranceOsagoInputValue + insuranceKackoInputValue +
        carTaxInputValue + maintranceYearInputValue +
        additionalCostInputValue + ticketInputValue + rentCarSpaceInputValue;

    const costOneKmInput = document.getElementById('costOneKm');
    costOneKmInput.value = ((fullTankFuelInputValue / fullTankMileageInputValue) * 100)

    const resultOneYearInput = document.getElementById('resultOneYear');
    resultOneYearInput.value = (totalCountInput + costOneKmInput)

    const resultOneDayInput = document.getElementById('resultOneDay');
    resultOneDayInput.value = (resultOneDayInput / 365)

    const costMileageVInput = document.getElementById('costMileage');
    costMileageVInput.value = (resultOneYearInput / tankYearMileageInputValue)







    // //стоимость 1 км в год
    //
    // costOneKm = (fullTankFuel / fullTankMileage) * 100;
    // console.log('литров на 100 км = ', costOneKm);
    // document.getElementById('costOneKm').value = costOneKm.toFixed(2);
    //
    // //расчет стоимости владения за год
    //
    // resultOneYear = (total + costMileage);
    // console.log('владение за 1 год = ', resultOneYear);
    // document.getElementById('resultOneYear').value = resultOneYear.toFixed(2);
    //
    // //расчет стоимости владения в день
    //
    // resultOneDay = resultOneYear / 365;
    // console.log('владение за 1 день = ', resultOneDay);
    // document.getElementById('resultOneDay').value = resultOneDay.toFixed(2);
    //
    // //расчет стоимости 1 км пробега в год
    //
    // costMileage = resultOneYear / tankYearMileage;
    // console.log('стоимость пробега 1 км в год = ', costMileage);
    // document.getElementById('costMileage').value = costMileage.toFixed(2);
    //
    // //totalCount
}

