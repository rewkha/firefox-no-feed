let __no_feed_hide;

function hideFeed() {
  browser.storage.local.get(['hideFB', 'hideAll']).then((store) => {
    __no_feed_hide = store.hideAll || store.hideFB || false;
    hide(__no_feed_hide);
  });
}

function hide(hide) {
  if (hide == undefined) {
    hide = __no_feed_hide;
  }
  if (!(window.location.pathname === '/' || window.location.pathname === '/home.php')) {
    return;
  }
  const newsFeed = document.querySelector('div[role="feed"]');
  if (hide) {
    if (newsFeed && !newsFeed.hidden) {
      newsFeed.hidden = true;
    }
  } else {
    if (newsFeed && newsFeed.hidden) {
      newsFeed.hidden = false;
    }
  }
}

browser.storage.onChanged.addListener(hideFeed);

hideFeed();
setInterval(hide, 2000);