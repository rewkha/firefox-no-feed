export function hideElement(selector) {
    const newFeed = document.querySelector(selector);
    if (newFeed && !newFeed.hidden) {
      newFeed.hidden = true;
    }
}