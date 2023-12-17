function generateRandomStrings() {
    var inputStringsTextarea = document.getElementById('inputStrings');
    var randomStringsDisplay = document.getElementById('randomStrings');
    if (inputStringsTextarea && randomStringsDisplay) {
        var inputText = inputStringsTextarea.value.trim();
        var stringList = inputText.split('\n').map(function (str) { return str.trim(); }).filter(Boolean);
        if (stringList.length >= 3) {
            var getRandomStrings = function (list) {
                var numberOfStringsToSelect = 3;
                var selectedStrings = [];
                var shuffledList = list.sort(function () { return Math.random() - 0.5; }); 
                for (var i = 0; i < numberOfStringsToSelect; i++) {
                    selectedStrings.push(shuffledList[i]);
                }
                return selectedStrings;
            };
            var randomStrings = getRandomStrings(stringList);
            randomStringsDisplay.innerHTML = "Véletlenszerűen kiválasztott sztringek: ".concat(randomStrings.join(', '));
        }
        else {
            randomStringsDisplay.innerHTML = 'Adj meg legalább 3 sztringet enterrel elválasztva!';
        }
    }
}
