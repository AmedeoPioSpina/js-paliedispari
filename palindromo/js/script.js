const start = () => {
let word = prompt();
    console.log(checkPlaindom(word));
}

const checkPlaindom = (value) => {
    let j = value.length - 1;
    for(let i = 0; i < value.length / 2; i++){
            if(value[i] !== value[j]){
                return "Not palindrom";
            }
            j--;
    }
    return "Palindrom";
}

start();