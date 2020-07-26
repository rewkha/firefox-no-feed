function toggleAll() {
  return browser.storage.local.get('hide').then((store) => {
    if (store.hide) {
      browser.storage.local.set({hide: false});
    } else {
      browser.storage.local.set({hide: true});
    };
  });
}

function setValues() {
  browser.storage.local.get().then((store) => {
    document.getElementById('ToggleAll').checked = !!store.hide
  });
}

setValues();
browser.storage.onChanged.addListener(setValues);

document.getElementById('ToggleAll').addEventListener('click', toggleAll);