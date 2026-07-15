 function pattern2(n){
        let i,j;
        for(i=1; i<=n; i++){
            let row = ''
            for(j=1; j<=i; j++){
                row += '*'
            }
                console.log(row)
        }
    }
 
    pattern2(4);


// *
// **
// ***
// ****