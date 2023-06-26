const Matrix = [
    [1, 2, 0], 
    [4, 5, 6], 
    [7, 8, 9]
]

const d1 = [Matrix[0][0],Matrix[1][1],Matrix[2][2]]
const d2 = [Matrix[0][2],Matrix[1][1],Matrix[2][0]]

const res = d1.reduce((a,b)=>a+b) - d2.reduce((a,b)=>a+b)

const out = 
`
diagonal pertama = ${Matrix[0][0]} + ${Matrix[1][1]} + ${Matrix[2][2]} = ${Matrix[0][0]+Matrix[1][1]+Matrix[2][2]}
diagonal kedua = ${Matrix[0][2]} + ${Matrix[1][1]} + ${Matrix[2][0]} = ${Matrix[0][2]+Matrix[1][1]+Matrix[2][0]}

maka hasilnya adalah ${d1.reduce((a,b)=>a+b)} - ${d2.reduce((a,b)=>a+b)} = ${res}
`

console.log(out)

