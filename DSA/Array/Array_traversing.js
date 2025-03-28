let data = [4,5,6,7,76,66,5,4,4,333,6,6,];
// for (let i = 0; i<data.length; i++)
// {
//     document.write(`Array ${i} is ${data[i]})

// }

// let x = 10;
// document.write(data[x]);

function getElement()
{
    let el = document.getElementById('element').value
    if(el<data.length && typeof parseInt(el) === "number")
    {
        alert(data[e])
    }else{
        alert("please enter valid input")
    }
   
} 