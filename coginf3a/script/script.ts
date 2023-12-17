class Parallelogram {
  calculateAreaWithHeightSide(height: number, side: number): number {
    return height * side;
  }

  calculateAreaWithAngleSides(angle: number, side1: number, side2: number): number {
    const radians = angle * (Math.PI / 180);
    return side1 * side2 * Math.sin(radians);
  }
}


function calculateArea() {
  const heightInput = document.getElementById('heightInput') as HTMLInputElement;
  const sideInput = document.getElementById('sideInput') as HTMLInputElement;
  const angleInput = document.getElementById('angleInput') as HTMLInputElement;
  const side1Input = document.getElementById('side1Input') as HTMLInputElement;
  const side2Input = document.getElementById('side2Input') as HTMLInputElement;

  const parallelogram = new Parallelogram();

  let result = '';

  if (heightInput && sideInput && heightInput.value !== '' && sideInput.value !== '') {
    const height = parseFloat(heightInput.value);
    const side = parseFloat(sideInput.value);
    const areaWithHeightSide = parallelogram.calculateAreaWithHeightSide(height, side);
    result = `A magasság és az ahhoz tartozó oldal alapján kiszámított terület: ${areaWithHeightSide}`;
  } else if (angleInput && side1Input && side2Input && angleInput.value !== '' && side1Input.value !== '' && side2Input.value !== '') {
    const angle = parseFloat(angleInput.value);
    const side1 = parseFloat(side1Input.value);
    const side2 = parseFloat(side2Input.value);
    const areaWithAngleSides = parallelogram.calculateAreaWithAngleSides(angle, side1, side2);
    result = `A szög és a 2 oldal alapján kiszámított terület: ${areaWithAngleSides}`;
  } else {
    console.error('Adj meg valós adatokat!');
  }

  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.innerHTML = result;
  }
}


