main = {};
main.wordArray = [];
main.wordUArray = [];


main.lives = 6;
main.numInWordBank = words.length;

main.word = "";
main.wordU = "";

music = document.getElementById("myAudio");


// Functions

main.pullWord = function () {
    main.word = words.list [(Math.floor(Math.random()*main.numInWordBank))];
}

main.setUnderline = function() {
    main.pullWord();
    for (i = 0; i < main.word.length; i++) {
        main.wordArray[i] = main.word.charAt (i);
        main.wordUArray[i] = "_";
    }
    main.wordU = main.wordUArray.join("");
    document.getElementById("WORD").innerHTML = main.wordU;
    document.getElementById("numLetters").innerHTML = main.word.length;
}

main.updateLetter = function(letter) {
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
    document.getElementById("WORD").innerHTML = main.wordU;

    main.word1 = main.wordArray.join("");
    main.word2 = main.wordUArray.join("");

    if(main.word1.toLowerCase() == main.word2.toLowerCase()){
        alert("You Win! Loading a new word.");
        window.location.reload();
        music.play()
    }

    if(main.lives < 1) {
        document.getElementById("WORD").innerHTML = main.word1;
        alert("You have run out of chances!! You lose!");
        window.location.reload();
    }
}

main.pullWord();
main.setUnderline();
main.updateLetter(" ");

