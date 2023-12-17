function generateRandomStringsts() {
    const inputStringsTextarea = document.getElementById('inputStrings') as HTMLTextAreaElement;
    const randomStringsDisplay = document.getElementById('randomStrings');
  
    if (inputStringsTextarea && randomStringsDisplay) {
      const inputText = inputStringsTextarea.value.trim();
      const stringList = inputText.split('\n').map(str => str.trim()).filter(Boolean);
  
      if (stringList.length >= 3) {
        const getRandomStrings = (list: string[]): string[] => {
          const numberOfStringsToSelect = 3;
          const selectedStrings: string[] = [];
        
          const shuffledList = list.sort(() => Math.random() - 0.5); 
        
          for (let i = 0; i < numberOfStringsToSelect; i++) {
            selectedStrings.push(shuffledList[i]);
          }
        
          return selectedStrings;
        };
  
        const randomStrings = getRandomStrings(stringList);
        randomStringsDisplay.innerHTML = `Véletlenszerűen kiválasztott sztringek: ${randomStrings.join(', ')}`;
      } else {
        randomStringsDisplay.innerHTML = 'Adj meg legalább 3 sztringet enterrel elválasztva!';
      }
    }
  }
  