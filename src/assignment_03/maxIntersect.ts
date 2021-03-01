function maxIntersect(lines:number[][]):number {
    // Sort lines in order by starting point
    function sortMatrix(input:number[][]):number[][] {
        const sortingLines: number[][] = [];
        let counter: number = 0;
        const numberOfLines = lines.length;
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

    // Find active lines at each line's start point.
    const sortedLines:number[][]=sortMatrix(lines);
    let currentIdx:number = 0;
    let comparisonIdx:number = 0;
    let activeLines:number = 0;
    const activeLinesMatrix:number[][]=[];
    while (currentIdx < sortedLines.length){
        if (comparisonIdx < currentIdx) {
            while (comparisonIdx < currentIdx) {
                if (sortedLines[comparisonIdx][1] > sortedLines[currentIdx][0]) {
                    activeLines++
                } else if (sortedLines[comparisonIdx][1] < sortedLines[currentIdx][0]){
                    comparisonIdx++
                    break;
                }
                comparisonIdx++
            }
        } else if (comparisonIdx >= currentIdx && comparisonIdx !== sortedLines.length) {
            while (comparisonIdx < sortedLines.length) {
                if (sortedLines[comparisonIdx][0] <= sortedLines[currentIdx][1]) {
                    activeLines++
                } else if (sortedLines[comparisonIdx][0] > sortedLines[currentIdx][1]){
                    comparisonIdx++
                    break;
                }
                comparisonIdx++
            }
        } else if (comparisonIdx === sortedLines.length) {
            if (activeLinesMatrix.length === 0 || activeLines >= activeLinesMatrix[activeLinesMatrix.length-1][1]) {
                activeLinesMatrix.push([sortedLines[currentIdx][0],activeLines]);
            }
            activeLines = 0;
            comparisonIdx = 0;
            currentIdx++
        }
    }
    return activeLinesMatrix[activeLinesMatrix.length-1][0];
}