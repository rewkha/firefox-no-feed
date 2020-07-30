function toggleHide(type) {
  const toggle = () => {
    return browser.storage.local.get().then((store) => {
      const newObj = {};
      if (store['hide'+type]) {
        newObj[`hide${type}`] = false;
        browser.storage.local.set(newObj);
      } else {
        newObj[`hide${type}`] = true;
        browser.storage.local.set(newObj);
      };
    });
  }
  return toggle;
}

function setValues() {
  browser.storage.local.get().then((store) => {
    document.getElementById('ToggleAll').checked = !!store.hideAll
    document.getElementById('ToggleYT').checked = !!store.hideYT
    document.getElementById('ToggleFB').checked = !!store.hideFB
    document.getElementById('ToggleIN').checked = !!store.hideIN
    document.getElementById('ToggleTW').checked = !!store.hideTW
    document.getElementById('ToggleVK').checked = !!store.hideVK
  });
}

setValues();
browser.storage.onChanged.addListener(setValues);

document.getElementById('ToggleAll').addEventListener('click', toggleHide('All'));
document.getElementById('ToggleYT').addEventListener('click', toggleHide('YT'));
document.getElementById('ToggleFB').addEventListener('click', toggleHide('FB'));
document.getElementById('ToggleIN').addEventListener('click', toggleHide('IN'));
document.getElementById('ToggleTW').addEventListener('click', toggleHide('TW'));
document.getElementById('ToggleVK').addEventListener('click', toggleHide('VK'));