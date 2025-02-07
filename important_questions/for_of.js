

const arr = [5, 7, 9];
arr.foo = "Hello";

for (const i in arr) {
    console.log(i);
}

for (const i of arr) {
    console.log(i);
}
