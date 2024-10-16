// Holiday III - Fire on the Boat


// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!



// My Solution
function fireFight(s){
    return s.split(' ').map( item => item === 'Fire' ? '~~' : item).join(' ')
}


// Other Solutions
function fireFight(s) {
    return s.replaceAll('Fire', '~~');
}


// 2
const fireFight = s => s.replace(/Fire/g, '~~')


// 3
function fireFight(s){
    while(s.includes("Fire"))
    {
      s = s.replace("Fire","~~");
    }
    return s;
}