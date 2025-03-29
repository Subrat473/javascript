let data = [23,45,67,54,56,44,44,45,98];
let postion = 4;
for(let i = postion; I<=data.length-1; i++){
    data[i]=data[i+1]
}
data.length = data.length-1;
console.warn(data);
