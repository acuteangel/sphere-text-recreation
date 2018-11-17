var Location = function(current, description, locationsarray, interactablesarray, back, left, right){
    this.current = current;
    this.description = description;
    this.locations = locationsarray;
    this.interactables = interactablesarray;
    this.back = back;
    if (left){
        this.left = left;
    }
    if (right){
        this.right = right;
    }
}
var north = new Location(
    "at the center of the main room, looking towards a blue wall. ",
    "Hanging from the center of the ceiling is a potted plant. In the left corner is a white desk with a chair in front of it.",
    ["desk","ceiling plant", "blue wall"],
    [],
    null,
    "west",
    "east"
);
var desk = new Location(
    "in front of the desk.",
    "A white desk with a white chair in front of it. On top of the desk is a mug, a lamp, and a stack of books - a red one, a blue one, and a green one. The desk has 4 drawers stacked on top of each other, with the top 2 having locks. From top to bottom: orange, yellow, green, blue",
    ["under desk", "side desk"],
    ["blue book", "green book", "red book", "blue drawer", "green drawer", "yellow drawer", "orange drawer"],
    "north"
);
var underdesk = new Location(
    "looking under the desk.",
    "There is a light on the floor which points up at the desk.",
    [],
    ["floor light"],
    "desk"
);
var sidedesk = new Location(
    "looking at the side of the desk.",
    "You see a balled up piece of paper stuck in the side of the desk.",
    [],
    [],
    "desk"
);
var ceilingplant = new Location(
    "looking up at the ceiling plant.",
    "The plant is high up, too high for you to reach. You notice something on the wall out of the corner of your eye.",
    [],
    [],
    "north"
);
var bluewall = new Location(
    "looking at the blue wall.",
    "There is an outline of a panel on the wall.",
    [],
    [],
    "north"
);
var west = new Location(
    "at the center of the main room, looking towards a brown wall. ",
    "The only thing on this wall is a wooden door.",
    [],
    ["door"],
    null,
    "south",
    "north"
);
var south = new Location(
    "at the center of the main room, looking towards a green wall. ",
    "On the wall is a small framed painting. In the right corner is a short end table.",
    ["painting","end table"],
    [],
    null,
    "east",
    "west"
);
var endtable = new Location(
    "standing in front of the end table.",
    "The end table has two drawers, with the top one being locked. You notice a white marble on the floor to the right of it.",
    [],
    ["top drawer", "bottom drawer"],
    "south"
);
var painting = new Location(
    "standing front of the painting.",
    "The painting is of red, white, and yellow tulips. There is a defined line on the wall around the painting, as if it's a removeable panel.",
    [],
    [],
    "south"
);
var east = new Location(
    "at the center of the main room, looking towards a red wall.",
    "Against the wall in the center of the room is a modern looking couch. To the right of the couch is a tall lamp. In the left corner is a table and a potted palm.",
    ["lamp","couch","corner"],
    [],
    null,
    "north",
    "south"    
);
var lamp = new Location(
    "standing near the corner, between the couch and the green wall.",
    "The lamp is nothing of interest but you notice on the ground next to it is a small white box. You also notice a green marble on the baseboard of the green wall.",
    [],
    [],
    "east"
);
var couch = new Location(
    "standing in front of the couch.",
    "The seat cushions don't come off, but there are two back cushions.",
    ["under couch"],
    ["cushion"],
    "east"    
);
var undercouch = new Location(
    "on the ground, looking under the couch.",
    "Under the couch you notice a short red pencil",
    [],
    [],
    "couch"
);
var corner = new Location(
    "standing near the corner, between the couch and the blue wall.",
    "Directly next to the couch is a small side table with nothing on top. Beside that is a potted palm. You notice there's an oddly shaped clump of dirt on top of the soil. You also notice a green marble on one of the palm leaves.",
    ["undertable","behindplant"],
    [],
    "east"
);
var undertable = new Location(
    "on the ground, looking up at the bottom of the table.",
    "Underneath the table, there's an orange piece of paper stuck to the top. You also notice a white marble on the ground towards the back.",
    [],
    [],
    "corner"
);
var behindplant = new Location(
    "near the blue wall, looking behind the plant.",
    "On the side of the pot is an odd green smudge. There's also an air vent on the red wall, behind the plant.",
    ["vent"],
    [],
    "corner"
);
var vent = new Location(
    "on the ground looking at the vent, which is on the red wall.",
    "The vent is attached to the wall with two screws. Beside the vent is a white marble.",
    [],
    [],
    "behindplant"
);

module.exports = {
    north: north,
    desk: desk,
    underdesk: underdesk,
    sidedesk: sidedesk,
    ceilingplant: ceilingplant,
    bluewall: bluewall,
    west: west,
    south: south,
    endtable: endtable,
    painting: painting,
    east: east,
    lamp: lamp,
    couch: couch,
    undercouch: undercouch,
    corner: corner,
    undertable: undertable,
    behindplant: behindplant,
    vent: vent
}