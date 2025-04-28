window.addEventListener('message', e => {
    // Prevent RCE :)
    if (e.origin !== location.origin) return;
    
    console.log(e);
    
    let api = chrome.runtime.connect('lmjegmlicamnimmfhcmpkclmigmmcbeh', {
        name: 'com.google.drive.nativeproxy'
    });
    let request = 'native_opener/v2/3/' + btoa('["' + e.data.email + '", "' + e.data.ID + '","VkJTRmlsZQ",""]');
    api.postMessage(request);
});
