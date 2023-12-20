//  USD to CNY

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")


// My Solution:
function usdncy(usd) {
    let convert = (usd * 6.75).toFixed(2)
    return `${convert} Chinese Yuan`
}


// Other Solutions:
const usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`


// 2
const usdcny = usd => (usd * 6.75).toFixed(2)


// 3
const usdcny = (usd) => {
    const USD_TO_CNY = 6.75
    return `${(usd * USD_TO_CNY).toFixed(2)} Chinese Yuan`
}