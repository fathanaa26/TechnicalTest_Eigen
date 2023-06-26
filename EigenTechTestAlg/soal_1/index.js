let str1 = "NEGIE1"
let str2 = "EIGEN1"

const strParser = x => [...x]

str1 = strParser(str1)
str2 = strParser(str2)

// console.log(str1)
// console.log(str2)

const fixing = (mock, target) =>{
    let theString = []
    const len = str1.length == str2.length ? str2.length : 0
    if(len == 0){
        throw new Error("[ERR] Insufficient Array Length")
    }
    for(let i=0; i<len; i++){
        if(target !== mock || target === mock  ){ // N !== E 
            theString.push(target[i])
        }
    }
    return theString
}

const result = fixing(str1,str2).join("") 

console.log(result)
