# homework7

# Homework Thoughts and Progress

As I know is already well-known from all of the changes to and conversation surrounding this particular assignment, I found it extremely challenging and am knowingly submitting a non-functioning product.

I had participated in a couple of sessions with our TA, David, and followed along with him as he coded out and refactored this assignment. Even with the master file being accidentally available, (and while I did utilize the .html file to save myself some time as it was not the meat of the project), using it as a reference for my own code I simply could not get my index.js file to create a pdf. I consistently ran into an error in node with it not capturing the value of "wrapperBackground" in the colors variable. 

After consistently struggling to understand where I had gone wrong/where I just wasn't coding this out correctly, I decided to start from the beginning and pour through each activity from this module, spend several additional hours after work typing out all of my thoughts and concepts I was attempting to ensure I understood. 

As we are moving onto the next activity and homework assignment, I don't feel that it is benefiting me any longer to dwell on this assignment (having already spent time playing catch-up as I was ill and missed class last week), so I am submitting this as it is. 

Below are all of the notes that I had taken for myself as I crawled through each activity again, to at least demonstrate to whomever grades this assignment I am at least attempting to catch up and digest what we are learning (which continues to ramp up very quickly in difficulty!). 

Enjoy!

## My Notes:

var fs = require("fs"); 
// fs is standard Node library package for reading and writing files.
// "utf8" encodes the raw buffer data in human-readable format

// i need to write a readme.md file instead of a pdf because pdf is too hard. //

// in javascript, \n is a "newline character" that you can add to a function's arguments that will create line breaks in string.

// var badmath = require("./badmath.js"); <<< IN THIS... 

// console.log(badmath.pie);

// console.log(badmath.predictable()); <<< IN THIS... variable badmath calls the badmath.js file, wherein there is a on object called module.exports
// module.exports!!!!!!!!! module.exports!!!!!!! (i really wanted to remember this)
// !!!module.exports allows us to store variables or methods in an object. you can then call on that object's properties to execute them!

// so in this, when badmath.js is ran by console logging variable badmath, badmath.pie will return the pie property, which is separately declared outside the object to a string that says "apple"
// since the predictble property is a function, we have to call is using .predictable()
// when i ran it with badmath.predictable, the console log tells me that the property is a function. the () actually executes it in console.log

// process.argv[2]; <<< progress.argv[] will pull whatever info is in the index you put when you type node index.js into the console log, turn it into a variable(?), and use it as an argument. 
// index 0 is "node", index 1 is "index.js", so you'll have to start with index 2 to capture whatever it is you're entering and so forth.
// so on activity 09-09 stu_maths, index 2 would call whatever operator you're using, and then arg index 3 and 4 would be whatever numbers you want to use for that equation
// parseInt() will turn whatever string you enter as the argument into an integer.

// NPM stands for: Node Package Manager //
// running 'npm init' in node will create you your own package.json, which will contain all of your little node project's info and dependencies!

// the inquirer NPM has different functions in it's own little separate .js file that we can use to simplify the way we create command questions in node
// i guess node is just a series of chained .js files relying on one another for different shit?
// so you can require("inquirer"), set it to a variable, we can just call it inquirer
// so const inquirer = require("inquirer");
// and then we follow it's format to create questions
// like this:
// inquirer
//  .prompt([ (** the .prompt calls the prompt property of the separate inquirer object (which is a module.exports object on a inquirer.js file **)

// so this has ended up just being a log of my thoughts as i go back through the node activities and solidify the learning, because i'm really struggling with the homework
// and i attribute it to just not really REALLY digesting what we did
// so here's a diary of my thoughts for module 15 as i re-created the solved version:
//******************************************* */
        // const fs = require("fs");
        // const inquirer = require("inquirer")

        // inquirer
        //     .prompt ([
        //         { type: "input",
        //             name: "name",
        //             message: "what is your name?"
        //         },
        //         { type: "input",
        //             name: "languages", 
        //             message: "what languages do you know?"
        //         },
        //         { type: "input",
        //             name: "method",
        //             message: "what is your preferred method of communication?"}
        //     ])

                    // just so i can document all of my thoughts as i'm doing this
                    // so i guess you can call the argument in the function anything? you can call it data, response, whatever?
                    // and then in the solved version, they're creating a variable inside this function called filename
                    // in filename, they're accessing what input was given for the argument now called variable data
                    // so data.name, you're accessing what answer was given to the name variable input in the .prompt above
                    // then the .tolowercase() method makes the info its taking from the name and making it all lowercase
                    // and then on .split(' '), it's splitting the string at every space into an array
                    // so like if my name was string "Kristy Farmer", it's turned that into string "kristy farmer"
                    // and then it turned it into an array split at every space, so name = ["kristy", "farmer"]
                    // and then on .join(''), it's going to smush my array back into a single string
                    // which will be "kristyfarmer"
                    // and then it will add ".json" to the string so now it will be "kristyfarmer.json"
                    // also, just to remind myself, json is JavaScript Object Notation.
                    // now it makes sense in context of using node!
                    // because all these jsons are objects that gotta pull different stuff from one another to get shit done

            // .then(function(data) {
            //     var filename = data.name.toLowerCase().split(' ').join('') + ".json";

                // okay so on this part, fs.writeFile is accessing the writeFile function on the fs module
                // so now it takes the local variable in this function that we've called filename (which is now string "kristyfarmer.json")
                // JSON.stringify built-in method converts javascript object to a JSON string
                // it is taking the argument 'data', which our 'data' variable is all the info that was keyed in from the inquirer prompt
                // ************
                // okay so obviously i dont understand the difference between argument and parameter
                // so per google, parameter is "a variable in a method definition." when a method is called, the arguments are the data you pass into the parameters.
                // parameter is variable in the declaration of a function. argument is the actual value of the variable that gets passed to function.
                // okay so apparently they're also interchangable???? lol
                // okay so here's a google example to understand the difference:
                // var test = function(a,b){
                    // console.log(a);
                    // console.log(arguments[]);
                // }
                //test(10,20)
                // so when you call the test function, it creates arguments as an indexed array like an object. like [10,20]
                // it assigns 10 to a parameter, and 20 to b parameters.
                // i googled what null here means, and it says this is the replacer parameter, and putting null here basically ensures all properties of the object are included in the json string
                // the \t will return spaces as tabs
                //         fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

                //             if (err) {
                //               return console.log(err);
                //             }
                        
                //             console.log("Success!");
                        
                //           });
                //         });

                // fs.writeFile("readme.me", function(err) {
                //     if (err) {
                //         return console.log(err);
                //     }

                //     console.log ("Success!");
                // })
/************************************************ */

// okay now this is activity 16 - 01 syntax 
    // // All of the `createGreeting` functions are equivalent
    // var createGreeting = function(message, name) {
    //     return message + ", " + name + "!";
    //   }; 
    
    //   // We can safely swap out function expressions with arrow functions most of the time
    //   var createGreeting = (message, name) => {
    //     return message + ", " + name + "!";
    //   };
    
    //   // If the arrow function body contains only one expression, we can omit the curly braces and auto return it
    //   var createGreeting = (message, name) => message + ", " + name + "!";
    
    //   // If an arrow function only has one parameter, we can omit the parens () around the single parameter
    //   var greet = greeting => console.log(greeting);
    
    //   // We call arrow functions the same way as we call regular functions
    //   var greeting = createGreeting("Hello", "Angie");
    
    //   // Logs "Hello, Angie!";
    //   greet(greeting);
  
        
        //// okay so
        // variable createGreeting is assigned to function that has (message, name) as its parameters
        // from w3schools: 
        //  The return statement stops the execution of a function and returns a value from that function.
        
        // so it returns argument given for parameter message, plus string ","
        // plus argument given for name, plus string "!"
        
        // so apparently, to shorten the function you can do this
        // change it to var createGreeting = (message, name) => {
        // so like, it just knows inherently that it's a function, it just says (parameter1, parameter2) => 
        // => being like 'lol ok execute'
        
        // and also apparently if there's only one expression we're returning, we dont even need the curly braces or to even say return
        // so it just says when i call the variable createGreeting, it's gonna take inputs for parameter1 and parameter2 and turn it into arg1 and arg2
        // and then it's just gonna say ok spit it out
        
        // and then if we only have one PARAMETER in an arrow function, we dont even need parenthesis???
        // so like, var greet = greeting => console.log(greeting);
        // it says that var greet is a function, its only parameter is greeting, input for parameter greeting becomes argument, and then argument is called in console.log(greeting)
        
        // so like, if I have a variable that's an arrow function, I can assign a variable to execute a variable that is an arrow function lol
        // so greeting = createGreeting ***which is a function that takes parameters message and name*** and then we already put string Hello and string Angie as two arguments
        // and then greet(greeting) says greet parameter is the variable greeting, and greeting is gonna give whatever arguments were already given to greeting thru its function 
        // aaaAaAAaAAAAAA
//************************************************** */
    // on 16-2, it says
    // // Arrow functions bind the `this` keyword to the object it's created inside of
    // i.e. whatever `this` is where it's created
        // setTimeout(function() {
        //     // setTimeout is a built-in function
        //     console.log(this.name + "!");
        //   }, 100);
    // so on ^^^, it has no idea wtf this.name refers to
        // saySomething: function() {
        //     console.log(this.name + " is thinking...");
        //     setTimeout(() => console.log(this.name + "!"), 100);
    // so on this, it knows that this.name refers to the argument given to name property of the object
//********************************** */
// so when you just key "npm install", its going to install of the dependencies listed in the .json file of your project.
// 

