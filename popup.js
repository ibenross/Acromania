document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getAcronymInfo' }, function (response) {
        const acronymInfo = document.getElementById('acronymInfo');
        acronymInfo.textContent = response ? response : 'No information available.';
      });
    });
  });

  
