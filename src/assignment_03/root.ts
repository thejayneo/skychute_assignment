function root(num:number){
    // Initalize variables
    let upperBound: number = num;
    let lowerBound: number = 0;
    let binarySplit: number = 0;
    // Constants for comparing upperBound and lowerBound to 2 decimal places.
    const upperBound2dp:number = Number(upperBound.toFixed(2));
    const lowerBound2dp:number = Number(lowerBound.toFixed(2));

    // Check for negative 'num'
    if (num < 0) {
        return 'No real solution.'
    } else {
        // Binary search/comparison to accuracy of 2 d.p.
        while (lowerBound2dp !== upperBound2dp) {
            binarySplit = (upperBound+lowerBound)/2;
            if (binarySplit**2 > num) {
                upperBound = binarySplit;
            } else if (binarySplit**2 < num) {
                lowerBound = binarySplit;
            } else {
                break;
            }
        };
    }
    return Number(binarySplit.toFixed(2));
};