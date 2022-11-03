

function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("blockElementBtn").addEventListener("click", popup);
});
