const listUser = [
    { name: 'kyeongrok', age: 31, score: 85},
    { name: 'jihuyn', age: 31, score: 95},
    { name: 'minsup', age: 35, score: 76},
];

listUser.forEach(function (user) {
    console.log(user);
});


console.log('------------------------------');
listUser.forEach(user => console.log(user));