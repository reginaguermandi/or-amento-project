// loops through all inputs and detects which input with discount id was checked and sum the values.
function calcularAVista() {
    let total = 0;
    let checkbox = document.getElementsByTagName("input");

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].id.includes('discount')) {
            if (checkbox[i].type === "checkbox" && checkbox[i].checked) {
                total += parseInt(checkbox[i].value);
            }
        }
    }
    document.getElementById('a-vista').innerHTML = `1 parcela de: R$${total}`;
    /*console.log("Total: " + total);*/
}

// loops through all inputs and detects which input with split id was checked, sums and divides the value.
function calcularParcelado() {
    let total = 0;
    let parcelValue = 0;
    let checkbox = document.getElementsByTagName("input");

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].id.includes('parcel')) {
            if (checkbox[i].type === "checkbox" && checkbox[i].checked) {
                total += parseInt(checkbox[i].value);
                parcelValue = (total / 3).toFixed(2);
            }
        }
    }
    document.getElementById('parcelado').innerHTML = `R$${total} em 3 x R$${parcelValue}`;
}

// loop through the unitary values of the products and takes the number 
//inserted in the input by the user and multiplies them giving the total value of the product purchased.
function calculateUnitProducts() {
    const unitPrices = [18, 20];
    let totalCost = 0;

    for (let i = 0; i < unitPrices.length; i++) {
        const numberUnits = document.getElementById('units-' + (i + 1)).value;
        totalCost += unitPrices[i] * numberUnits;
    }
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.innerHTML = `Valor Total: R$${totalCost.toFixed(2)}`;
}