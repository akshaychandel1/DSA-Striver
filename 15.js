function pattern15(n){
    let i, j 
    for(i=1; i<=n; i++){
        let row = '';
        for(j=0; j<n-i+1; j++){
            row += String.fromCharCode('A'.charCodeAt() + j)
        }
        console.log(row)
    }
}
pattern15(5)



// ABCDE
// ABCD
// ABC
// AB
// A