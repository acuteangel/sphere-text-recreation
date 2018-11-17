var interactable = require("./interactable.js");
var game = require("./game.js")

var Collectable = function(name, description){
    this.name = name;
    this.description = description;
    this.conditionsmet = false;
    this.conditionscheck = function(conditions){
        for (var i=0;i<conditions.length;i++){
            if (!interactable[game.fix(conditions[i])][checked]){
                return false;
            }
            this.conditionsmet = true;
        }
    }
}

var whitemarble;
var hook;
var pencil;
var box;
var greenmarble;
var orangepaper;
var clump;
var crumpledball;
var glass;