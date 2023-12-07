const acronymDictionary = {
    // Add your acronyms and their definitions here
    "HTML": "Hypertext Markup Language",
    "CSS": "Cascading Style Sheets",
    // Add more acronyms as needed
  };
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'checkAcronym') {
      const acronym = request.acronym.toUpperCase();
      const definition = acronymDictionary[acronym];
      sendResponse(definition);
    } else if (request.action === 'getAcronymInfo') {
      // Additional logic for getting information from the page if needed
      sendResponse(null);
    }
  });