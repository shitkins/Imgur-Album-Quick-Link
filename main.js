viewImgurAlbum = function(word){
  var query = word.selectionText;
  console.log(query);
  chrome.windows.create({url: "http://" + query + ".imgur.com", incognito: true});
};

chrome.contextMenus.create({
  title: "View Imgur Albums!",
  contexts:["selection"],
  onclick: viewImgurAlbum,
  documentUrlPatterns: [
    "*://imgur.com/*",
    "*://*.imgur.com/*"
  ]
});
