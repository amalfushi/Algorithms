// Design a method to find the frequency of occurences of any given word in a book.  What if we were running this algorithm multiple times?

const baconIpsum = "Spicy jalapeno bacon ipsum dolor amet in do tenderloin dolore, shoulder tempor in culpa esse. Kevin fatback buffalo id excepteur shank tenderloin nostrud et dolore beef veniam. In ut bresaola tri-tip ullamco andouille aliquip fatback nisi minim capicola nostrud frankfurter duis. Magna swine fatback sausage sint consequat tongue. Beef ribs minim consequat boudin pork jerky in velit dolor id.\nIpsum in ea t-bone venison tongue pork loin. Duis bacon porchetta, cupim pork belly drumstick turducken esse ham. Ut cillum cupim ham proident adipisicing boudin doner porchetta. Proident beef ribs pastrami, leberkas ullamco tri-tip tail quis.\nAlcatra prosciutto in ea enim frankfurter leberkas magna cupidatat esse shank ipsum pork minim. In enim pig chicken ribeye adipisicing. Sausage cillum turkey enim ribeye filet mignon et. Ullamco short loin shank tenderloin kevin. Landjaeger cupim aute duis nisi in meatball deserunt andouille esse pork loin ad sirloin short loin minim. Proident aliqua short loin landjaeger chuck shoulder cupim deserunt minim in salami dolore eiusmod. Cupidatat boudin swine pariatur tail.\nProident duis cupidatat porchetta veniam doner aliqua magna frankfurter lorem cupim nostrud quis do. Ea fugiat tail do dolor. Do ham hock meatloaf biltong ipsum venison fatback fugiat. Ball tip pig burgdoggen duis consectetur eu esse cow sed strip steak. T-bone adipisicing pariatur, sint ad leberkas chuck in velit beef ribs porchetta shank. Leberkas pastrami rump, sunt cillum kevin landjaeger lorem Short ribs biltong shoulder.\nLaborum tri-tip eiusmod, kielbasa consectetur pork chop nulla beef cow jowl. Duis occaecat non mollit incididunt pork loin pork et picanha eu buffalo andouille corned beef quis nulla. Filet mignon corned beef eu venison. Proident laborum kielbasa nisi chuck irure veniam dolore."






// O(n) method to manually count instances of word
var manualWordCount = function (book, word) {
    if (!word) return 0;
    let idx = 0;
    let count = 0;
    word = word.toLocaleLowerCase();

    while (idx < book.length) {
        //If the current index is a letter, send a runner off to build a temporary string of the current word.
        //If that word matches the word to find, increase the count.
        if (book[idx].match(/[a-zA-Z]/)) {
            let current = "";
            while (!book[idx].match(/[\ .,\n]/)) current += book[idx++]; //Forces it to match whole words (eg: won't match 'tend' and 'tenderloin')
            if (current.toLocaleLowerCase() == word) count++;
        }
        idx++;
    }

    return count;
}

// console.log(manualWordCount(baconIpsum, "Short"));








//O(n) methods to run multiple times.

//Generate a dictionary with individual words as keys and counts as values
var generateWordCount = function(book) {
    let allWords = book.match(/[a-zA-Z\-]+/g); //Regex to match whole words-ish
    let counts = {};

    //Check to see if word exists in dictionary, if so increase it's count. If not, add it and set count to 1;
    for (let w of allWords) {
        w = w.toLocaleLowerCase();
        counts[w] = (counts[w] || 0) + 1; 
    }
    return counts;
}

var getWordCount = function(word, dictionary) {
    //Return the value if found or 0 if not;
    return dictionary[word.toLocaleLowerCase()] || 0;
}


const wordCounts = generateWordCount(baconIpsum);
console.log(getWordCount('short', wordCounts))
