class Stack {
    element: Array<Array<number>>;

    constructor() {
        this.element = [];
    };

    push(num: number): number {
        if (this.element.length == 0 || num > this.element[this.element.length - 1][1]) {
            this.element[this.element.length] = [num, num];
        } else {
            this.element[this.element.length] = [num, this.element[this.element.length - 1][1]];
        }
        return this.element.length;
    };

    pop(): number {
        let lastElement: number = this.element[this.element.length - 1][0];
        delete this.element[this.element.length - 1];
        this.element.length = this.element.length - 1;
        return lastElement;
    };

    max(): number {
        return this.element[this.element.length-1][1];
    };
};

let test = new Stack;
test.push(-5);
test.push(1);
test.push(7);
test.push(3);
console.log(test);

test.pop();
test.pop();
console.log(test);

console.log(test.max())