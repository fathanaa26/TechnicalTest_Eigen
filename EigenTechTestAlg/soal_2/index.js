const str = "Kerjakan dengan menggunakan menggunakaw bahasa pemograman yg anda kuasai"

const parse = str.split(" ")

const maxLenWord = (arr) => {
    let maxLen = ""

    for(let i=0; i<arr.length; i++){
        if(arr[i].length > maxLen.length || arr[i].length == maxLen.length) {
            maxLen = arr[i]
        }
    }

    const longest = maxLen.length

    return `${maxLen}: ${longest} character`
}

console.log(maxLenWord(parse))
