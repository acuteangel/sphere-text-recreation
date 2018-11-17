var inquirer = require("inquirer");
var location = require("./locations.js");
var interactable = require("./interactables.js")
var currentLocation = "north"
console.log("You awake in a room.")
whereFunction();
lookFunction();
gameFunction();
function gameFunction(){
    inquirer.prompt([
        {
        type: "input",
        message: "What do you do?",
        name: "verb"
        }]).then(function(response){
            var verb = /look|back|turn|inspect|use|take|help|quit/i.exec(response.verb)
            var object = null;
            if (verb){
                verb = verb[0]
                if (response.verb.split(" ").length > 1){                    
                    object = response.verb.split(" ")
                    object.shift()
                    object = object.join(" ")
                }
            }
            if (verb == "look"){                
                lookFunction();            
            } else if (verb == "back"){
                backFunction();
            } else if (verb == "turn"){
                turnFunction(object);
            } else if (verb == "inspect"){
                inspectFunction(object);
            } else if (verb == "use"){
                useFunction(object);
            } else if (verb == "take"){
                takeFunction(object);
            } else if (verb == "help"){
                console.log("LOOK ----------------- observes current location")
                console.log("BACK ----------------- returns to previous map")
                console.log("TURN [left/right] ---- turns to face a different area")
                console.log("INSPECT [something] -- examines an inventory item or something in your current location")
                console.log("USE [item] ----------- uses an item from your inventory")
                console.log("TAKE [item] ---------- adds an item to your inventory")                
            } else if (verb == "quit"){
                console.log("Bye :)")
            } else {
                console.log("I'm not sure what you mean. For a list of commands type HELP")
            }
            if (verb != "quit"){
                gameFunction();
            }
        })
}

function fix(word){ //function to convert words to be all lowercase and without spaces
    var fix = word.replace(/\s/g, '');
    fix = fix.toLowerCase();
    return fix;
}

function lookFunction(){    
        console.log(location[fix(currentLocation)]["description"]);
}

function backFunction(){
    var destination = location[fix(currentLocation)]["back"];
    moveFunction(destination);
}

function turnFunction(direction){
    var turn = /left|right/i.exec(direction)
    if (turn){
        var destination = location[fix(currentLocation)][turn[0]]
        moveFunction(destination);
    } else {
        console.log("TURN which way?")
    }
}

function moveFunction(where){
    if (!where){
        console.log("You can't go that way.");
        return;
    } else {
        currentLocation = where;
        whereFunction();        
    }
}

function whereFunction(){
    console.log("You are currently "+ location[fix(currentLocation)]["current"])
}

function inspectFunction(obj){
    var available = location[currentLocation]["locations"];
    for (var i=0;i<available.length;i++){
        var test = RegExp(available[i]).exec(obj)
        if (test){
            test = test[0];
            break;
        }
    }
    if (test){
        moveFunction(obj);
        return;
    } else {
        available = location[currentLocation]["interactables"];
        for (var i=0;i<available.length;i++){
            var test = RegExp(available[i]).exec(obj)
            break;
        }
    }
    if (test){
        console.log(interactable[test]["description"])
    }
}

function useFunction(){

}

function takeFunction(){

}
