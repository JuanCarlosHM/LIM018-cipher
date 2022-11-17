import cipher from './cipher.js';

function crypt(resultReference, errorReference, offset, message, isCrypt)
{

  if(!offset.value || ! message.value)
  {
    errorReference.style.display = "flex";
    return;
  }

  if (isNaN(offset.value))
  {
    errorReference.innerHTML = "offset is not a number";
    errorReference.style.display = "flex";
    return;
  }

  let result;

  isCrypt ? result = cipher.encode(offset.value, message.value) : result = cipher.decode(offset.value,  message.value);
  resultReference.innerHTML =
    `<p class="title"> Here is your message: </p>
     <br/>
     <p class="body"> ${result} </p>`
}



function main()
{
  const offset = document.getElementById("offset");
  const userMessage = document.getElementById("user-message");
  const resultMessage = document.getElementById("result-message");
  const errorMessage = document.getElementById("error-message");

  const cryptButton = document.getElementById("encode-btn");
  const decryptButton = document.getElementById("decode-btn");

  offset.addEventListener("focus", () => errorMessage.style.display = "none");
  userMessage.addEventListener("focus", () => errorMessage.style.display = "none");

  cryptButton.addEventListener("click", () => crypt(resultMessage, errorMessage, offset, userMessage, true));
  decryptButton.addEventListener("click", () => crypt(resultMessage, errorMessage, offset, userMessage, false));
}

main();
