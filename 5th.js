function pattern5(n) {
        let i,j
        for(i=1; i<=n; i++){
           let  row = '';
            for(j=i; j<=n; j++){
                row += '*'
            }
            console.log(row)
        }
    }
pattern5(4)