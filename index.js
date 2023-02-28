// Code your solutions in this file
const names = ["Charlie", "Phil", "Jake"]


function writeCards(names, eventName){
    let messageArray = [""]
    for (let i = 0; i < names.length; i++ ){
     messageArray[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    } return messageArray
} 

function countDown(num){
    for (num = 10; num >= 0; num--){
        console.log(num)
    } 
}
