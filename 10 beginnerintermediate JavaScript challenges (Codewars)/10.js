// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3 

function rgb(r, g, b) {
    function clamp(value) {
      return Math.max(0, Math.min(value, 255));
    }
    const red = clamp(r);
    const green = clamp(g);
    const blue = clamp(b);
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
  
    // Concatenate the hexadecimal values to form the final 6-digit hexadecimal string
    return redHex.toUpperCase() + greenHex.toUpperCase() + blueHex.toUpperCase();
  }
  
  
  console.log(rgb(255, 255, 255)); // Output: "FFFFFF"
  