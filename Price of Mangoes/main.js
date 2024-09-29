// Price of Mangoes

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free



// My Solution
function mango(quantity, price){
    let freeMangos = Math.floor(quantity / 3)
    return (quantity - freeMangos) * price
}



// Other Solutions
function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
}



// 2
function mango(quantity, price){
    return Math.floor(quantity / 3) * 2 * price + quantity % 3 * price;
}



// 3
function mango(quantity, price, extra = 3){
    const discount = ~~(quantity / extra);
    return (quantity - discount) * price;
}


// 4
const mango = (quantity, price) =>
    (quantity - (quantity / 3 ^ 0)) * price;