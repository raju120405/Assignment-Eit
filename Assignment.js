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
//     {name:'phone', brand:'Realme', price: 25000,},
//     {name:'camera', brand:'Canon', price: 55000,},
//     {name:'laptop', brand:'Hp', price: 25000,}
//  ];
//  const brand = products.map(product => product.brand);
//  console.log(brand);