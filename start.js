function maxNum(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}
function maxNumPrint(num1, num2) {
    if (num1 > num2)
        console.log(num1);
    else
        console.log(num2);
}
function zogi(num1) {
    if (num1 % 2 === 0)
        return "Zogi";
    else
        return "EZogi";
}
function stringLen(word) {
    return word.length;
}
function arrN(number) {
    var arr = [];
    for (var i = 1; i < number; i++) {
        arr.push(i);
    }
    return arr;
}
function arrMaxNum(arr) {
    var max = arr[0];
    for (var i = 0; i < (arr.length - 1); i++) {
        max = maxNum(max, arr[i + 1]);
    }
    ;
    return max;
}
;
