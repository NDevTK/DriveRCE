chrome.tabs.create({
    url: 'https://drive.google.com/drive/u/0/my-drive'
    , active: false
}, console.log);

chrome.runtime.onMessage.addListener((request, sender) => {
    chrome.scripting.executeScript({
        target: {
            tabId: sender.tab.id
        }
        , files: ['proxy.js']
        , world: 'MAIN'
    });
});
