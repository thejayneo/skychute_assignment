function seqBounds(seq: number[], sum:number) {
    let l: number = 1;
    let r: number = 1;
    let S: number = 0;

    while (S < sum) {
        S += seq[r-1];
        if (S === sum) {
            return [l,r];
        } else if (S > sum) {
            while (S > sum) {
                S -= seq[l-1];
                if (S === sum) {
                    return [l, r];
                } else if (l === r && r === seq.length) {
                    return 'There is no valid sub-sequence.'
                } else if (S < sum){
                    l +=1;
                    break;
                }
                l += 1;
            }
        }
        if (l === 1 && r === seq.length && S !== sum) {
            return 'There is no valid sub-sequence.'
        } else {
        r += 1;
        }
    }
}