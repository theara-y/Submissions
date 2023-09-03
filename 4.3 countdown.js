countdown(4);

/**
 * Count down from a number to zero every second.
 * @param {Number} n Initial number to count down from
 */
function countdown(n) {
    setTimeout(
        function() {
            n--; //Decrement n by one
            if(n == 0) { //Base case
                console.log("Done!");
            } else {
                console.log(n);
                countdown(n); //Recursively call countdown with updated value of n
            }
        }, 1000 //Wait 1 second before running the callback function
    );
}