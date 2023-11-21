const start = () => {
    let chooseOddOrEven = prompt("Choose odd or even: ");
    let chooseNum = parseInt(prompt("Choose a number between 1 and 5: "));
    let randomNum = randomNumFunc();
    let sum = chooseNum + randomNum;
    if(checkOddOrEvenFunc(sum, chooseOddOrEven) === true){
        console.log(`${sum} - You win!`);
    }
    else{
        console.log(`${sum} - You lose!`);
    }
}

const randomNumFunc = () => {
    return Math.floor(Math.random() * 5 + 1 );
}

const checkOddOrEvenFunc = (num, oddOrEven) => {
    if(num % 2 === 0 && oddOrEven === "even"){
        return true;
    }
    else if(num % 2 !== 0 && oddOrEven === "odd"){
        return true;
    }
    return false;
}

start();