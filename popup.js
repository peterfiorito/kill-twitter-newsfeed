const addPopupEventListeners = () => {
  (document.getElementById('popup-activate-button')).addEventListener('click', (event) => {
    if(event.target.value == 'inactive'){
      event.target.classList.remove('inactive');
      event.target.classList.add('active');
      event.target.value = 'active';
      event.target.innerText = 'DEACTIVATE';
    } else {
      event.target.classList.remove('active');
      event.target.classList.add('inactive');
      event.target.value = 'inactive';
      event.target.innerText = 'ACTIVATE'
    }
    chrome.runtime.sendMessage({
      query: 'set active',
      active: true,
      value: event.value
    })
  });
}

const __init__ = () => {
  addPopupEventListeners();
};

__init__();