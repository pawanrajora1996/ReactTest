import { useState } from "react";
import { useRef } from "react";

function NumberToWord(){

const inputRef = useRef();
const [word , updateword] = useState();


function handleclick(){
    const input = inputRef.current.value;
    
    const map = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11:'eleven',
        12:'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        
      }

      let numberToWord = '';
  let currentValue = input;
  if(currentValue > 99 && currentValue < 1000) {
    const hundredNumber = 100;
    const hundredPlaceValue = parseInt(currentValue / hundredNumber)
    numberToWord += map[hundredPlaceValue] + ' ' + map[hundredNumber]
    currentValue -= hundredPlaceValue * hundredNumber;
  }
  const tenPlaceWord = map[currentValue];
  if(tenPlaceWord && currentValue !=0) {
    numberToWord += ' ' + tenPlaceWord
  } else {
    const tensNumber = 10;
    const tensPlaceValue = parseInt(currentValue / tensNumber) * tensNumber;
    numberToWord += ' '+ map[tensPlaceValue]
    currentValue -= tensPlaceValue;
    numberToWord += ' '+ map[currentValue]
  }

  updateword(numberToWord);

  return numberToWord 

}
    


    return(
            <div>
                <input type ="text" ref={inputRef}/> 
                <button onClick={handleclick}>Add button</button>{word}
            </div>

    );
};

export default NumberToWord;