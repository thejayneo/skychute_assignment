class Queue {
    // Initalize two dequeues
    element: number[];
    elementMaxes: number[];
    maxLowPointer: number;

    constructor() {
        this.element = [];
        this.elementMaxes = [];
        this.maxLowPointer = 0;
    };

    push(num: number): number{
        if (this.element.length === 0) {
            this.element[0] = num;
            this.elementMaxes[0] = num;
        } else {
            this.element = [num,...this.element];
        // I do not like this 'while' it is not O(c) but I can't think of an O(c) solution. Sorry :'c
            while (num > this.elementMaxes[this.maxLowPointer]) {
                delete this.elementMaxes[this.maxLowPointer];
                this.maxLowPointer += 1;
            };
            if (this.maxLowPointer === 0) {
                this.elementMaxes = [num,...this.elementMaxes];
            } else if (this.elementMaxes[this.maxLowPointer - 1] === undefined) {
                this.elementMaxes[this.maxLowPointer - 1] = num;
            };
            this.maxLowPointer = 0;
        };
        return this.element.length;
    };

    pop() {
        if (this.element.length === 0) {
            return
        } else if (this.element[this.element.length - 1] === this.elementMaxes[this.elementMaxes.length - 1]) {
            this.element.length -= 1;
            this.elementMaxes.length -= 1;
        } else {
            this.element.length -=1;
        };
    };

    max(): number {
        return this.elementMaxes[this.elementMaxes.length - 1];
    };
};