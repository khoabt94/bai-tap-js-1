// 0 Check so nguyen to
const isPrimeNumber = n => {
    let i = 2, result = 'YES'
    while (i < n && result === 'YES') {
        if (n % i === 0) {
            result = 'NO'
        }
        else i++
    } 
    return result
}

console.log(isPrimeNumber(5));


// 1 In luy ke
const printTo = n => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

printTo(10)


// 2 In so le
const printOdd = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) console.log(i)
    }
}

printOdd(10)


// 3 In so chan
const printEven = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) console.log(i)
    }
}

printEven(10)


// 4 In so nguyen to
const printPrime = n => {
    for (let i = 2; i <= n; i++) {
        if (isPrimeNumber(i) === 'YES') console.log(i)
    }
}

printPrime(10)


// 5 Sum luy ke
const sumAcc = n => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

console.log(sumAcc(10))


// 6 Sum binh phuong luy ke
const sumSqAcc = n => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i**2
    }
    return sum
}

console.log(sumSqAcc(10))


// 7 Sum so le
const sumOddAcc = n => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) sum = sum + i
    }
    return sum
}

console.log(sumOddAcc(10))


// 8 Check so le
const isOddNumber = n => {
    let i = 0, result = 'YES', nStr = String(n)
    while (i <= nStr.length && result === 'YES') {
        if (nStr[i] % 2 === 0) {
            result = 'NO'
        }
        else i++
    } 
    return result
}

console.log(isOddNumber(135));

// 9 Multiply table
const multiplyTable = () => {
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 11; j++ ) {
            console.log(`${i}x${j}=${i*j}`)
        }
    }
}

multiplyTable()

// 10 Count space
const whiteSpace1 = str => {
    return str.match(/ /g).length
}

console.log(whiteSpace1(' Hello  world'))

const whiteSpace2 = str => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') count = count + 1
    }
    return count
}

console.log(whiteSpace2(' Hello  world'))

// 11 Remove space enter
const removeSpace1 = str => {
    let strResult = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && str[i] !== '\n') strResult = strResult + str[i]
    }
    return strResult
}

console.log(removeSpace1(' Hello  world'))

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const removeSpace2 = str => {
    let strResult = ''
    for (let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i].toLowerCase())) strResult = strResult + str[i]
    }
    return strResult
}

console.log(removeSpace2(' Hello  world'))

// 12 Reverse strung
const reverseStr1 = str => {
    let strResult = ''
    for (let i = str.length -1 ; i >= 0; i--) {
        strResult = strResult + str[i]
    }
    return strResult
}

console.log(reverseStr1('This is a beautiful day'))

const reverseStr2 = str => {
    const result 
    = str
        .split('')
        .reverse()
        .join('')
    
    return result
}

console.log(reverseStr2('This is a beautiful day'))


