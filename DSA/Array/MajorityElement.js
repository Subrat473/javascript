// Given and array of size n, return the majority element.
// The majority element is the element that appears more than [ n / 2 ] times.
// You may assume that the majority element always exists in the array.


// Ex: 1                          
// Input: nums = [3,2,3]          
// Output: 3                     


// Ex: 2 
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2






// Brute force

arr = [2,2,1,1,1,2,2]
N = 7;

for (i = 0 to N) {
    count=0
    for(j=0 to N) {
        if(arr[i] == arr[j]){
            count++
        }
    }
    if(count>N/2) {
        print(Majority Element : arr[i])
    }
}
T.C = > 0(n2)



// Approach 2 :- Using Objects/Hashmap

let obj = {};
for(let x of nums){
    if(obj[x]== undefined){
        obj[x] = 1;
    }
    else{
        obj[x]++
    }
}


max = 0;
mj = arr[0];
for(let x in obj){
    if (obj[x]>max){
        max = obj[x];
        mj = x;
    }
}

return Number(mj);



// Apprach 3 :-  Moor's Voting Algorithm


mj = arr[0];
count = 0;
for(i=0 to N){

    if(count == 0){
        mj = arr[i]
    }
    

    if(arr[i] == mj){
        count++
    }
    else{
        count--
    }
}

return(mj);


