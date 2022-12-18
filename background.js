chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });
  
  const extensions = 'https://developer.chrome.com/docs/extensions'
  const webstore = 'https://developer.chrome.com/docs/webstore'
  
  // When the user clicks on the extension action
  chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
      // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
      const nextState = prevState === 'ON' ? 'OFF' : 'ON'
  
      // Set the action badge to the next state
      await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
      });
  
      if (nextState === "ON") {
       const text1= await navigator.clipboard.readText();
       const elem = document.getElementById('').innerText(text1);
    }
}
});