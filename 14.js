function pattern14(n){
    let i,j;
    for(i=1; i<=n; i++){
        let row ='';
        for(j=0; j<=i-1; j++){
            row += String.fromCharCode('A'.charCodeAt() + j)
        }
        console.log(row)
    }
}
pattern14(5)


// A
// AB
// ABC
// ABCD
// ABCDE