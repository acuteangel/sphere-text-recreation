var Interactable = function(description){    
    this.description = description;
    this.checked = false;
    this.check = function(){
        if (!this.checked){
            this.checked = true;
        }
    }
}

var bluebook = new Interactable(
    "You open the book to the only two pages containing content. On the left page is a drawing of a frog sleeping under the ground with the sun shining above. The right page has a drawing of a happy frog dancing in the rain between two red tulips."
);
var greenbook = new Interactable(
    "You open the book to the only two pages containing content. On the left page is a diagram of a cube, showing a circle can be punched out of the top and bottom. The right page has a diagram showing a shining light, with a square above it, and an up arrow above that."
);
var redbook = new Interactable(
    "You open the book to the only two pages containing content. The left page has the lower corner torn out, with a small tip of black where the tear is. The rest of the page is blank. The right page is torn out, except for a small part at the top of the page. On the part remaining is a red box, with an arrow pointing down to the missing section."
);
var bluedrawer = new Interactable();
var greendrawer = new Interactable();
var yellowdrawer = new Interactable(
    "You open the drawer, only to find it empty."
);
var orangedrawer = new Interactable(
    "Inside the drawer is a small box, with 9 buttons on it"
);
var floorlight = new Interactable("");
var door = new Interactable("It's locked.");
var topdrawer = new Interactable("It's locked.");
var bottomdrawer = new Interactable("Inside you see an empty glass.");
var cushion = new Interactable("Behind the cushion you find a long rod with a hook at the end. You also find a white marble.");

module.exports = {
    bluebook: bluebook,
    greenbook: greenbook,
    redbook: redbook,
    bluedrawer: bluedrawer,
    greendrawer: greendrawer,
    yellowdrawer: yellowdrawer,
    orangedrawer: orangedrawer,
    floorlight: floorlight,
    door: door,
    topdrawer: topdrawer,
    bottomdrawer: bottomdrawer,
    cushion: cushion,
}