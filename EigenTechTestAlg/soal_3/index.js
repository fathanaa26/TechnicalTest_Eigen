const INPUT = ['xc', 'dz', 'bbb', 'dz']  
const QUERY = ['bbb', 'ac', 'dz']
const OUTPUT = []

const sumOfSim = (inp, q) => {
    for(i=0; i<q.length; i++){
        const sumEl = inp.filter(e => e === q[i]).length
        OUTPUT.push(sumEl)
    }
    return OUTPUT
}

const result = `OUTPUT = [${sumOfSim(INPUT,QUERY)}] karena kata '${QUERY[0]}' terdapat ${OUTPUT[0]} pada INPUT, kata '${QUERY[1]}' tidak ada pada INPUT, dan kata '${QUERY[2]}' terdapat ${OUTPUT[2]} pada INPUT`

console.log(result)