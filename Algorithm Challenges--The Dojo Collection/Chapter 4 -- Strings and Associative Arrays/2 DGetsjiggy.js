// Given someone's name, return a string as such
//      remove first letter
//      capitolize new first letter
//      add ' to the ' + letter removed +"!"


// One liner
function DGetsJiggy(name) {
    return name.length < 2 ? name.slice(1,2).toUpperCase() + name.slice(2) + " to the " + name[0].toUpperCase() + "!" : "Shortest name in the world!";
}


// Split up version
function DGetsJiggy(name) {
    if (name.length < 2) return "Shortest name in the world!";
    let out = [];
    out.push(
        name.slice(1,2).toUpperCase(),
        name.slice(),
        " to the ",
        name[0].toUpperCase(),
        "!"
    )
    return out.join("");
}


console.log(dGetsJiggy("Dustin"));
console.log(dGetsJiggy("n"));
console.log(dGetsJiggy("Barnaby"));