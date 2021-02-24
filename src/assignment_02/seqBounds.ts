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
                } else if (S < sum){
                    break;
                }
                l += 1;
            }
        }
        r += 1;
    }
}

seqBounds([3,7,10,5,2,4],15);