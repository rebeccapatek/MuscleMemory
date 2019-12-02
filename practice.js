const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    
    return ageInDogYears
}
const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)


const dogStatement = (dogBreed) => {
    if (dogBreed == "meow") {
        return `I like cats.`
    } else {
        return `My favorite dog breed is ${dogBreed}`
    }
     
}
const myFavorite = dogStatement("meow")
console.log(`When it comes to pets, ` + myFavorite)

const mySum = (b,a,c) => {
    const sum = a + b + c

    return sum
}
const add3 = mySum (4,11,17)
console.log(add3) 


const go = (direction, speed) => {
    if (speed >= 75) {
        return `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
    } else {
        return `The car is moving ${direction} at ${speed} mph.`
    }
}

go("west", 50)


console.log(go("forward", 80))

const evenOrOdd = (num) => {
    if ((num % 2) === 0) {
        return `even`
    }
    else {
        return `odd`
    }
}
console.log(evenOrOdd(9))

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
const notkWords = words.filter((word) => {
    return !word.startsWith("k")
})
/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
console.log(notkWords)
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
const joinedWords = (arrayOfWords) => {
    return arrayOfWords.join(' ') 
}


/*
    Invoke the filtering function and store its return value
 */
const sentenceWithNoK = joinedWords(notkWords)

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
console.log(sentenceWithNoK)

const filterOutKWords = (arrayOfWords) => {
    let wordsWithoutK = []
    //using a for...of this time to push non-k words to wordsWithoutK array
    for (const word of arrayOfWords) {
        if (!word.startsWith("k")) {
            wordsWithoutK.push(word)
        }
    }
    return wordsWithoutK
}
// Leah's practice to create a function to filter out K words using for/of

const filterOutK = (arrayOfWords) => {
    let wordsNotK = []
    for (const word of arrayOfWords) {
        if (!word.startsWith("k")) {
            wordsNotK.push(word)
        }
    }
    return wordsNotK
}
// Leah's practice but with a for/each

const filterOutWordsWithForEach = (arrayOfWords) => {
    let wordsWithoutK = []
        arrayOfWords.forEach((word) => {
            if (!word.startsWith("k")) {
                wordsWithoutK.push(word)
            }
        });
    return wordsWithoutK
}
// Now we need to invoke the funtion to actually give the array of words
filterOutWordsWithForEach(words)
// Now we need to a funtion to return a single string from the array of words
const stringBuilder = (arrayOfWords) => {
    let joined = arrayOfWords.join(" ")
    return joined
}
// Invoke the filtering function and store it's returned value / /
let filteringFunctionForWordsArray = filterOutK(words)
// Invoke the String Builder Function ///
console.log(stringBuilder(filteringFunctionForWordsArray))


const svensChances = () => {
    const randomNumber = Math.random() * 3
    if (randomNumber < 1) {
        return true
    } 
    else {
        return false
    }
}

if (svensChances() == true) {
    console.log("Sven hooked a tuna!  ")
}
else {
    console.log("Sven came home empty handed! ")
}
let order = (sandwich, side, drink, dessert) => {
    let newMeal = {
        sandwich: sandwich,
        side: side,
        drink: drink,
        dessert: dessert
    };
    return newMeal;
};
console.log(order("grilled cheese", "chips", "coke", "cookie"));

const twice = number => number * 2
const timesFive = number => number * 5
const square = number => number * number
const cubes = number => (number * number * number)
const bigify = (number, operation) => {
    const result = operation(number)
    return result
}
const number = 7
const by2 = bigify(number, twice)
const by5 = bigify(number, timesFive)
const byItself = bigify(number, square)
const byItselfcube = bigify(number, cubes)

console.log(by2)
console.log(by5)
console.log(byItself)
console.log(byItselfcube)


let person = {
    firstName: "Rebecca",
    lastName: "Patek"
}
const mail = (person) => {
    return `${person.firstName} ${person.lastName} got the mail`
}
const pig = (person) => {
    return `${person.firstName} ${person.lastName} went grocery shopping`
}
const grass = (person) => {
    return `${person.firstName} ${person.lastName} mowed the lawn`
}
const broom = (person) => {
    return `${person.firstName} ${person.lastName} swept the floor`
}
const queen = (person) => {
    return `${person.firstName} ${person.lastName} vacuumed the rug`
}
const bath = (person) => {
    return `${person.firstName} ${person.lastName} scrubbed the tub`
}
console.log(mail(person))

// lazy day
const dayPlanner = (task, person, day) => {
    const sentence = task(person);
    return `${sentence} on ${day}.`; 
};


console.log(dayPlanner(mail, person, "Wednesday"));


