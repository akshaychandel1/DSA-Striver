function pattern16(n){
    let i,j;
    let charCode = 'A'.charCodeAt();
    for(i=1; i<=n; i++){
        let row = '';
        let temp = String.fromCharCode(charCode)
        for(j=1; j<=i; j++){
            row +=temp
        }
        console.log(row)
        charCode++
    }
}
pattern16(5)



// A
// BB
// CCC
// DDDD
// EEEEE
