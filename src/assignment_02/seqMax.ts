function seqMaxs(seq: number[]):number[] {
    let l: number = 1;
    let r: number = 1;
    let S: number = 0;
    const maxArray: number[][] = [];

    while (r <= seq.length) {
        S += seq[r-1];
        if (maxArray.length === 0) {
            maxArray[maxArray.length] = [S, l, r];
        } else if (seq[r-1] > S && seq[r-1] > maxArray[maxArray.length-1][0]) {
            l = r;
            S = seq[r-1];
            maxArray[maxArray.length] = [seq[r-1], l, r];
        } else if (S > maxArray[maxArray.length-1][0]) {
            maxArray[maxArray.length] = [S, l, r];
        }
        r += 1;
    }
     return [maxArray[maxArray.length - 1][1], maxArray[maxArray.length - 1][2]]
}