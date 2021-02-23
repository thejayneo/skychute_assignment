class Queue {
    element: Array<Array<number>>;
    maxArray: Array<number>;

    constructor() {
        this.element = [];
        this.maxArray = [];
    };

    push(num: number): number{
        if (this.element.length == 0 || num > this.element[0][1]) {
            this.element = [[num,num],...this.element];
            if (this.maxArray.length == 0) {
                this.maxArray[0] = num;
            } else {
                this.maxArray[this.maxArray.length] = num;
            };
        } else {
            this.element = [[num, this.element[0][1]],...this.element];
        }
        return this.element.length;
    };

    pop(): number {
        let queueFirst: number = this.element[this.element.length-1][0];
        if (this.element[this.element.length-1][1] > this.element[0][1]) {
            this.element[0][1] = this.maxArray[this.maxArray.length -1];
        };
        this.element.length -= 1;
        return queueFirst;
    };

    max(): number {
        return this.element[0][1];
    };
};

let test1 = new Queue;
test1.push(-5);
test1.push(1);
test1.push(7);
test1.push(7);
test1.push(3);
console.log(test1);

test1.pop();
console.log(test1);

console.log(test1.max())