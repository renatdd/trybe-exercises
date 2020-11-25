let costValue = 2;
let saleValue = 1;

if (costValue < 0 || saleValue < 0) {
    console.log("ERROR: Both values must be positive.")
} else {
    costValue = costValue * 1.2;
    singleProfit = saleValue - costValue;
    profitInAThousand = singleProfit * 1000;
    console.log(profitInAThousand);
}