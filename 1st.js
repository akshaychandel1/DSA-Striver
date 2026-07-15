function pattern1(n) {
    let i, j;
    for (i = 1; i <= n; i++) {
        let row = "";
        for (j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// Direct call! No class, no object needed.
pattern1(4);