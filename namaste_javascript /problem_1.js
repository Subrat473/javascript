// print number 1 to 5 each after one second


function x() {
    for (let i = 1; i <= 5; i++) {
        function close (i){
        setTimeout(function(){
            console.log(i);
            
        }, i*1000);
    }
    close(i);
        
    }
    console.log("Namaste Javascript");
    
    
}
x();