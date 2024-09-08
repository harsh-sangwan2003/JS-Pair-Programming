// Creating an object
// key : value pair
let cap = {
    name:'Steve',
    'last name':'Rogers',
    isAvenger: true,
    friends:['Bucky','Banner'],
    2:'random stuff',
    address:{
        city:"Manhatten",
        state:"New York"
    },
    // key:12365
}

// use ./[] operator to access the key of an object
// . is used to access the literal property wherease [] can access properties dynamically or with strings that may include special characters or spaces
// console.log(cap.friends);
// console.log(cap.name);
// console.log(cap.address.city);
// console.log(cap.2);
// console.log(cap."last name");

for(let key in cap){
    console.log(cap[key]);
    console.log(cap.key);
}