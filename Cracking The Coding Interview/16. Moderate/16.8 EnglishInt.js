//Given any integer, print an english phrase that describes the integer (eg. "One Thousand, Two Hundred Thirty Four")



var intToEnglish = function (int) {
    const conversions = {
        0: {
            0: "", 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine",
            10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Ninteen",
            20: "Twenty", 30: "Thirty", 40: "Fourty", 50: "Fifty", 60: "Sixty", 70: "Seventy", 80: "Eighty", 90: "Ninety"
        },
        1: {
            1: "Thousand", 2: "Million", 3: "Billion", 4: "Trillion"
        }
    }

    //Helper method to convert 3 digit number to string
    function intToString(int, bigNum) {
        let output = "";
        let doublet = int % 100; // 2 digit number (0-99)

        if (doublet > 20) { // add tens digit (20-90)
            let tens = Math.floor(doublet / 10) * 10
            output += `${conversions[0][tens]} `;
            doublet = doublet - tens;
        }
        output += `${conversions[0][doublet]}`; //add ones digit or teens (0-20)

        int = Math.floor(int / 100); // Hundred digit

        if (int > 0) {
            output = `${conversions[0][int]}-Hundred ${output}`;
        }

        if (bigNum > 0){
            output = `${output} ${conversions[1][bigNum]},`
        }

        return output;
    }

    let engString = ""
    let bigNum = 0;

    //convert every 3 digits of numbers to a string and combine as needed
    while (int > 0) {
        let triplet = int % 1000;
        engString = intToString(triplet, bigNum) + ` ${engString}`;
        int = Math.floor(int / 1000);
        bigNum++;
    }
    return engString.trim(); //trim off extra space
}


console.log(intToEnglish(5132178923347));