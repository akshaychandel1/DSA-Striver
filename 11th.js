function pattern11(n){
    let i, j 
    for(i = 1; i <= n ; i++ ){
        let row = '';
        for(j = 1; j<= i; j++){
            if((i+j)%2==0){
                row += '1 ';
            }
            else{
                row += '0 '
            }
        }
        console.log(row)
    }
}
pattern11(5);



// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1 