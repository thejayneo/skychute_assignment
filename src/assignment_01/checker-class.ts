class Checker {
    pO: number = 0;
    pC: number = 0;
    bO: number = 0;
    bC: number = 0;
    sO: number = 0;
    sC: number = 0;
    seqArr: Array<string> = [];

    constructor() {
        this.pO = 0;
        this.pC = 0;
        this.bO = 0;
        this.bC = 0;
        this.sO = 0;
        this.sC = 0;
        this.seqArr = [];
    }

    // Define function to increment counters
    bracketsCounter(seqItem: string) {
        if (seqItem == '(') {
            this.pO += 1;
        } else if (seqItem == ')') {
            this.pC += 1;
        } else if (seqItem == '{') {
            this.bO += 1;
        } else if (seqItem == '}') {
            this.bC += 1;
        } else if (seqItem == '[') {
            this.sO += 1;
        } else if (seqItem == ']') {
            this.bC += 1;
        };
    };

    brackets(seq:string): string {
        this.seqArr = seq.split('');
        // console.log(this.seqArr);
        for (let i in this.seqArr) {
            this.bracketsCounter(i);
        }

        console.log(this.pC, this.pO, this.bC, this.bO, this.sC, this.sO);
        if (this.pO == this.pC && this.bO == this.bC && this.sO == this.sC) {
            console.log('Valid Sequence')
            return 'Valid Sequence';
        } else {
            console.log('Invalid Sequence')
            return 'Invalid Sequence';
        };
    }
};

let test2 = new Checker;
test2.brackets('[}');