function reverseNumber(num) {
    let reversed = 0;
    let num2 = Math.abs(num);
    while (num2 > 0) {
        let digit = num2 % 10;
        reversed = reversed * 10 + digit;
        num2 = Math.floor(num2 /10);
    }
    reversed = Math.sign(num) * reversed;
    return console.log(`reverse number of ${num} is ${reversed}`);
};

reverseNumber(1234);
reverseNumber(-567);
reverseNumber(1200);
reverseNumber(0);





