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
