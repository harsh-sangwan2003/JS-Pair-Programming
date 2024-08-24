var a = 10;
console.log(a);

function fn() {

    var a = 20;
    console.log(a);
    a++;
    console.log(a);

    if (a) {
        var a = 30;
        console.log(a);
        a++;
        console.log(a);
    }
    console.log(a);
}

fn();
console.log(a);