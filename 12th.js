function pattern12(n){
    let i,j,k,l
    for(i=1; i<=n; i++){
        let row = ''
        for(j=1; j<= i ; j++){
            row += j;
        } 
         for(k=n-1; k>=i; k--){
            row +=" "
         }
         for(l=n-1; l>=i; l--){
            row +=" "
         }
         for(m=i; m>=1; m--){
            row += m
         }
        console.log(row)
        }
       
    }
pattern12(4)

// 1      1
// 12    21
// 123  321
// 12344321