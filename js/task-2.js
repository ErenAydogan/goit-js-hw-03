const findArrayLength = (array) =>
{
    let i = 0
    for (const index of array)
    {
        i++
    }
    return i;
}

const makeArray = (firstArray, secondArray, maxLength) => {
    const allArray = firstArray.concat(secondArray)
    if (findArrayLength(allArray) < maxLength)
    {
        maxLength = findArrayLength(allArray)
    }
    const updatedArray = []
    let length = 0;
    while (length < maxLength)
    {
        updatedArray.push(allArray[length])
        length++
    }
    return updatedArray
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
