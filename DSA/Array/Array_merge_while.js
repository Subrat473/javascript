// Merge Two in Array with While loop

let data1 = [3,5,6,7,8,54,343,54];
let data2 = [4,8,7,6,76];
let data3 =[];
let d1=0;
let d2=0;
let d3=0;
while(d1<data1.length && d2<data2.length){
    if(data[d1]<data[d2])
    {
        data3[d3]=data1[d1];
        d1++;
        
    }else{
        data3[d3]=data2[d2];
        d2++;
        console.warn();
        
    }
    d3++;
}
console.warn(d1);


while(d1<data.length){
    data3[d3]=data1[d1];
    d1++;
    d3++;
}
console.warn(data3);

