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

var phrase = null;

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
            } else {
                html += '<div class="phraseLetter">' + hmPhrase[i] + '</div>';
            };

        }
        document.getElementById('guessingArea').innerHTML += html;
        return hmPhrase.split("");
    }


    // this function creates a div under the button for phrase to be guessed
    $("#newGame").on("click", function () {
        $("#guessingArea").empty();
        $("#letterJail").empty();
        phrase = phraseGenerator();
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
            list.className = 'letter';
            list.innerHTML = alphabet[i];
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    buttons();
// how many lives you have
    var lifeCount = 9;
    $("#lifeCount").text(lifeCount)


    $(".letter").on("click", function (event) {
        var letter = event.currentTarget.innerHTML;
        if (phrase.includes(letter)) {
            $(".phraseLetter").each(function (idx, div) {
                if (div.innerHTML === letter) {
                    $(div).css('color', 'red');
                }
            });

        } else {

            var wrongLetter = ("<div class='wrongLetter'>"+ letter + "</div>");
            $("#letterJail").append(wrongLetter);
            lifeCount--;
            $("#lifeCount").text(lifeCount);    
            if (lifeCount === 0) {
                alert("You have lost");
                $("#guessingArea").empty();
                $("#letterJail").empty();
                lifeCount = 9;
                $("#lifeCount").text(lifeCount)
            }        
        }
    });
});


