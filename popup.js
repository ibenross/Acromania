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
            "LOB": "enterprise",
            "definition": "Hypertext Markup Language"
          },
        "CSS":
          {
            "type": "acronym",
            "LOB": "enterprise",
            "definition": "Cascading Style Sheets"
          },
        "RISE":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Risk Integration & Support Environment"
          },
        "ADSF":
          {
            "type": "acronym",
            "LOB": "GCIB",
            "definition": "Application Development Security Framework"
          },
        "NPT":
          {
            "type": "acronym",
            "LOB": "GCIB",
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

      const entry = dictionary[highlightedText];

      if (entry) {
        // Check the type and fill out the HTML accordingly
        const resultElement = document.getElementById("result");

        if (entry.type === "acronym") {
          resultElement.innerHTML = `
            <h2><strong>${highlightedText}</strong></h2>
            <p><b>Type:</b> ${entry.type}</p>
            <p><b>LOB:</b> ${entry.LOB}</p>
            <p><b>Definition:</b> ${entry.definition}</p>
          `;
        } else if (entry.type === "AIT") {
          resultElement.innerHTML = `
            <h2><strong>${highlightedText}</strong></h2>
            <p><b>Type:</b> ${entry.type}</p>
            <p<b>>Name:</b> ${entry.name}</p>
            <p><b>Lead:</b> ${entry.lead}</p>
          `;
        } else {
          // Handle other types as needed
          resultElement.textContent = "Unknown type";
        }
      } else {
        // Entry not found in the dictionary
        const resultElement = document.getElementById("result");
        resultElement.textContent = `No information found for '${highlightedText}'`;
      }
    } else {
      // If backgroundPage is undefined, handle the error
      console.error("Background page is undefined. Make sure your background.js is correct.");
    }
  });
});
