const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the users year of birth\n', (year)=>{
    age = 2019- year; 
    if (isNaN(age)){
        console.log('thats not a number')
    }else if(age < 18  ){
        console.log('the user is a minor')
    }else if(age>= 18 && age <= 36){
        console.log('the user is a youth')
    }else {
        console.log('the rest are elders')
    } 
    rl.close()
});