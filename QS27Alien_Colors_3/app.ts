// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColors: string='green';

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.

//version 1 of the program

if (alienColors=== 'green'){
    console.log('version 1: player earn 5 points ');
}
else if (alienColors=== "yellow"){
    console.log('player earns 10 point.');
}
else if (alienColors==='red'){
    console.log ("player earns 15 points");
}
else {
    console.log ('please select right color');
}
//version 2 in program
alienColors ='yellow'

if (alienColors=== 'green'){
    console.log('player earn 5 points ');
}
else if (alienColors=== "yellow"){
    console.log('version 2: player earns 10 point.');
}
else if (alienColors==='red'){
    console.log ("player earns 15 points");
}
else {
    console.log ('please select right color');
}

//version 3 in program
alienColors ='red'

if (alienColors=== 'green'){
    console.log('player earn 5 points ');
}
else if (alienColors=== "yellow"){
    console.log('player earns 10 point.');
}
else if (alienColors==='red'){
    console.log ("version 3: player earns 15 points");
}
else {
    console.log ('please select right color');
}