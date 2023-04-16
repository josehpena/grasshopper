const grasshoper = (number) => {
    
    let sum = 0;

    for(let i = 0; i < number; i++)
        sum = sum + (i + 1);

    return sum;
}

module.exports = {
    grasshoper
}