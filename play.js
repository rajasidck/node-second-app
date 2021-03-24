let name1 = 'Max';
let age = 29;
const hasHobbies = true;

age = 30

function summrizeUser(userName, userAge, userHasHobby){
    return ( 
     'Name is '+
    userName + 
    ', age is '+
    userAge +
     ' and the user has hobbies: ' + 
    userHasHobby
    );

}

console.log(summrizeUser(name1,age, hasHobbies))

