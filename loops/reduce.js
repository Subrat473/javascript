const mynums = [1,2,3]

const mytotal = mynums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and curval: ${currval}`);
    
    return acc + currval
}, 0)

console.log(mytotal);
