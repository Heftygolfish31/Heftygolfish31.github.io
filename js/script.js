function isMobileBrowser() {
    const mobileRegExp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i;
    return mobileRegExp.test(navigator.userAgent);
  }
  