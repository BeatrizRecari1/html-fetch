const coffeeList = document.getElementById("coffeeList")

function addSingleCoffee(coffee) {
    const newListItem = document.createElement('li')
    const newText = document.createTextNode(coffee.title)
    newListItem.appendChild(newText)
    return newListItem
}

function newCoffeeList(listOfCoffees) {
    const newList = document.createElement('ul')
    // loop through the list of coffees and add each one to this list
    listOfCoffees.forEach(coffee => {
        const thisItem = addSingleCoffee(coffee)
        newList.appendChild(thisItem)
    })
    coffeeList.innerText = ''
    coffeeList.appendChild(newList)
}

function getCoffee(type) {
    coffeeList.innerText = "Loading..."
    fetch(`https://api.sampleapis.com/coffee/${type}`)
        .then(response => response.json()) //Just need the json body
        .then(data => { // We got the json data
            // We got out list of cofee... now let's put on the screen
            newCoffeeList(data)
        })
        .catch(err => console.error(err))
}

// this is equivalent to above's function 
// async function getCoffee2() {
//     coffeeList.innerText = "Loading...";
// }