function maxLength(intervals:number[][]):number {
    // Check/sort element arrays are orientated in [start point, end point]
    function sortCoord(input:number[][]){
        const output:number[][] = [];
        input.forEach(element => {
            output.push(element.sort());
        });
        return output;
    }
    // Sorting matrix function
    function sortMatrix(input:number[][]):number[][] {
        const sortingLines: number[][] = [];
        let counter: number = 0;
        const numberOfLines = intervals.length;
        while (counter < numberOfLines) {
            const item = input.shift() || [];
            if (sortingLines.length === 0) {
                sortingLines.push(item);
            } else if (item[0] >= sortingLines[sortingLines.length - 1][0]) {
                sortingLines.push(item);
            } else {
                let n: number = sortingLines.length;
                while (n > 0 && item[0] < sortingLines[n-1][0]) {
                    n -= 1;
                }
                sortingLines.splice(n,0,item);
            }
            counter++
        }
        return sortingLines;
    }
    // Sort arrays
    const sortedIntervals:number[][] = sortMatrix(sortCoord(intervals));
    // Iterate through each endpoint and if intersect with another line, add to length.
    let lengthCounter:number = 0;
    let index:number = 0;
    let segEnd:number = 0;
    let continuingSegment:boolean = false;
    const maxSegments:number[] = [];
    while (index < sortedIntervals.length) {
        // If not, increment counter by interval length. If true, increment length counter by difference with endpoint. If segment endpoint is greater than interval endpoint, keep endpoint and break.
        if (!continuingSegment) {
            lengthCounter += sortedIntervals[index][1] - sortedIntervals[index][0];
            segEnd = sortedIntervals[index][1];
        } else if (sortedIntervals[index][1] > segEnd) {
            lengthCounter += sortedIntervals[index][1] - segEnd;
            segEnd = sortedIntervals[index][1];
        }
        // Check if segment will continue next iteration.
        if (index + 1 < sortedIntervals.length && segEnd >= sortedIntervals[index+1][0]) {
            continuingSegment = true;
        } else {
            if (maxSegments.length === 0 || lengthCounter > maxSegments[maxSegments.length-1]) {
                maxSegments.push(lengthCounter);
            }
            lengthCounter = 0;
            continuingSegment = false;
        }
        index++;
    }
    return maxSegments[maxSegments.length-1];
}

maxLength([[5.4,2],[3,1.3],[4,2],[7,9],[0,3]]);