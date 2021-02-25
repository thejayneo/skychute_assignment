function root(num:number):number {
    let upperBound: number = num;
    let lowerBound: number = 0;
    let binarySplit: number = 0;

    while (binarySplit**2 !== num) {
        binarySplit = Math.floor((upperBound+lowerBound)/2);
        if (binarySplit**2 > num) {
            upperBound = binarySplit;
        } else if (binarySplit**2 < num) {
            lowerBound = binarySplit;
        } else {
            break;
        }
    };
    return binarySplit;
};