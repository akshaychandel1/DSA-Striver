function pattern7(n){
    let i, j, k, l
    for(i=1; i<=n; i++){
        let row = " "
        for(j=1; j<=n-i ;j++){
            row += " ";
        }
        for(k=0; k<=i-1;k++){
            row +='*'
        }
        for(l=1; l<=i-1; l++){
            row += '*' 
        }
        console.log(row)
    }

}
pattern7(5)