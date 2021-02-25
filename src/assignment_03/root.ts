function root(num:number) {
    // Define binary search function
    function rootN(natural:number):number {
        // Initalize variables
        let upperBound: number = natural;
        let lowerBound: number = 0;
        let binarySplit: number = 0;
        // Constants for comparing upperBound and lowerBound to 2 decimal places.
        let upperBound2dp:number = 0;
        let lowerBound2dp:number = 1;
        // Binary search/comparison to accuracy of 2 d.p.
        while (lowerBound2dp !== upperBound2dp) {
            binarySplit = (upperBound+lowerBound)/2;
            upperBound2dp = Number(upperBound.toFixed(2));
            lowerBound2dp = Number(lowerBound.toFixed(2));
            if (binarySplit**2 > natural) {
                upperBound = binarySplit;
            } else if (binarySplit**2 < natural) {
                lowerBound = binarySplit;
            } else {
                break;
            }
        };
        return Number(binarySplit.toFixed(2));
    };

    // Check for negative input
    if (num < 0) {
        return rootN(-1*num) + 'i';
    } else {
        return rootN(num);
    };
};