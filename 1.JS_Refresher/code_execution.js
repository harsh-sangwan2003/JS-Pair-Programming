var a = 10;
console.log(a);

function fn(){

    console.log("Fn said Hi");
    function inner(){
        console.log("Inner function");
    }
    inner();
}

fn();