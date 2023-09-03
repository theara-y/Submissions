randomGame();

/**
 * Prints the number of tries to generate a random number greater than 0.75
 */
function randomGame() {
    let attempt = 0;
    const id = setInterval(
        function() {
            attempt++;
            if(Math.random() < 0.75) { //When random number is greater than 0.75
                clearInterval(id); //Stop the timer
                console.log(`Took ${attempt} tries to generate a random number greater than 0.75.`);
            }
        }, 1000 //Wait 1 second between each random number generated
    );
}