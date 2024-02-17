// selecting calculate button. 
let calculate = document.getElementById('calculate_btn');

// adding event listener for clicking the calculate button.
calculate.addEventListener('click',function(){
    // selecting and storing value of bill amount input.
    let bill_Amount = document.getElementById('billAmount').value;
    // selecting and storing value of tip percentage input.
    let tip_Percentage = document.getElementById('tipsPecentage').value;
    // calculating tip amount.
    let tip_Amount = document.getElementById('tipAmount').value = (bill_Amount/tip_Percentage).toFixed(2);
    // calculating total amount.
    document.getElementById('totalAmount').value = (parseFloat(bill_Amount)+parseFloat(tip_Amount)).toFixed(2);
})