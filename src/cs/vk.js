let __no_feed_hide;

function hideFeed() {
  browser.storage.local.get('hide').then((store) => {
    __no_feed_hide = store.hide || false;
    hide(store.hide);
  });
}

function hide(hide) {
  if (hide == undefined) {
    hide = __no_feed_hide;
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