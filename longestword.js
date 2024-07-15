function longestWord(str) {
  
    let words = str.split(" ");
    

    let longestWord = "";
    let maxLength = 0;
    

    for (let word of words) {
      
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }
    
    
    return longestWord;
}


console.log(longestWord("This is a sample string"));
console.log(longestWord("Hello, world! How are you?"));
console.log(longestWord("")); 
