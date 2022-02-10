const isPrimeNumber = n => {
    let i = 2, result = 'YES'
    while (i < n && result === 'YES') {
        if (n % i === 0) {
            result = 'NO'
            break
        }
        else i++
    } 
    return result
}

console.log(isPrimeNumber(8));

const printTo = n => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

printTo(10)

const printOdd = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) console.log(i)
    }
}

printOdd(10)

const printEven = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) console.log(i)
    }
}

printEven(10)

const printPrime = n => {
    for (let i = 2; i <= n; i++) {
        if (isPrimeNumber(i) === 'YES') console.log(i)
    }
}

printPrime(10)

const sumAcc = n => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

console.log(sumAcc(10))