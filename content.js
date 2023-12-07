document.addEventListener('mouseup', function (event) {
    const selection = window.getSelection().toString().trim();
  
    if (selection) {
      chrome.runtime.sendMessage({ action: 'checkAcronym', acronym: selection });
    }
  });