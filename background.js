const acronymDictionary = {
    "HTML": "Hypertext Markup Language",
    "CSS": "Cascading Style Sheets",
    // Add more acronyms as needed
  };
  
  let connectedPort;
  
  chrome.runtime.onConnect.addListener((port) => {
    if (port.name === 'content-script') {
      connectedPort = port;
      port.onDisconnect.addListener(() => {
        connectedPort = null;
      });
    }
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'checkAcronym' && connectedPort) {
      const acronym = request.acronym.toUpperCase();
      const definition = acronymDictionary[acronym];
      connectedPort.postMessage({ action: 'acronymCheckResponse', definition: definition });
    } else if (request.action === 'showTooltip') {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'showTooltip', acronym: request.acronym, definition: request.definition, position: request.position });
      });
    } else if (request.action === 'getAcronymInfo') {
      // Additional logic for getting information from the page if needed
      sendResponse(null);
    }
  });