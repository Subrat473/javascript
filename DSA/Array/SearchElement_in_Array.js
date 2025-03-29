// Search an Element in Array

 let data = [23,45,54,45,76,45,43,90];
 let item1 = document.getElementById('searchEl').value;
 let item = 76;
 let index = undefined;

 for(i=0; i<data.length-1; i++){
    //console.warn(data[i])
    if(data[i]===item)
    {
        index=i;
        break;
    }
 }
 console.warn(index);

 // console.warn(data.indexOf(item))
 // data.splice(2.1)
 // console.warn(data)