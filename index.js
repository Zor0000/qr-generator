/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image"
inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter the URL you would like to turn into a QR code:',
    }
  ])
  .then((answers) => {
    const url = answers.url;
  
    // Generate QR code image
    const qr_svg = qr.image(url, { type: 'png' });
    const qrCodePath = 'qr_code.png';
  });