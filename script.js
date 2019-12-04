// Decimal conversions

function dec_to_bin_hex() {
  var dec = document.getElementById("Decimal").value;
  console.log(dec);
  // Deciaml to binary
  document.getElementById("Binary").value = (dec >>> 0).toString(2);
  // Decimal to Hex
  document.getElementById("Hexadecimal").value = (dec >>> 0)
    .toString(16)
    .toUpperCase();
}

function bin_to_dec_hex() {
  var bin = document.getElementById("Binary").value;
  console.log(bin);
  // Binary to Decimal
  document.getElementById("Decimal").value = parseInt(bin, 2);
  // Binary to Hexadecimal
  document.getElementById("Hexadecimal").value = parseInt(bin, 2)
    .toString(16)
    .toUpperCase();
}

// if(inputText.value.match(mailformat))

function hex_to_dec_bin() {
  document.getElementById("hexerror").innerHTML = "";
  var hex = document.getElementById("Hexadecimal").value;
  if (hex.match(/[0-9A-Fa-f]/)) {
    console.log(hex);
    // Hex to Decmal
    document.getElementById("Decimal").value = parseInt(hex, 16);
    // Hex to Binary
    document.getElementById("Binary").value = parseInt(hex, 16)
      .toString(2)
      .padStart(8, "0");
  } else {
    document.getElementById("hexerror").innerHTML =
      "<small>Please Enter a hexadecimal value</small>";
  }
}

// text part here

function text_to_bin() {
  var input = document.getElementById("Text").value;
  var output = document.getElementById("res1");
  output.textContent = input
    .split("")
    .map(function(char) {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
}
function bin_to_text() {
  var binString = "";
  var output3 = document.getElementById("res2");
  var input = document.getElementById("Binary1").value;
  input.split(" ").map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  output3.textContent = binString;
}

//  text to phonetic text converter here

function textToPhonetic() {
  var newline = "<br />";
  var results = "";

  var text = document.getElementById("alphabet").value.toUpperCase();

  var res = document.getElementById("textToPhoneticRes");

  for (var i = 0; i < text.length; i++) {
    switch (text.charAt(i)) {
      case "A":
        results = results + "alfa ";
        break;
      case "B":
        results = results + "bravo ";
        break;
      case "C":
        results = results + "charlie ";
        break;
      case "D":
        results = results + "delta ";
        break;
      case "E":
        results = results + "echo ";
        break;
      case "F":
        results = results + "foxtrot ";
        break;
      case "G":
        results = results + "golf ";
        break;
      case "H":
        results = results + "hotel ";
        break;
      case "I":
        results = results + "india ";
        break;
      case "J":
        results = results + "juliett ";
        break;
      case "K":
        results = results + "kilo ";
        break;
      case "L":
        results = results + "lima ";
        break;
      case "M":
        results = results + "mike ";
        break;
      case "N":
        results = results + "november ";
        break;
      case "O":
        results = results + "oscar ";
        break;
      case "P":
        results = results + "papa ";
        break;
      case "Q":
        results = results + "quebec ";
        break;
      case "R":
        results = results + "romeo ";
        break;
      case "S":
        results = results + "sierra ";
        break;
      case "T":
        results = results + "tango ";
        break;
      case "U":
        results = results + "uniform ";
        break;
      case "V":
        results = results + "victor ";
        break;
      case "W":
        results = results + "whiskey ";
        break;
      case "X":
        results = results + "xray ";
        break;
      case "Y":
        results = results + "yankee ";
        break;
      case "Z":
        results = results + "zulu ";
        break;
      case " ":
        results = results + newline + newline;
        break;
      default:
        results = results + text.charAt(i) + " ";
    }
  }

  res.innerHTML = results;
}

// phonetic text to text converter

function phoneticToText() {
  var input = document.getElementById("phoneticToText").value;

  var inputArray = input.split(" ");

  var res = document.getElementById("phoneticToTextRes");

  var resString = "";

  var firstLetter = "";

  for (var i = 0; i < inputArray.length; i++) {
    firstLetter = inputArray[i][0];
    resString = resString + firstLetter + " ";
  }

  res.innerHTML = resString;
}

// english to morse code converter function here

function englishToMorse() {
  var newline = "<br />";
  var results = "";

  var text = document.getElementById("english").value.toUpperCase();

  var res = document.getElementById("enflishToMorse");

  for (var i = 0; i < text.length; i++) {
    switch (text.charAt(i)) {
      case "A":
        results = results + "._ ";
        break;
      case "B":
        results = results + "_... ";
        break;
      case "C":
        results = results + "_._. ";
        break;
      case "D":
        results = results + "_.. ";
        break;
      case "E":
        results = results + ". ";
        break;
      case "F":
        results = results + ".._. ";
        break;
      case "G":
        results = results + "__. ";
        break;
      case "H":
        results = results + ".... ";
        break;
      case "I":
        results = results + ".. ";
        break;
      case "J":
        results = results + ".___ ";
        break;
      case "K":
        results = results + "_._ ";
        break;
      case "L":
        results = results + "._.. ";
        break;
      case "M":
        results = results + "__ ";
        break;
      case "N":
        results = results + "_. ";
        break;
      case "O":
        results = results + "___ ";
        break;
      case "P":
        results = results + ".__. ";
        break;
      case "Q":
        results = results + "__._ ";
        break;
      case "R":
        results = results + "._. ";
        break;
      case "S":
        results = results + "... ";
        break;
      case "T":
        results = results + "_ ";
        break;
      case "U":
        results = results + ".._ ";
        break;
      case "V":
        results = results + "..._ ";
        break;
      case "W":
        results = results + ".__ ";
        break;
      case "X":
        results = results + "_.._ ";
        break;
      case "Y":
        results = results + "_.__ ";
        break;
      case "Z":
        results = results + "__.. ";
        break;
      case " ":
        results = results + newline + newline;
        break;
      default:
        results = results + text.charAt(i) + " ";
    }
  }

  res.innerHTML = "<h3>" + results + "</h3>";
}

//  morse code to english converter here

function morseToEnglish() {
  var newline = "<br />";
  var results = "";

  var text = document.getElementById("morse").value.toUpperCase();

  var inputArray = text.split(" ");

  var res = document.getElementById("morseToEnglish");

  for (var i = 0; i < inputArray.length; i++) {
    switch (inputArray[i]) {
      case "._":
        results = results + "A ";
        break;
      case "_...":
        results = results + "B ";
        break;
      case "_._.":
        results = results + "C ";
        break;
      case "_..":
        results = results + "D ";
        break;
      case ".":
        results = results + "E ";
        break;
      case ".._.":
        results = results + "F ";
        break;
      case "__.":
        results = results + "G ";
        break;
      case "....":
        results = results + "H ";
        break;
      case "..":
        results = results + "I ";
        break;
      case ".___":
        results = results + "J ";
        break;
      case "_._":
        results = results + "K ";
        break;
      case "._..":
        results = results + "L ";
        break;
      case "__":
        results = results + "M ";
        break;
      case "_.":
        results = results + "N ";
        break;
      case "___":
        results = results + "O ";
        break;
      case ".__.":
        results = results + "P ";
        break;
      case "__._":
        results = results + "Q ";
        break;
      case "._.":
        results = results + "R ";
        break;
      case "...":
        results = results + "S ";
        break;
      case "_":
        results = results + "T ";
        break;
      case ".._":
        results = results + "U ";
        break;
      case "..._":
        results = results + "V ";
        break;
      case ".__":
        results = results + "W ";
        break;
      case "_.._":
        results = results + "X ";
        break;
      case "_.__":
        results = results + "Y ";
        break;
      case "__..":
        results = results + "Z ";
        break;
      case " ":
        results = results + ".";
        break;
      default:
        results = results + text.charAt(i) + " ";
    }
  }

  res.innerHTML = results;
}

// clicking enter button works as cicking the convert button here

// for decimal textbar

document.getElementById("Decimal").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn1").click();
  }
});

// for binary textbar

document.getElementById("Binary").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn2").click();
  }
});

// for hexadecimal textbar

document
  .getElementById("Hexadecimal")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn3").click();
    }
  });

// for text to binary textbar

document.getElementById("Text").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn4").click();
  }
});

// for binary to text textbar

document.getElementById("Binary1").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn5").click();
  }
});

// for text to phonetic

document.getElementById("alphabet").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn6").click();
  }
});

// for phonetic to text

document
  .getElementById("phoneticToText")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn7").click();
    }
  });

// for english to morse

document.getElementById("english").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn8").click();
  }
});

// for morse to english

document.getElementById("morse").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn9").click();
  }
});
