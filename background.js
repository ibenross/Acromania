let highlightedText = "";

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "highlightedText") {
    highlightedText = request.text;
  }
});

// Function to get the highlighted text
function getHighlightedText() {
  return highlightedText;
}