function pattern17(n){
    let i, j,k, l
    for(i=1; i<=n; i++){
         let row = ''
        for(j=1; j<=n-i+1 ;j++){
            row += ' '
        }
        for(k=0; k<=i-1 ; k++){
            row += String.fromCharCode('A'.charCodeAt() + k )
        }
        for(l=i-2; l>=0; l--){
            row += String.fromCharCode('A'.charCodeAt()+l)
        }
        console.log(row)
    }
}
pattern17(5)




//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA