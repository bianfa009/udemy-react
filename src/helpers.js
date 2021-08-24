export function calculateTotal(amount, deadline) {

    let amountTotal;
    if(amount <= 1000) {
        amountTotal = amount * .25;
    } else if (amount > 1000 && amount <= 5000) {
        amountTotal = amount * .20;
    } else if (amount > 5000 && amount <= 10000) {
        amountTotal = amount * .15;
    } else {
        amountTotal = amount * .10;
    }

    console.log(amountTotal);

    let deadlineTotal = 0;

    switch(deadline) {
        case 3:
            deadlineTotal = amount * .25;
            break;
        case 6:
            deadlineTotal = amount * .10;
            break;
        case 12:
            deadlineTotal = amount * .15;
            break;
        case 24:
            deadlineTotal = amount * .20;
            break;
        default:
            break;    
    }

    return deadlineTotal + amountTotal + amount;

}

