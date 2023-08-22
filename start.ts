function maxNum(num1:number,num2:number) {
    if (num1 > num2) return num1;
    else return num2;
}

function maxNumPrint(num1:number,num2:number) {
    if (num1 > num2) console.log(num1);
    else console.log(num2);
}

function zogi(num1:number) {
    if (num1 % 2 === 0 ) return "Zogi"
    else return "EZogi";
}

function stringLen(word:string) {
    return word.length;
}

function arrN(number:number) {
    let arr:number[] = []
    for( let i = 1 ; i <number; i++){
        arr.push(i);
    }
    return arr;
}

function arrMaxNum(arr:number[]) {
    let max:number = arr[0];
    for( let i = 0 ; i < (arr.length-1) ; i++){
        max = maxNum(max,arr[i+1])
    };
    return max;
};

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}  