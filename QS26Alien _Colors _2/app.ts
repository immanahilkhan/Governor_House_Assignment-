
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 

let alien_colors :string="green"; 

// write an if-else chain.
// • If the alien’s color is green
//, print a statement that the player just earned 5 points for shooting the alien.
if (alien_colors === 'green'){
     console.log("player just earned 5 points for shooting the alien");
}else{
    console.log(' player just earned 10 points for shooting the alien');
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_colors= "yellow";
if(alien_colors === "green" ){
    console.log( "console.log(player just earned 5 points for shooting the alien)");
}else{
    console.log('player just earned 10 points for shooting the alien');
}

// • Write one version of this program that runs the if block and another that runs the else block