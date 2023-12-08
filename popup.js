// popup.js

document.addEventListener("DOMContentLoaded", function() {
  // Get the background page
  chrome.runtime.getBackgroundPage(function(backgroundPage) {
    if (backgroundPage) {
      // If backgroundPage is defined, get the highlighted text
      const highlightedText = backgroundPage.getHighlightedText();

      // Get the meaning from your dictionary (replace with your dictionary)
      const dictionary = {
        "HTML": "Hypertext Markup Language",
        "CSS": "Cascading Style Sheets",
        // Add more key-value pairs as needed
      };

      const meaning = dictionary[highlightedText];

      // Update the HTML in popup.html
      const resultElement = document.getElementById("result");
      resultElement.textContent = `Meaning of '${highlightedText}': ${meaning || 'Not found'}`;
    } else {
      // If backgroundPage is undefined, handle the error
      console.error("Background page is undefined. Make sure your background.js is correct.");
    }
  });
});
