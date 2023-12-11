// popup.js

document.addEventListener("DOMContentLoaded", function() {
  // Get the background page
  chrome.runtime.getBackgroundPage(function(backgroundPage) {
    if (backgroundPage) {
      // If backgroundPage is defined, get the highlighted text
      const highlightedText = backgroundPage.getHighlightedText();

      // Get the meaning from your dictionary (replace with your dictionary)
      const dictionary = {
        "HTML":
          {
            "type": "acronym",
            "group": "enterprise",
            "definition": "Hypertext Markup Language"
          },
        "CSS":
          {
            "type": "acronym",
            "group": "enterprise",
            "definition": "Cascading Style Sheets"
          },
        "RISE":
          {
            "type": "acronym",
            "group": "GCIB",
            "definition": "Risk Integration & Support Environment"
          },
        "ADSF":
          {
            "type": "acronym",
            "group": "GCIB",
            "definition": "Application Development Security Framework"
          },
        "NPT":
          {
            "type": "acronym",
            "group": "GCIB",
            "definition": "Non Permitted Technology"
          },
        "4122":
          {
            "type": "AIT",
            "name": "STORM",
            "lead": "Jon Smith"
          },
        "73830":
          {
            "type": "AIT",
            "name": "EQDC",
            "lead": "Jon Smith"
          }
        // Add more key-value pairs as needed
      };

      const acronym = dictionary[highlightedText];
      const meaningType = acronym["type"]

      // Update the HTML in popup.html
      const acronymElement = document.getElementById("acronymType");
      acronymElement.textContent = `Type: '${meaningType}'`
      if (meaningType == "acronym") {
        const resultElement = document.getElementById("result");
        const meaning = acronym["definition"]
        resultElement.textContent = `Meaning of '${highlightedText}': ${meaning || 'Not found'}`;
      }

      else {
        const teamLead = acronym["lead"]
        const resultElement = document.getElementById("result");
        resultElement.textContent = `Lead of '${highlightedText}': ${teamLead || 'Not found'}`;
      }

    } else {
      // If backgroundPage is undefined, handle the error
      console.error("Background page is undefined. Make sure your background.js is correct.");
    }
  });
});
