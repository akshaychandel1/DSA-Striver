function pattern8(n){
    let i,j,k,l;
    for(i=1; i<=n; i++){
        let row = '';
        for(j=1;j<=i;j++){
            row += ' '
        }
        for(k=0; k<= n-i; k++){
            row += '*'
        }
        for(l=1; l<= n-i; l++){
            row +='*'
        }
        console.log(row)
    }
}
pattern8(5)


//  *********
//   *******
//    *****
//     ***
//      *


