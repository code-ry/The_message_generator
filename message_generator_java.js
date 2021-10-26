const component1 = ["Cats", "Dogs", "Birds"];
const component2 = ["Eat", "Play with","Dream of"];
const component3 = ["Logs", "Biscuits", "Stars"];

var messageArray = [];
var randomNumber = Math.floor(Math.random() * 3)
function message(messageArr) {
    messageArray.push(component1[Math.floor(Math.random() * 3)]);
    messageArray.push(component2[Math.floor(Math.random() * 3)]);
    messageArray.push(component3[Math.floor(Math.random() * 3)]);
    messageArray = messageArray.join(' ')
    console.log(messageArray)
}
message(messageArray);