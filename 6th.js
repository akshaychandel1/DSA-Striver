function pattern6(n){
    let i,j;
    for (i=1 ; i<=n; i++){
        let row = ''
        for(j=1; j<= n-i+1; j++){
            row += j
        }
        console.log(row)
    }
}
pattern6(5)


// 12345
// 1234
// 123
// 12
// 1