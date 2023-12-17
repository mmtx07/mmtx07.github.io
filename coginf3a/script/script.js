var Parallelogram = /** @class */ (function () {
    function Parallelogram() {
    }
    Parallelogram.prototype.calculateAreaWithHeightSide = function (height, side) {
        return height * side;
    };
    Parallelogram.prototype.calculateAreaWithAngleSides = function (angle, side1, side2) {
        var radians = angle * (Math.PI / 180);
        return side1 * side2 * Math.sin(radians);
    };
    return Parallelogram;
}());
function calculateArea() {
    var heightInput = document.getElementById('heightInput');
    var sideInput = document.getElementById('sideInput');
    var angleInput = document.getElementById('angleInput');
    var side1Input = document.getElementById('side1Input');
    var side2Input = document.getElementById('side2Input');
    var parallelogram = new Parallelogram();
    var result = '';
    if (heightInput && sideInput && heightInput.value !== '' && sideInput.value !== '') {
        var height = parseFloat(heightInput.value);
        var side = parseFloat(sideInput.value);
        var areaWithHeightSide = parallelogram.calculateAreaWithHeightSide(height, side);
        result = "A magass\u00E1g \u00E9s az ahhoz tartoz\u00F3 oldal alapj\u00E1n kisz\u00E1m\u00EDtott ter\u00FClet: ".concat(areaWithHeightSide);
    }
    else if (angleInput && side1Input && side2Input && angleInput.value !== '' && side1Input.value !== '' && side2Input.value !== '') {
        var angle = parseFloat(angleInput.value);
        var side1 = parseFloat(side1Input.value);
        var side2 = parseFloat(side2Input.value);
        var areaWithAngleSides = parallelogram.calculateAreaWithAngleSides(angle, side1, side2);
        result = "A sz\u00F6g \u00E9s a 2 oldal alapj\u00E1n kisz\u00E1m\u00EDtott ter\u00FClet: ".concat(areaWithAngleSides);
    }
    else {
        console.error('Adj meg valós adatokat!');
    }
    var resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = result;
    }
}
