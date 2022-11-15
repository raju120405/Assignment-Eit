// concat 
/*
const firstWord = ['We Are '];
const EndWord = [ 'The Best Friend'];
const AddWord = firstWord.concat(   EndWord);
console.log(AddWord);
*/
//fill
/*
const friends = ['Raju','Tuhin','shipon'];
friends.fill('Arafat');
console.log(friends)
*/

// find
/*
const friendList = [
    {name:'raju',age:22},
    {name:'tuhin',age:20},
    {name:'shipon',age:21},
];
const oldestFriend = friendList.find(friend => friend.age == 22);
console.log(oldestFriend);

*/
//   filter
/*          
const friendAge = [17,20,18,19,23];
const seniorFriend = friendAge.filter(Number => Number > 20);
console.log(seniorFriend);
*/
// findIndex
// const friendAge = [17, 20, 18, 19, 23];
// const seniorFriend =friendAge.findIndex(age => age>20);
// console.log(seniorFriend); 

// forEach()     

// const friendName = [ 'adnan','tuhin', 'shipon','raju'];
// friendName.forEach(name => console.log(name));

// map()
//  const products = [
//     {name:'phone', brand:'Samsung', price: 25000},
//     {name:'camera', brand:'Canon', price: 55000},
//     {name:'laptop', brand:'Hp', price: 25000}
//  ];
//  const brand = products.map(product => product.brand);
//  console.log(brand);

// push
// const friends = ['bmc','arafat','rubel','sobuj'];
// friends.push('tuhin');
// console.log(friends);

// pop
// const friends = ['bmc', 'arafat', 'rubel', 'sobuj', 'tuhin'];
// friends.pop('tuhin');
// console.log(friends);

// shift
// const friends = ['bmc','arafat','rubel','sobuj'];
// friends.shift()
// console.log(friends);

// unshift
// const friends = ['bmc','arafat','rubel','sobuj'];
// friends.unshift('adnan');
// console.log(friends);

// join
// const books = [ 'bangla','english','math'];
// const newBooks = books.join(' and ');
// console.log(newBooks);

// includes
// const books = [ 'bangla', 'english', 'math'];
// const addBooks = books.includes('math');
// console.log(addBooks);

// reverse
// const books = [ 'bangla','english','physic'];
// books.reverse();
// console.log(books);

// slice
// const country =['bangladesh','india', 'pakistan','usa','argentina'];
// const removed = country.slice(1);
// console.log(removed);

// Write a program for concatenation two array (using spread operator).

// const Numbers = [12,04,05,56];
// const max = Math.max(32,44,56);
// const maxNumber = Math.max(...Numbers)
// console.log(max , maxNumber);

