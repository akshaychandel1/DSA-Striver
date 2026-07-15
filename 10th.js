function pattern10(n){
    let i, j;
    for(i=1; i<=n; i++){
        let row = '';
        for(j=0; j<=i-1; j++){
            row += ' * '
        }
        console.log(row)
    }
    for(i=1; i<n; i++){
        let row = '';
        for(j=n-2; j>=i-1; j-- ){
            row += ' * '
        }
        console.log(row)
    }
}
pattern10(5)





// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *