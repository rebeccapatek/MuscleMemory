const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    
    return ageInDogYears
}
const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)


const dogStatement = (dogBreed) => {
    if ("meow") {
        return `I like cats.`
    } else {
        return `My favorite dog breed is ${dogBreed}`
    }
     
}
const myFavorite = dogStatement("schnauzer")
console.log("When it comes to pets, " + myFavorite)

const mySum = (b,a,c) => {
    const sum = a + b + c

    return sum
}
const add3 = mySum (4,11,17)
console.log(add3) 

const go = (direction, speed) => {
    if (direction >= 75) {
        return `The car is moving ` + direction + ` at ` + speed ` mph. SLOW DOWN!`
    } else {
        return `The car is moving `+ direction + ` at ` + speed + ` mph.`
    }
}
const statement = go("forward", 80)
console.log(statement)