export const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);



const = [1,2,3, [ 4,5,6,], 7, [6,7,[4,5]]]


const real_another_array = real_another_array.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("Hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name : "hitesh"})); /// interesting



let score1  = 100
let score2  = 200

console.log(Array.of(score1, score2));
