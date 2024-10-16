// The Coupon Code


// Logical Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && 
            Date.parse(expirationDate) >= Date.parse(currentDate)
}


// Other Solutions
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}


// 2
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) {
      return false;
    }
    
    var cur = Date.parse(currentDate);
    var exp = Date.parse(expirationDate);
    if (cur > exp) {
      return false;
    }
    
    return true;
}


// 3
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
      
    let isCodeValid = enteredCode === correctCode;
    
    let isExpired = new Date(currentDate) > new Date(expirationDate) 
    
    return isCodeValid && !isExpired ? true : false;
}



// 4
const monthMap = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
    
    const getDate=(dateStr)=>{
      let [dateMonth,year] = dateStr.split(", ");
      let [month,date] = dateMonth.split(" ");
      month = monthMap.indexOf(month);
      year = parseInt(year);
      date = parseInt(date);
      return [year,month,date];
    }
    
    const isNotExpired = (expireDate, curDate)=>{
      if(expireDate[0]>curDate[0])return true;
      if(expireDate[0]===curDate[0]&&expireDate[1]>curDate[1])return true;
      if(expireDate[0]===curDate[0]&&expireDate[1]===curDate[1])return expireDate[2]>=curDate[2];
      return false;
    }
    
    function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
      if(!enteredCode||!correctCode||!(enteredCode === correctCode))return false;
      let curDate = getDate(currentDate);
      let expDate = getDate(expirationDate);
      return isNotExpired(expDate,curDate);
    }