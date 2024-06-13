let score="33abc"
// score- null, undefined , bool(true/false) , string
// converting values to Number:  "33"=>33   ,   "33abc"=>NaN , true=>1 , null=>0, undefined=NaN


console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// NaN is not in number i.e. string is converted into number but value cant be converted into number

let sample="toshita"
let boolnew=Boolean(sample)
console.log(boolnew)
// 1=>true , ""=>false ,"toshita"=>true

let x=33
let y=String(x)
console.log("y=",y)
console.log(typeof y)

// *****************************operations*****************************
let value=3
let negvalue=-value
console.log(negvalue)
console.log(2**3)// 2 power of 3
//2+2   ,   2-2 ,   2*2 ,   2/2 ,   2**2    ,   2%2


let str1="toshita "
let str2="garg"
let str3=str1+str2
str1=str1+str2
console.log(str3)
console.log(str1)

console.log("1"+2)
console.log(2+'1')
console.log("2"+"4")
console.log(str1+443)
console.log("2"+1+3)// agar phle string hai to sabko string ki trh treat kiya jaega
console.log(1+2+"3")//phle conversions hokr fir string function hoga

//-------tricky conversion
console.log(+true)
console.log(+"")
