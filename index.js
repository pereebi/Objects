/*
* Programming Quiz: Umbrella
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `umbrella`
* - The variable `umbrella` should be an object
* - Your `umbrella` object should have the `color` and `isOpen` property
* - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
* - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
*/



var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if (umbrella.isOpen === false){
            return "The umbrella is already closed!";
        } else{
            umbrella.isOpen = false;
            return "Julia closes the umbrella";
        }
    }
 };

console.log(umbrella.close(true));

 /*
* Programming Quiz: Menu Items
* Create an object named `breakfast`.
* The object should contain properties for the `name`, `price`, and `ingredients`.
* Print the entire object on the console
*/


let breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
};

console.log(breakfast);



/*
* Programming Quiz: Bank Accounts 1
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have an object `savingsAccount`
* - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
* - Your `savingsAccount` object should have a `printAccountSummary()` method
* - Your `printAccountSummary()` method should return the EXACT expected message
* - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
*/



const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function(){
        return "Welcome! \nYour balance is currently $1000 and your interest rate is 1%.";    
    }
 };

  console.log(savingsAccount.printAccountSummary());



//  Using the object from exercise 3, answer the following quiz question:
// Which of the following are valid ways to access properties and call methods from the savingsAccount object?
 
savingsAccount.balance;



/*
* Programming Quiz: Facebook Friends
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have an object `facebookProfile`
* - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
* - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
* - Carefully implement the desired functionality of each method, as decribed above
*/

let facebookProfile = {
    name: "Egbekun Vivy P ",
    friends: 1500,
    messages: ["Living a life of fulfillment requires determination and focus.", "The goal is to have a goal.", "It's Throwback Tuesday.", "Be happy ooo, it's free and a decision"], 
    postMessage: function addsMessage(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function removesMessage(index){
        facebookProfile.messages.splice(index);
    },
    addFriend: function addition(number){
        if (number === 1){
            facebookProfile.friends += number;
        }
    },
    removeFriend: function subtraction(num){
        if (num === 1){
            facebookProfile.friends -= num;
        }
    }
};

console.log(facebookProfile);



/*
* Programming Quiz: Donuts Revisited
*/

/*
* QUIZ REQUIREMENTS
* - Your code sshould have an array named `donuts`
* - Your `donuts` array should call the `forEach()` method
* - Your `forEach()` loop should output the donut summaries
* - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
*/


const donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
 ];

 donuts.forEach(function(donutsCost){
     donutsCost = `${donutsCost.type} donuts cost $${donutsCost.cost} each`; 
    console.log(donutsCost);
 });

