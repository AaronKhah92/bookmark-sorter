let links = [
  "https://css-tricks.com/how-auto-margins-work-in-flexbox/",
  "https://css-tricks.com/how-to-stack-elements-in-css/",
  "https://wptavern.com/lessons-learned-by-stepping-outside-wordpress-comfort-zone",
  "https://dev.to/nickytonline/frontend-developer-resources-246j",
  "https://dev.to/pofl/how-to-work-with-git-an-overview-of-git-workflows-1icb"
];

function getUrl(userWord = "git") {
  /* //console.log(linkUrl);
    linkUrl.match(/\b(\w+)'?(\w+)?\b/g);
  console.log(wordsInUrl);

  wordFound = wordsInUrl.includes(userWord);
  console.log(wordFound);

  
  console.log(word); */
  var urls = links.map(function(url) {
    let wordsInUrl = url.match(/\b(\w+)'?(\w+)?\b/g);
    console.log(wordsInUrl);
    wordFound = wordsInUrl.includes(userWord);
    console.log(wordFound);

    if (wordFound === true) {
      var wordt = wordsInUrl.reduce(function(acc, word) {
        /*       indWord = wordsInUrl.indexOf(word);
        catArr = wordsInUrl.slice(2, indWord);
        console.log(catArr);
        console.log(indWord); */

        if (word === userWord) {
          acc[word] = typeof acc[word] === "number" ? acc[word] + 1 : 1;
          /*  return word === userWord; */
          //console.log(word);
        }
        return acc;
      }, {});
      console.log(wordt);
    }
  });
}
getUrl();

/* function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
} */
