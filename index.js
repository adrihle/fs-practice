//Basic dependencies for files works
var fs = require('fs')

//Read from file and parse to array
const array = fs.readFileSync('stock.txt').toString().split('\n')

//Parse strings removing text control characters
let list = []

for (i in array){
    const value = array[i].replace('\r', '')
    list.push(value)
}

//Count elements 
var count = {}

list.forEach(function(i) { 
    count[i] = (count[i]||0) + 1
})

//Parse to object's array of elements and counts of them
let lista = []

Object.keys(count).forEach(function(key) {
    const item = {
        barcode: key,
        cant: count[key]
    }
    //include here a search database code with key value and add to item object
    lista.push(item)
})

console.log(lista)




