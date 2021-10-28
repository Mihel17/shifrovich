// LETTERS
let symbols = ['б', 'д', 'ж', 'з', 'і', '?', 'е', 'о', '.', '$', 'п', 'ф', 'ч', 'ґ', ':', 'х', 'щ', 'т', '!', 'ю', 'м', 'л', 'ш', 'я', 'с', 'ц', 'ь', ',', '-', 'р', 'й', 'ї', 'а', 'є', 'у', ';', '@', 'к', 'с', 'н', '+', 'в', " ", ')', 'г', 'и', '—', '3', '4', '0', '9', '2', '6', '5', '1', '8', '7', 'ы'];

// ENCRYPT----------------------------
let inputEncrypt = document.querySelector('.app__input-encrypt');
let resultEncrypt = document.querySelector('.app__result-encrypt');
//------------------------------------

inputEncrypt.addEventListener("input", function (evt) {
  evt.preventDefault();
  //-----------------------------------
  let myMessage = inputEncrypt.value;
  //-----------------------------------
  let myArray = [];
  let codedMessage = [];
  myArray = myMessage.toLowerCase().split('');

  for (let i = 0; i <= myArray.length - 1; i++) {
    if (myArray[i] == 'а') {
      codedMessage[i] = 32;
    } else if (myArray[i] == 'б') {
      codedMessage[i] = 0;
    } else if (myArray[i] == 'в') {
      codedMessage[i] = 41;
    } else if (myArray[i] == 'г') {
      codedMessage[i] = 44;
    } else if (myArray[i] == 'ґ') {
      codedMessage[i] = 13;
    } else if (myArray[i] == 'д') {
      codedMessage[i] = 1;
    } else if (myArray[i] == 'е') {
      codedMessage[i] = 6;
    } else if (myArray[i] == 'є') {
      codedMessage[i] = 33;
    } else if (myArray[i] == 'ж') {
      codedMessage[i] = 2;
    } else if (myArray[i] == 'з') {
      codedMessage[i] = 3;
    } else if (myArray[i] == 'и') {
      codedMessage[i] = 45;
    } else if (myArray[i] == 'і') {
      codedMessage[i] = 4;
    } else if (myArray[i] == 'ї') {
      codedMessage[i] = 31;
    } else if (myArray[i] == 'й') {
      codedMessage[i] = 30;
    } else if (myArray[i] == 'к') {
      codedMessage[i] = 37;
    } else if (myArray[i] == 'л') {
      codedMessage[i] = 21;
    } else if (myArray[i] == 'м') {
      codedMessage[i] = 20;
    } else if (myArray[i] == 'н') {
      codedMessage[i] = 39;
    } else if (myArray[i] == 'о') {
      codedMessage[i] = 7;
    } else if (myArray[i] == 'п') {
      codedMessage[i] = 10;
    } else if (myArray[i] == 'р') {
      codedMessage[i] = 29;
    } else if (myArray[i] == 'с') {
      codedMessage[i] = 38;
    } else if (myArray[i] == 'т') {
      codedMessage[i] = 17;
    } else if (myArray[i] == 'у') {
      codedMessage[i] = 34;
    } else if (myArray[i] == 'ф') {
      codedMessage[i] = 11;
    } else if (myArray[i] == 'х') {
      codedMessage[i] = 15;
    } else if (myArray[i] == 'ц') {
      codedMessage[i] = 25;
    } else if (myArray[i] == 'ч') {
      codedMessage[i] = 12;
    } else if (myArray[i] == 'ш') {
      codedMessage[i] = 22;
    } else if (myArray[i] == 'щ') {
      codedMessage[i] = 16;
    } else if (myArray[i] == 'ь') {
      codedMessage[i] = 26;
    } else if (myArray[i] == 'ю') {
      codedMessage[i] = 19;
    } else if (myArray[i] == 'я') {
      codedMessage[i] = 23;
    } else if (myArray[i] == " ") {
      codedMessage[i] = 42;
    } else if (myArray[i] == ',') {
      codedMessage[i] = 27;
    } else if (myArray[i] == '.') {
      codedMessage[i] = 8;
    } else if (myArray[i] == '-') {
      codedMessage[i] = 28;
    } else if (myArray[i] == '+') {
      codedMessage[i] = 40;
    } else if (myArray[i] == ')') {
      codedMessage[i] = 43;
    } else if (myArray[i] == '(') {
      codedMessage[i] = 24;
    } else if (myArray[i] == ':') {
      codedMessage[i] = 14;
    } else if (myArray[i] == ';') {
      codedMessage[i] = 35;
    } else if (myArray[i] == '@') {
      codedMessage[i] = 36;
    } else if (myArray[i] == '?') {
      codedMessage[i] = 5;
    } else if (myArray[i] == '!') {
      codedMessage[i] = 18;
    } else if (myArray[i] == '$') {
      codedMessage[i] = 9;
    } else if (myArray[i] == '—') {
      codedMessage[i] = 46;
    } else if (myArray[i] == '3') {
      codedMessage[i] = 47;
    } else if (myArray[i] == '4') {
      codedMessage[i] = 48;
    } else if (myArray[i] == '0') {
      codedMessage[i] = 49;
    } else if (myArray[i] == '9') {
      codedMessage[i] = 50;
    } else if (myArray[i] == '2') {
      codedMessage[i] = 51;
    } else if (myArray[i] == '6') {
      codedMessage[i] = 52;
    } else if (myArray[i] == '5') {
      codedMessage[i] = 53;
    } else if (myArray[i] == '1') {
      codedMessage[i] = 54;
    } else if (myArray[i] == '8') {
      codedMessage[i] = 55;
    } else if (myArray[i] == '7') {
      codedMessage[i] = 56;
    } else if (myArray[i] == 'ы') {
      codedMessage[i] = 57;
    }

    resultEncrypt.textContent = codedMessage;
    console.log(codedMessage);
  };

});

//-----------------------------------
//END--------------------------------
//-----------------------------------

// DECIPHER---------------------
let inputDecipher = document.querySelector('.app__input-decipher');
let resultDecipher = document.querySelector('.app__result-decipher');
//-----------------------------------

inputDecipher.addEventListener("input", function (evt) {
  evt.preventDefault();
  //-----------------------------------
  let encodedSymbols = inputDecipher.value.split(',');
  //-----------------------------------
  let decodedMessage = '';
  let messageArray = [];
  let message = '';
  let letter = 0;
  //-----------------------------------
  for (let i = 0; i <= encodedSymbols.length - 1; i++) {
    letter = symbols[encodedSymbols[i]];
    message += letter;
    messageArray[i] = message;
  };

  decodedMessage = messageArray[messageArray.length - 1];
  resultDecipher.textContent = decodedMessage;
});

//-----------------------------------
//END--------------------------------
//-----------------------------------