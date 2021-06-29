let wordCounter = new Array(betterWords.length);
for (let i = 0; i < betterWords.length; i++) {
  wordCounter[i] = 0;
}
betterWords.forEach(word => {
  for (let i = 0; i < betterWords.length; i++) {
    if (word.toLowerCase() === betterWords[i].toLowerCase()){
      wordCounter[i]++;
    }
  }
}
)
