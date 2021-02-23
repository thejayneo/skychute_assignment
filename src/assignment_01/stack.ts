class Stack {
    element: number[][];

    constructor() {
        this.element = [];
    };

    push(num: number): number {
        if (this.element.length === 0 || num > this.element[this.element.length - 1][1]) {
            this.element[this.element.length] = [num, num];
        } else {
            this.element[this.element.length] = [num, this.element[this.element.length - 1][1]];
        }
        return this.element.length;
    };

    pop(): number {
        const lastElement: number = this.element[this.element.length - 1][0];
        delete this.element[this.element.length - 1];
        this.element.length = this.element.length - 1;
        return lastElement;
    };

    max(): number {
        return this.element[this.element.length-1][1];
    };
};