
// var count = 1;
// prev = []

var images = document.getElementsByTagName('img');
// storePrev(prev, images);
// if(count % 2===0){
// 	chrome.runtime.onMessage.addListener(preFranny);
// 	count = count + 1;
// }else{
	chrome.runtime.onMessage.addListener(toFranny);
// 	count = count + 1;
// }
	

// function storePrev(prev, images){
// 	for (var i = 0, l = images.length; i < images.length; i++) {
// 		prev[i] = images[i].src;
// 	}
// }


function toFranny(){
	frannyArr = []
	frannyArr[1] = 'https://www.cs.rutgers.edu/files/styles/manual_crop/public/John_Francisco_headshot.JPG?itok=-ZEIUdLj&c=c7941885d30fa3f9f7254b20f4edbf6a'; 
	frannyArr[2] = 'http://www.winlab.rutgers.edu/iab/2011-02/images/IABW-9.jpg';
	frannyArr[3] = 'http://paul.rutgers.edu/~deymious/moveIn.gif';
	for (var i = 0, l = images.length; i < images.length; i++) {
		var index = Math.floor((Math.random() * 3) + 1);
		images[i].src = frannyArr[index];
;

	}
}

// function preFranny(){
// 	for (var i = 0, l = images.length; i < images.length; i++) {
// 		images[i].src = prev[i];
// 	}
// }