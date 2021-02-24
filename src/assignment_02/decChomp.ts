function decChomp(decimal:number, k:number):number {
    let int:number[] = parseInt(decimal.toString().split('.')[0].split(''),10);
    let dec:string[] = decimal.toString().split('.')[1].split('');

    function chomp(input:string[])
    if (k === dec.length){
        return parseInt(int.join(''),10)
    // } else if (k < dec.length) {

    } else {

        return parseInt(int.join(''),10)
    }
}

decChomp(3.141, 3);