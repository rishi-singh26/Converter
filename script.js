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
