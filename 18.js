function pattern18(n){
    let i,j;
    let lastCharCode = 'A'.charCodeAt() + (n-1)
    for(i=1; i<=n; i++){
        let start = lastCharCode - (i-1)
        let row = '';
        for(j=0; j<i; j++){
            row += String.fromCharCode(start + j)
        }
        console.log(row)
    }
}
pattern18(5)



// E
// DE
// CDE
// BCDE
// ABCDE