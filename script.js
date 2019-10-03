// Decimal conversions

function dec_to_bin_hex() {
   var dec = document.getElementById("Decimal1").value;
   console.log(dec);
   // Deciaml to binary
   document.getElementById("Binary1").textContent = (dec >>> 0).toString(2);
   // Decimal to Hex
   document.getElementById("Hexadecimal1").textContent = (dec >>> 0)
      .toString(16)
      .toUpperCase();
}

function bin_to_dec_hex() {
   var bin = document.getElementById("Binary2").value;
   console.log(bin);
   // Binary to Decimal
   document.getElementById("Decimal2").textContent = parseInt(bin, 2);
   // Binary to Hexadecimal
   document.getElementById("Hexadecimal2").textContent = parseInt(bin, 2)
      .toString(16)
      .toUpperCase();
}

function hex_to_dec_bin() {
   var hex = document.getElementById("Hexadecimal3").value;
   console.log(hex);
   // Hex to Decmal
   document.getElementById("Decimal3").textContent = parseInt(hex, 16);
   // Hex to Binary
   document.getElementById("Binary3").textContent = parseInt(hex, 16)
      .toString(2)
      .padStart(8, "0");
}
