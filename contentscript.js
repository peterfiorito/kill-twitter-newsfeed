let isNewsFeedPresent = () => document.querySelector('[aria-label="Timeline: Your Home Timeline"]');
let deleteNewsFeed = () => {
  if(!isNewsFeedPresent()){
    return;
  }
  const node = document.querySelector('[aria-label="Timeline: Your Home Timeline"]');
  const target = document.getElementsByTagName('section')[0];
  target.removeChild(node);
  target.style.setProperty('min-height', '500px');
};

let __init__ = () => {
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return
      deleteNewsFeed();
    })
  })
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  });
};

__init__();
