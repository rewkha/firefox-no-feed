let __no_feed_hide;

function hideFeed() {
  browser.storage.local.get(['hideTW', 'hideAll']).then((store) => {
    __no_feed_hide = store.hideAll || store.hideTW || false;
    hide(__no_feed_hide);
  });
}

function hide(hide) {
  if (hide == undefined) {
    hide = __no_feed_hide;
  }
  if (!(window.location.pathname === '/' || window.location.pathname === '/home')) {
    return;
  }
  const newsFeed = document.querySelector('[role="region"]');
  if (hide) {
    if (newsFeed && !(newsFeed.hidden && newsFeed.style.display === "none")) {
      newsFeed.hidden = true;
      newsFeed.style.display = "none";
    }
  } else {
    if (newsFeed && (newsFeed.hidden && newsFeed.style.display === "none")) {
      newsFeed.hidden = false;
      newsFeed.style = "";
    }
  }
}

browser.storage.onChanged.addListener(hideFeed);

hideFeed();
setInterval(hide, 2000);