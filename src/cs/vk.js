let __no_feed_hide;

function hideFeed() {
  browser.storage.local.get(['hideVK', 'hideAll']).then((store) => {
    __no_feed_hide = store.hideAll || store.hideVK || false;
    hide(__no_feed_hide);
  });
}

function hide(hide) {
  if (hide == undefined) {
    hide = __no_feed_hide;
  }
  if (!(window.location.pathname === '/' || window.location.pathname === '/feed')) {
    return;
  }
  const newsFeed = document.querySelector('#feed_rows');
  const nextButton = document.querySelector('#show_more_link');
  if (hide) {
    if (newsFeed && !newsFeed.hidden) {
      newsFeed.hidden = true;
    }
    if (nextButton && !(nextButton.hidden && newsFeed.style.display === "none")) {
      nextButton.hidden = true;
      nextButton.style = "display: none";
    }
  } else {
    if (newsFeed && newsFeed.hidden) {
      newsFeed.hidden = false;
    }
    if (nextButton && (nextButton.hidden && newsFeed.style.display === "none")) {
      nextButton.hidden = true;
      nextButton.style = "";
    }
  }
}

browser.storage.onChanged.addListener(hideFeed);

hideFeed();
setInterval(hide, 2000);