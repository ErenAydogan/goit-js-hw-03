const createSlug = (text) => {
    let updatedText = [];
    for (const char of text) {
        if (char === " ") {
            updatedText.push("-");
        } else {
            updatedText.push(char.toLowerCase());
        }
    }
    return updatedText.join("");
}
    
const slugify = (title) => {
    return createSlug(title);
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"   