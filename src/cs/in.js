let __no_feed_hide;

function hideFeed() {
  browser.storage.local.get(['hideIN', 'hideAll']).then((store) => {
    __no_feed_hide = store.hideAll || store.hideIN || false;
    hide(__no_feed_hide);
  });
}

function hide(hide) {
  if (hide == undefined) {
    hide = __no_feed_hide;
  }
  const newsFeed = document.querySelector('[role="main"]');
  if (window.location.pathname === '/') {
    if (hide) {
      newsFeed.style.display = "none";
    } else {
      newsFeed.style = "";
    }
  } else {
    newsFeed.style = "";
  }
}

browser.storage.onChanged.addListener(hideFeed);

hideFeed();
setInterval(hide, 2000);