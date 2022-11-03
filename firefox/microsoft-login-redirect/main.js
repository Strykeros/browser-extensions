
// The timer is necessary, because the entire page is not loaded immediately
let mainTimer = setInterval(() => {

    // checks the domain. If true, tries to press "Next" button
    // otherwise, tries to press "Skip" button.
    if(window.location.hostname === "login.microsoftonline.com"){
        clickNextBtn();
    }
    else{
        clickSkipBtn();        
    }

        
}, 500);

function clickNextBtn(){

    // tires to get the "Next" btn id
    let nextBtn = document.querySelector("#idSubmit_ProofUp_Redirect");

    // tries to get the "No" btn id
    let noBtn = document.querySelector("#idBtn_Back");

    // tries to get "Next" btn by text value
    let nextBtnByTxt = document.querySelector("input[value=Next]")

    // tries to get the "No" btn by text value
    let noBtnByTxt = document.querySelector("input[value=No]");

    // creates an array of btns
    let buttons = [nextBtn, noBtn, nextBtnByTxt, noBtnByTxt];

    // loops through the btn array, and checks if the btn exists.
    // if the btn exists, clicks it.
    for (let i = 0; i < buttons.length; i++) {

        if(buttons[i] !== null){
            getOffsetAndClick(buttons[i]);
            return;
        }
    }
 
}

function clickSkipBtn(){

    // tires to get the "Skip" btn class
    let skipBtn = document.getElementsByClassName("a6b2BSrznMwPrVB6dvBqGQ==")[0];

    //  if the "Skip" button exists, clicks it.
    // otherwise tries to find it with text.
    if(skipBtn !== null){

        getOffsetAndClick(skipBtn);              
    }
    else{
        let aEleList = document.querySelectorAll("a");

        for (let i = 0; i < aEleList.length; i++) {
            let skipBtnTxt = aEleList[i].innerText.toLocaleLowerCase();
            if(skipBtnTxt === "skip setup"){
                getOffsetAndClick(skipBtn);

            }
        }
    } 
    
}

// gets the "Skip" button offset and sets the click event
function getOffsetAndClick(btn){
    let btnTop = getOffset(btn).top;
    let btnLeft = getOffset(btn).left;

    simulateClick(btnLeft, btnTop);    
}


// creates clicks event and clicks on the "Skip" btn based on cordinates
function simulateClick(x, y) {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: x,
      screenY: y
    })
  
    const element = document.elementFromPoint(x, y)
    element.dispatchEvent(event)
}

// gets the "Skip" btn offset and returns it
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

