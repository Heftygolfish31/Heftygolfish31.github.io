function isMobileBrowser() {
    const mobileRegExp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i;
    return mobileRegExp.test(navigator.userAgent);
  }


if (isMobileBrowser()) {
// Code to run if the website is being viewed from a mobile browser
alert('Mobile browser detected!');
} else {
// Code to run if the website is not being viewed from a mobile browser
alert('Not a mobile browser.');
}