main = {};
main.wordArray = [];
main.wordUArray = [];


main.lives = 4;
main.numInWordBank = words.length;

main.word = "test";
main.wordU = "";


// Functions

main.pullWord = function () {
	main.word = words.list [(math.floor(math.random() * main.numInWordBank))];
}

main.setUnderline = function() {
	main.pullWord();
	for (i = 0; i < main.word.length; i++);
		main.wordArray[i] = man.word.charAt (i);
		main.wordUArray[i] = "_";
	}
	main.wordU = main.wordUArray.join("");
	document.getElementById("WORD").innerHTML = main.wordU;
	document.getElementById("numLetters").innerHTML = main.word.length;
}

main.setUnderline()
