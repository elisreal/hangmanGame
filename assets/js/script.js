main = {};
main.wordArray = [];
main.wordUArray = [];


main.lives = 6;
main.numInWordBank = words.length;

main.word = "";
main.wordU = "";

main.score = 0;

music = document.getElementById("myAudio");


// Functions
$(function () {
     $("#header").hide();
     $("#playArea").hide();
     music.play()
 });


$("#start").click(function() {
    $("#openScreen").hide();
    $("#header").show();
    $("#playArea").show();
    music.pause()
});



main.pullWord = function () {
    console.log();
    main.word = words.list [(Math.floor(Math.random()*main.numInWordBank))];
    console.log(main.word);
}

main.setUnderline = function() {
    console.log();
    main.pullWord();
    for (i = 0; i < main.word.length; i++) {
        main.wordArray[i] = main.word.charAt (i);
        main.wordUArray[i] = "_";
        console.log();
    }
    main.wordU = main.wordUArray.join("");
    console.log();
    document.getElementById("wordHere").innerHTML = main.wordU;
    document.getElementById("numLetters").innerHTML = main.word.length;
    console.log();
}


main.updateLetter = function(letter) {
    console.log();
    main.changes = 0;
    for (i = 0; i < main.word.length; i++){
        main.wordArray[i] = main.word.charAt(i);
        if (main.word.charAt(i).toUpperCase() == letter.toUpperCase()) {
            main.wordUArray[i] = letter;
            main.changes += 1;

        }
    }

    if (main.changes < 1) {
        main.lives -= 1;
        document.getElementById ("lives").innerHTML = main.lives;
    }
    main.wordU = main.wordUArray.join("");
    document.getElementById("wordHere").innerHTML = main.wordU;

    main.word1 = main.wordArray.join("");
    main.word2 = main.wordUArray.join("");

    if(main.word1.toLowerCase() == main.word2.toLowerCase()){
        music.play()
        alert("You Win! Click the button below to load a new phrase.");
        main.pullWord()
    }

    if(main.word1.toLowerCase() == main.word2.toLowerCase()){
        main.score += 1;
        document.getElementById("score").innerHTML = main.score;
    }

    if(main.lives < 1) {
        document.getElementById("wordHere").innerHTML = main.word1;
        alert("You have run out of chances!! You lose!");
        window.location.reload();
    }
}

function clearWord() {
    document.getElementById("wordHere").innerHTML = " ";
}


main.pullWord();
main.setUnderline();
main.updateLetter(" ");
console.log(main.updateLetter);

