let links = [
  "https://css-tricks.com/how-auto-margins-work-in-flexbox/",
  "https://css-tricks.com/how-to-stack-elements-in-css/",
  "https://wptavern.com/lessons-learned-by-stepping-outside-wordpress-comfort-zone",
  "https://dev.to/nickytonline/frontend-developer-resources-246j",
  "https://dev.to/pofl/how-to-work-with-git-an-overview-of-git-workflows-1icb"
];

function getUrl(userWord = "git") {
  let usrData = getUserData();
  userWord = usrData.gotWord;



  let matchedUrl = new Set();
  var urls = links.map(function (url) {
    let wordsInUrl = url.match(/\b(\w+)'?(\w+)?\b/g);
    // console.log(wordsInUrl);
    let wordFound = wordsInUrl.includes(userWord);
    //console.log(wordFound);

    if (wordFound === true) {
      var wordt = wordsInUrl.reduce(function (acc, word) {
        if (word === userWord) {
          acc[word] = typeof acc[word] === "number" ? acc[word] + 1 : 1;
        }
        return acc;
      }, {});
    }

    if (typeof wordt !== "undefined") {
      matchedUrl.add(url);
    }
  });
  const matchedUrlArr = Array.from(matchedUrl);
  console.log(matchedUrlArr);
  dspLinks = document.body.getElementsByClassName("link-render");
  for (let lnk of dspLinks) {
    let link = lnk.innerText;
    link = matchedUrlArr[0];
    console.log(link);
  }

  return matchedUrlArr;
}


function getUserData() {
  return {
    gotWord: document.getElementById("userwrd").value
  }
}


getUrl();
/* function mkBookMarkObj() {
  let megaObj = new Set();
  let wrdFromUsr = "userword";
  let oneLinkArr = getUrl();

} */