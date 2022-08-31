// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)

 cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)

cats
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
cats
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
cats}

function appendCat(name) {
   let copyOfCats = [...cats, name]
 return copyOfCats
}

function prependCat(name) {
   let copyOfCats = [name,...cats]
    return copyOfCats
}

function removeLastCat() {
    let copyOfCats = [...cats]
    copyOfCats.pop()
    return copyOfCats
   }

function removeFirstCat() {
    let copyOfCats = [...cats]
    copyOfCats.shift()
    return copyOfCats
}