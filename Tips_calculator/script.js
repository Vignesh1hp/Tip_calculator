// selecting calculate button. 
let calculate = document.getElementById('calculate_btn');

// adding event listener for clicking the calculate button.
calculate.addEventListener('click',function(){
    // selecting and storing value of bill amount input.
    let bill_Amount = parseFloat(document.getElementById('billAmount').value);
    // selecting and storing value of tip percentage input.
    let tip_Percentage = parseFloat(document.getElementById('tipsPercentage').value);
    // calculating tip amount.
    let tip_Amount = (bill_Amount * (tip_Percentage/100)).toFixed(2);
    document.getElementById('tipAmount').value = tip_Amount;
    // calculating total amount.
    let total_Amount = (bill_Amount+parseFloat(tip_Amount)).toFixed(2);
    document.getElementById('totalAmount').value = total_Amount;
})