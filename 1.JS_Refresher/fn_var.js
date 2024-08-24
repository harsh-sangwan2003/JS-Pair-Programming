var f = 5;

function fn() {
    f = 6;
}
fn();
console.log(f);

function fn2(){
    // Accidental global
    f = 9;
}
fn2();
console.log(f);