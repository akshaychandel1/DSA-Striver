// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15


function pattern13(n){
    let i, j 
    let count = 1
    for(i = 1 ; i<= n; i++){
        let row = '';
        for(j = 1 ; j <= i; j++){
            row += count + ' ';
            count++;
        }
        
        console.log(row)
    }
}
pattern13(5)