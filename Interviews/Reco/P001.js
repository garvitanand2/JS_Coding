function numberSum(num) {
    let sum = 0;
    while(num != 0 && num > 1){
        sum = sum + num %10;
        num = num /10;
    }
    return Math.floor(sum);
}


function producePair(number){
    
}