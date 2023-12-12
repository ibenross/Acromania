document.addEventListener("mouseup", function(event) {
    const selectedText = window.getSelection().toString().trim();
    console.log("Selected text:", selectedText);
  
    if (selectedText !== "") {
      // Send a message to the background script with the selected text
      chrome.runtime.sendMessage({ action: "highlightedText", text: selectedText });
    }
  });
  
  
  const port = chrome.runtime.connect({ name: 'content-script' });
  
  
  document.addEventListener('mouseup', function (event) {
    const selection = window.getSelection().toString().trim();
  
    if (selection) {
      port.postMessage({ action: 'checkAcronym', acronym: selection });
    }
  });
  
  // Handle other messages as neededs
  port.onMessage.addListener((request) => {
    if (request.action === 'acronymCheckResponse') {
      if (request.definition) {
        const tooltipPosition = getTooltipPosition(event);
        showTooltip(request.acronym, request.definition, tooltipPosition);
      }
    }
  });
  
  function showTooltip(acronym, definition, position) {
      // Create a tooltip element
      const tooltip = document.createElement('div');
      tooltip.className = 'acronym-tooltip';
      tooltip.textContent = `${acronym}: ${definition}`;
    
      // Set the tooltip position
      tooltip.style.position = 'absolute';
      tooltip.style.left = position.x + 'px';
      tooltip.style.top = position.y + 'px';
      tooltip.style.backgroundColor = '#333';
      tooltip.style.color = '#fff';
      tooltip.style.padding = '5px';
      tooltip.style.borderRadius = '5px';
      tooltip.style.zIndex = '1000';
    
      // Append the tooltip to the body
      document.body.appendChild(tooltip);
    
      // Remove the tooltip after a delay (you can adjust the delay as needed)
      setTimeout(() => {
        tooltip.remove();
      }, 3000); // Remove the tooltip after 3 seconds
    }
  
  function getTooltipPosition(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const screenHeight = window.innerHeight;
    const tooltipPosition = { x: mouseX, y: mouseY };
  
    // Check if the tooltip will be outside the viewport vertically
    if (mouseY + 200 > screenHeight) {
      tooltipPosition.y -= 200; // Show the tooltip above the selection
    }
  
    return tooltipPosition;
  }