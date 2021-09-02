let name = prompt('What is your name');
console.log(name);
let lastName = prompt('What is your lastname?');
console.log(lastName);
let fullName = name + ' ' + lastName;

const age = confirm('Are u 18?');

if(age) {
    console.log('yes');
    alert(fullName + ' access allowed');
}
else {
    console.log('no');
    alert(fullName + ' access denied');
}
