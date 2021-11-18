const shoppingList = [
    'Milk costs £1.20',
    'Cocoa costs £2.00',
    'Salad costs £2.00',
    'Carrots costs £2.00',
    'Tomatoes costs £2.50',
    'Ready meals costs £5.00',
]

const userProductName = prompt("Please add an item to your shopping list:")
const userProductPrice = Number(prompt("How much does it cost?"))
if (userProductPrice < 0 || Number.isNaN(userProductPrice)) {
    console.log("Please enter the right price.")
} else {
    shoppingList.push(`${userProductName} costs £${userProductPrice.toFixed(2)}`)
    for (const item of shoppingList) {
        console.log(item)
    }
    const sumShoppingList = 1.20 + 2.0 + 2.0 + 2 + 2.5 + 5
    const sumShoppingListTotal = userProductPrice + sumShoppingList
    console.log(`The total of yor shopping list is: £${sumShoppingListTotal.toFixed(2)}`)
}
