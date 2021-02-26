function decChomp(input: number, k: number):number {
    // Split input into integer and decimal portion.
    const int: number = parseInt(input.toString().split('.')[0],10);
    const dec: number = parseInt(input.toString().split('.')[1],10);

    // Define function for replacing 'subK' amount of digits.
    function chomp(splitInput:number,subK:number):number {
        let counter: number = 0;
        let n: number = 0;
        let workingInput: number = splitInput;
        let maxArray: number[][] = [];

        while (counter < subK) {
            const max: number = workingInput.toString().length;
            while (n < max) {
                const localMax: number = (Math.floor(workingInput/(10**(n+1)))*(10**n) + workingInput % (10**n));
                if (maxArray.length === 0 || localMax > maxArray[maxArray.length -1][0]) {
                    maxArray[maxArray.length] = [localMax, n+1];
                }
                n += 1;
            }
            const convertedInput:string[] = workingInput.toString().split('');
            convertedInput.splice(max - (maxArray[maxArray.length-1][1]),1);
            workingInput = parseInt(convertedInput.join(''),10);
            counter +=1;
            n = 0;
            maxArray = [];
        };
        return workingInput;
    };

    // Conditional depending on value of 'k' vs length of decimal portion.
    if (k === dec.toString().length){
        return int;
    } else if (k < dec.toString().length) {;
        const processedDec:number = chomp(dec, k);
        const answerString:string = int + '.' + processedDec;
        const answerNumber:number = parseFloat(answerString);
        return answerNumber;
    } else if (k > (dec.toString().length + int.toString().length)) {
        return 0;
    } else {
        return chomp(int, k - dec.toString().length);
    };
};