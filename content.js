chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	var images = document.getElementsByTagName('img');
	for (var i = 0, l = images.length; i < images.length; i++) {
		images[i].src = 'https://www.cs.rutgers.edu/files/styles/manual_crop/public/John_Francisco_headshot.JPG?itok=-ZEIUdLj&c=c7941885d30fa3f9f7254b20f4edbf6a';
	}
}