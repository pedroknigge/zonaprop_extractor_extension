document.getElementById('extractButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "extractData"}, (response) => {
      if (response && response.data) {
        const dataString = JSON.stringify(response.data, null, 2);
        document.getElementById('data').textContent = dataString;
        document.getElementById('copyButton').style.display = 'block'; // Show copy button
      } else {
        document.getElementById('data').textContent = 'No data extracted or an error occurred.';
        document.getElementById('copyButton').style.display = 'none'; // Hide copy button
      }
    });
  });
});

document.getElementById('copyButton').addEventListener('click', () => {
  const dataToCopy = document.getElementById('data').textContent;
  navigator.clipboard.writeText(dataToCopy).then(() => {
    alert('Data copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});

// Initially hide the copy button
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('copyButton').style.display = 'none';
});