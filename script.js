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
   console.log(
      input
         .split("")
         .map(function(char) {
            return char.charCodeAt(0).toString(2);
         })
         .join(" ")
   );
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
