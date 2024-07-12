function calculateTotal() {
    var total1 = calculateRowTotal(1);
    var total2 = calculateRowTotal(2);
    var total3 = calculateRowTotal(3);
    var total4 = calculateRowTotal(4);
    var total5 = calculateRowTotal(5);

    var grandTotal = total1 + total2 + total3 + total4 + total5;
    document.getElementById('grandTotal').innerText = grandTotal;

    var grandTotal = total1 + total2 + total3 + total4 + total5;
    document.getElementById('grandTotal2').innerText = grandTotal2;
}

function calculateRowTotal(row) {
    var quantity = parseFloat(document.getElementById('quantity' + row).value) || 0;
    var price = parseFloat(document.getElementById('price' + row).value) || 0;
    var total = quantity * price;
    document.getElementById('total' + row).innerText = total;
    return total;
}

function updateItem(row) {
    var itemValue = document.getElementById('item' + row).value;
    document.getElementById('item' + row).value = itemValue;
}