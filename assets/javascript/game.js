const phrases = ["boots and spurs",
"chuck wagon",
"circle the wagon",
"dry gulch",
"gunslinger",
"high noon",
"horse",
"outlaw",
"sheriff",
"six shooter",
"apache",
"lone ranger",
"renegade",
"saloon",
"beer",
"whiskey",
"hitching post",
"stage coach",
"railroad",
"apaloosa",
"saddle",
"beef jerky",
"biscuits and gravy",
"shootout",
"rattlesnake",
"clear leather",
]

// look up how to parse a JSON into my JS so i can have a big list of potential phrases


$(document).ready(function () {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function phraseGenerator() {
        const idx = getRandomIntInclusive(0, (phrases.length - 1));
        const hmPhrase = phrases[idx];
        var html = '';
        for (var i = 0; i < hmPhrase.length; i++) {
            if (hmPhrase[i] == " ") {
                html += '<div class="spaceChar">' + "&#160;" + '</div>';
            } else {html += '<div class="red">' + hmPhrase[i] + '</div>';
        };
            
        }
        document.getElementById('guessingArea').innerHTML += html;
        return hmPhrase.split("");
    }


    // this function creates a div under the button for phrase to be guessed
    $("#newGame").on("click", function () {
        $("#guessingArea").empty();
        phraseGenerator();
        console.log(35);
    });






    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var myButtons;
    var letters;

    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    buttons();
    $("#reset").on("click", function () {
        $("#guessingArea").empty();
    });
});


