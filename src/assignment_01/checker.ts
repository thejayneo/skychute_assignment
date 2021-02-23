
function checker(seq:string): string {
    // Init. bracket coutners
    let pO: number;
    let pC: number;
    let bO: number;
    let bC: number;
    let sO: number;
    let sC: number;
    
    // Convert string to array
    const seqArr = seq.split('');

    // Define function to increment counters
    function assign(seqItem: string) {
        if (seqItem == '(') {
            pO += 1;
        } else if (seqItem == ')') {
            pC += 1;
        } else if (seqItem == '{') {
            bO += 1;
        } else if (seqItem == '}') {
            bC += 1;
        } else if (seqItem == '[') {
            sO += 1;
        } else if (seqItem == ']') {
            bC += 1;
        };
    };

    // Iterate over array with pre-defined function
    seqArr.forEach(assign)

    // Check matching counters are equal
    if (pO == pC && bO == bC && sO == sC) {
        console.log('Valid Sequence')
        return 'Valid Sequence';
    } else {
        console.log('Invalid Sequence')
        return 'Invalid Sequence';
    };

}

checker(`(]})[{`);