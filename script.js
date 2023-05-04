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
    document.getElementById('a-vista').innerHTML = `R$${total.toFixed(2)}`;
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
    document.getElementById('parcelado').innerHTML = `R$${total}<br> 3 x R$${parcelValue}`;
}

// loop through the unitary values of the products and takes the number 
//inserted in the input by the user and multiplies them giving the total value of the product purchased.
function calculateUnitProducts() {
    const unitPrices = [500, 500, 500, 500, 500, 9, 1600, 1950, 1800, 168, 300, 175, 450, 500, 40, 400, 50,];
    let totalCost = 0;

    for (let i = 0; i < unitPrices.length; i++) {
        const numberUnits = document.getElementById('units-' + (i + 1)).value;
        totalCost += unitPrices[i] * numberUnits;
    }
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.innerHTML = `R$${totalCost.toFixed(2)}`;
}

function calculateUnitParcel() {
    const unitParcel = [700, 700, 700, 700, 700, 15, 2240, 2730, 2520, 235, 420, 245, 630, 700, 56, 560, 70];
    let totalCost = 0;

    for (let i = 0; i < unitParcel.length; i++) {
        const numberUnits = document.getElementById('parcel-' + (i + 1)).value;
        totalCost += unitParcel[i] * numberUnits;
        parcelCost = totalCost / 3;
    }
    const parcelCostElement = document.getElementById('parcel-cost');
    parcelCostElement.innerHTML = `R$${totalCost.toFixed(2)}<br>3 x R$${parcelCost.toFixed(2)}`;
}
