// -------------------------------------------------------------
// function findUniq(arr){
//     if(arr[0] != arr[1] && arr[0] != arr[2]){
//         return arr[0]
//     }else if(arr[0] != arr[1] && arr[0] == arr[2]){
//         return arr[1]
//     }else{
//         var comparador = arr[0]
//     }
//     let arrUniq = arr.filter(k => comparador != k)
//     return arrUniq[0]
// }
// function divisors(integer){
//     var array = []
//     for(var i=2; i < integer;i++){
//         if(integer%i == 0){
//             array.push(i)
//         }
//     }
//     if(array.length > 0){
//         return array
//     }else{
//         return (integer + " is prime")
//     }
// }
// -------------------------------------------------------------

// -------------------------------------------------------------
// function bouncingBall(h,  bounce,  window) {
//     if(h < 0 || bounce >= 1 || bounce <= 0 || window > h || window < 0){
//         return (-1)
//     }
//     var counter = 0
//     var bouncingH = h
//     while (bouncingH > window) {
//         bouncingH = bouncingH*bounce
//         counter += 1 
//         if(bouncingH > window){
//             counter += 1
//         }
//     }
//     return counter
//   }
// -------------------------------------------------------------

// -------------------------------------------------------------
// function isValidIP(str) {
//     var array = str.split(".")
//     if(array.length != 4){
//         return false
//     }
//     for(var i=0; i < array.length; i++){
//         let array2 = array[i].split("")
//         console.log(array2)
//         for(var k=0; k < array2.length; k++){
//             if(typeof(1) != typeof(parseInt(array2[k]))){
//                 return false
//             }
//         }
//     }
//     if((array[0] >= 0 && array[0] <= 255) && (array[1] >= 0 && array[1] <= 255) && (array[2] >= 0 && array[2] <= 255) && (array[3] >= 0 && array[3] <= 255)){
//         return true
//     }else{
//         return false
//     }
//   }
// -------------------------------------------------------------

// -------------------------------------------------------------
// var romanNumbers = {
//     1 : "I",
//     5 : "V",
//     10 : "X",
//     50 : "L",
//     100 : "C",
//     500 : "D",
//     1000 : "M",
// }
// function solution(number){
//     var array = []
//     let elegido = number
//     while(elegido > 0.99){
//         let rest = elegido%10
//         elegido = (elegido - rest)/10
//         array.push(rest)
//     }
//     array = array.reverse()
//     let length = array.length
//     console.log(array)
//     console.log(length)
//     var numero = ""
//     var romanNumbers = {
//         1 : "I",
//         5 : "V",
//         10 : "X",
//         50 : "L",
//         100 : "C",
//         500 : "D",
//         1000 : "M",
//     }
                         
//     console.log(numero)
// }
// function separarEnDigitos(number){
//     array = []
//     let elegido = number
//     while(elegido > 0.99){
//         let rest = elegido%10
//         elegido = (elegido - rest)/10
//         array.push(rest)
//     }
//     return array.reverse()
// }
// -------------------------------------------------------------

// -------------------------------------------------------------
// function likes(names){
//     let length = names.length
//     let length2 = names.length - 2
//     let likes
//     switch(length){
//         case 0:
//             likes = "no one likes this"
//             return likes
//         case 1:
//             likes = names[0] + " likes this"
//             return likes
//         case 2:
//             likes = names[0] + " and " + names[1] + " like this"
//             return likes
//         case 3:
//             likes = names[0] + ", " + names[1] + " and " + names[2] + " like this"
//             return likes
//         default:
//             likes = names[0] + ", " + names[1] + " and " + length2 + " others like this"
//             return likes
//     }
// }
// -------------------------------------------------------------

// -------------------------------------------------------------
// function twoSum(numbers, target) {
//     for(k = 0; k < numbers.length; k++){
//         for(i = k+1; i < numbers.length; i++){
//             if(numbers[k] + numbers[i] == target){
//                 let array = []
//                 array.push(numbers.indexOf(numbers[k]))
//                 array.push(numbers.indexOf(numbers[i], ((numbers.indexOf(numbers[k]))+1)))
//                 return array
//             } 
//         }
//     }
//   }
// -------------------------------------------------------------

// -------------------------------------------------------------
// function humanReadable(seconds) {
//     var segundos = seconds
//     var minutos
//     var horas
//     var horarioLegible
//     if (segundos < 60 && segundos < 10){
//         horarioLegible = "00:00:0" + segundos
//         return horarioLegible
//     }else if(segundos<60){
//         horarioLegible = "00:00:" + segundos
//         return horarioLegible
//     }
//     minutos = parseInt(seconds/60)
//     k = minutos*60
//     segundos = segundos - k
//     if (segundos == 0){
//         segundos = "00"
//     }
//     if(minutos < 60 && minutos < 10){
//         horarioLegible = "00:0" + minutos + ":" + segundos
//         return horarioLegible
//     }else if(minutos < 60){
//         horarioLegible = "00:" + minutos + ":" + segundos
//         return horarioLegible
//     }
//     horas = parseInt(minutos/60)
//     k = horas*60
//     minutos = minutos - k
//     if(horas < 10) {
//         horas = "0" + horas
//     }
//     if(minutos < 10) {
//         horarioLegible = horas + ":0" + minutos + ":" + segundos
//         return horarioLegible
//     }else{
//         horarioLegible = horas + ":" + minutos + ":" + segundos 
//         return horarioLegible
//     }
//   }
// -------------------------------------------------------------

// -------------------------------------------------------------//
    // for (let j = 0; j < 9; j++) {
    //     for (let i = 0; i < 8; i++) {
    //         if (board[i][j] == board[(i+1)][j]){
    //             return "Try Again!"
    //             break
    //         }
    //     } 
    // }
    // for (let t = 0; t < 9; t++) {
    //     for (let k = 0; k < 8; k++) {
    //         if(board[t][k] == board[t][k+1]){
    //             return "Try Again!"
    //             break
    //         }  
    //     }        
    // }
//----------------------------------------------------------------//

//----------------------------------------------------------------//
// function diamond(n){
//     if (n <= 0 || n%2 == 0){
//         return null
//     }
//     for (let k = 0; k <= n; k++) {
//         if(k%2 == 0);{
//             break
//         }
//         let resto = n%k
//         let diamante = ""                                
//         for (let t = 0; t <= n; t++) {
//             if(t <= n-k)
            
//         }

        
        
//     }
//   }
// -- ---------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// let skere = "A058-A095-A140-A253-A492-A493-B004-BOO2-B027-B026-B041-B124-B133-B132-B229-B348-C008-C039-C058-C238"
// let skere2 = skere.split("-")
// let element = 0
// for (let i = 0; i < skere2.length; i++) {
//     element += 1
// }
// alert(element)
// }}
// -----------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// function isSolved(board){
//     debugger
//     for(let i = 0; i < 3; i++){
//         if((board[i][0] == board[i][1]) && (board[i][0] == board[i][2]) && board[i][0] != 0)
//             return board[i][0]
//         }
//     for(let k = 0; k < 3; k++){
//         if((board[0][k] == board[1][k]) && (board[0][k] == board[2][k]) && board[0][k] != 0){
//             return board[0][k]
//         }
//     }
//     let t = 0
//     let acc = 0
//     if((board[t][0] == board[t+1][1]) && (board[t][0] == board[t+2][2]) && board[t][0] != 0){
//         return board[t][0]
//     }else if((board[t][2] == board[t+1][1]) && (board[t][2] ==board[t+2][0] && board[t][2] != 0)){
//         return board[t][2]
//     }else{
        
//         for(let p = 0; p < 3; p++){
//             for(let r = 0; r < 3; r++){
//                 if(board[p][r] != 0){
//                     acc += 1
//                 }
//             }
//         }
//         if(acc == 9){
//             return 0
//         }else{
//             return -1
//         }
//     }
// }
// -------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// function isSolved(board) {
//     board = board.join('-').replace(/,/g,'');
//     if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//     if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//     if(/0/.test(board)) return -1;
//     return 0;
//  }
// solucion inteligente 
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// function divisorsOf(n){
//     let divisors = []
//     for(let i = 1; i <= n; i++){
//         if(n%i == 0){
//             divisors.push(i)
//         }
//     }
//     return divisors
// }

// function isPrime(n){
//     let divisors = divisorsOf(n)
//     if(divisors.length == 2 || n == 1){
//         return true
//     }else{
//         return false
//     }
// }

// function kPrimes(n){
//     let kPrimes = []
//     for(let i = n ; i >= 1; i--){
//         if(isPrime(i)){
//             kPrimes.push(i)
//         }
//     }
//     return kPrimes
// }
// var facts = []
// function factors(n){
//     if(isPrime(n)){
//         facts.push(n)
//         return facts
//     }
//     let tPrimes = kPrimes(n)
//     let fstFact
//     for(let i = 0; i < tPrimes.length; i++){
//         if(n%tPrimes[i] == 0){
//             facts.push(tPrimes[i])
//             fstFact = tPrimes[i]
//             break
//         }
//     }
//     factors(n/fstFact)
// }

// function countKprimes(k, start, end) {
//     var start = start
//     if(start == 0){
//         start += 1
//     }
//     var skere = []
//     for(let i = start; i <= end; i++){
//         facts = []
//         factors(i)
//         if(facts.length == k){
//             skere.push(i)
//         }
//     }
//     return skere
// }
// lento pero funciona :D ----------------------------------------// 
// function digits(m){
//     let digits = []
//     while(m >= 10){
//         digits.push(m%10)
//         m = (m-(m%10))/10
//     }
//     digits.push(m)
//     return digits
// }
// function nextBigger(m){
//     let mDigits = digits(m)
//     let limit = 10**(mDigits.length)
//     debugger
//     for(let i=(m+1); i < limit; i++){
//         let iDigits = digits(i)
//         for(let k=0; k<mDigits.length;k++){
//             for(let t=0; t<mDigits.length;t++){
//                 if(mDigits[k] == iDigits[t]){
//                     let pos = iDigits.indexOf(iDigits[t])
//                     iDigits.splice(pos,1)
//                     break
//                 }
//             }
//             if(iDigits.length == mDigits.length){
//                 break
//             }
//         }
//         if(iDigits.length == 0){
//             return i
//         }
//     }
//     return -1
// }
// optimizar:D

// Tique: HT-7H83-NYDV-M2BQ

// function factorial(n){
//     let fstFact = 1
//     for (let i = 1; i <= n; i++) {
//         fstFact = fstFact*i
//     }
//     if(n <= 21){
//         let arrayFact = []
//         while(fstFact>9){
//             let digit = fstFact%10
//             arrayFact.push(digit)
//             fstFact = (fstFact-digit)/10
//         }
//         arrayFact.push(fstFact)
//         console.log(arrayFact)
//         let bigFact = ``
//         for(let m = (arrayFact.length-1); m >= 0; m--){
//             bigFact += `${arrayFact[m]}`
//         }
//         return bigFact
//     }else{
//         let strFact = `${fstFact}`
//         let strFact2 = strFact.split("")
//         for(let t = 0; t < strFact2.length; t++){
//             if(strFact2[t] == "+"){
//                 let cortador = (strFact2.indexOf(strFact2[t])+1)
//                 strFact2 = strFact2.splice(cortador, strFact2.length)
//                 break
//             }
//         }
//         let number = ""
//         strFact2.forEach(element => {
//             number += element
//         });
//         number = parseInt(number)
//         console.log(number)
        
//     }

// function score(array){
//     let object = {
//         1:0,
//         2:0,
//         3:0,
//         4:0,
//         5:0,
//         6:0
//     }
//     array.forEach(element => {
//         object[element] += 1
//     });
//     let key = 0
//     for(let i=1; i < 7; i++){
//         if(object[i] >= 3){
//             key = i
//         }
//     }
//     let counter = 0
//     if(key != 1 && key != 5){
//         counter += key*100
//     }else if(key == 1){
//         object[1] -= 3
//         counter += 1000
//     }else{
//         object[5] -= 3
//         counter += 500
//     }
//     counter += object[5]*50
//     counter += object[1]*100
//     return counter
// }





