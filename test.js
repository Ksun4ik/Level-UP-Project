const f = (x,y) => {
let totalStr = "";
for (let i = 0; i < y; i++) {
    let str = ""; 
    for (let j = 0; j < x; j++) {
        if (i % 2 === 0) {
            str = j % 2 === 0 ? str+'#':str+'_'
        } else {
            str - j % 2 === 0 ? str+'_':str+'#'
        }
    }
    totalStr = totalStr + str + "\n";
}
console.log( totalStr);
}

f( 100,50)