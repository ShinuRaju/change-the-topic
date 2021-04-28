let selector = (cssSelector) => { 
 return document.querySelector(cssSelector)
}

let heading = selector('.container h1');




let textInput = selector('div>input');
let submitButton = selector('[type="submit"]');





submitButton.addEventListener('click', () =>{

   heading.textContent = textInput.value;

});

