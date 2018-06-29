chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
	let msg = {
		txt: "button pressed"
	}
	chrome.tabs.sendMessage(tab.id, msg);
	console.log("button has been clicked");

}