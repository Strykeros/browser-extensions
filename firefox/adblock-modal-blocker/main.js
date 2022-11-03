let mainTimer;

function checkDomain(){
    let host = window.location.hostname;
    if(host.includes("inbox.lv") || host.includes("email.inbox.lv")){
        checkForModal();
        checkModalText();
    }
    else if(host.includes("twitter.com")){
        removeLoginModal();
    }
}

function checkForModal(){
    let modal = document.querySelector(".promo-modal");
    let modalBtn = document.querySelector(".modal-btn_default");


    if(modal !== null){

        if(!modal.classList.contains("hide") && modalBtn !== null){
            modalBtn.click(); 
            clearInterval(mainTimer);
            return;       
        }


        if(!modal.classList.contains("hide")){
            modal.classList.add("hide");

            let backdrop = document.querySelector(".modal-backdrop");
            backdrop.remove();  
                
            let bod = document.querySelector("body");
            bod.classList.remove("modal-open");     
            clearInterval(mainTimer); 
        }        
    }
}

function checkModalText(){
    let modal = document.querySelectorAll(".modal");
    let modalBody = document.querySelectorAll(".modal-content > .modal-body");
    let modalFooter = document.querySelectorAll(".modal-content > .modal-footer");   
    let adblockTxts = ["Pamanīts Adblock!", "Adblock Detected!", "Обнаружен Adblock!"];
    let adblockTxt = "adblock";
    for (let i = 0; i < modalBody.length; i++) {

        if(modal[i] !== null || !modal[i].classList.contains("hide")){
            let modalHeadingTxt = modalBody[i].children[0].innerText;
            
            for (let j = 0; j < adblockTxts.length; j++) {
                if(modalHeadingTxt === adblockTxts[j] || modalHeadingTxt.toLowerCase().includes(adblockTxt)){
                    let dismissBtn = modalFooter[i].children[1];
                    dismissBtn.click();
                    clearInterval(mainTimer);
                    return;
                }
                
            }            
        }

    }    
}

function removeLoginModal(){
    let twLoginModal = document.querySelector(".css-1dbjc4n .r-g6jmlv");
    if(twLoginModal !== null){
        twLoginModal.remove();
        let html = document.querySelector("html");
        html.style.overflow = "auto";        
    }

}

checkDomain();

mainTimer = setInterval( function() {
    checkDomain();
}, 100);
 