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

main.pullWord = function () {
    console.log('was here');
    main.word = words.list [(Math.floor(Math.random()*main.numInWordBank))];
    console.log(main.word);
}

main.setUnderline = function() {
    main.pullWord();
    for (i = 0; i < main.word.length; i++) {
        main.wordArray[i] = main.word.charAt (i);
        main.wordUArray[i] = "_";
    }
    main.wordU = main.wordUArray.join("");
    document.getElementById("wordHere").innerHTML = main.wordU;
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
    document.getElementById("wordHere").innerHTML = main.wordU;

    main.word1 = main.wordArray.join("");
    main.word2 = main.wordUArray.join("");

    if(main.word1.toLowerCase() == main.word2.toLowerCase()){
        music.play()
        alert("You Win! Loading a new word.");
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


main.pullWord();
main.setUnderline();
main.updateLetter(" ");
console.log(main.updateLetter);

