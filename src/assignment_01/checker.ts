function checker(seq:string): string {
    // Init. bracket counters
    let pO: number = 0;
    let pC: number = 0;
    let bO: number = 0;
    let bC: number = 0;
    let sO: number = 0;
    let sC: number = 0;
    // Convert string to array
    const seqArr = seq.split('');

    // Define function to increment counters
    function assign(seqItem: string) {
        if (seqItem === '(') {
            pO += 1;
        } else if (seqItem === ')') {
            pC += 1;
        } else if (seqItem === '{') {
            bO += 1;
        } else if (seqItem === '}') {
            bC += 1;
        } else if (seqItem === '[') {
            sO += 1;
        } else if (seqItem === ']') {
            sC += 1;
        } else {
            return;
        };
    };

    // Iterate over array with pre-defined function
    seqArr.forEach(assign)

    // Check matching counters are equal
    if (pO === pC && bO === bC && sO === sC) {
        return 'Valid Sequence';
    } else {
        return 'Invalid Sequence';
    };

};

