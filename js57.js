function DNAStrand(dna) {
            //your code here
            let str = dna.split('');
            for (let i = 0; i < str.length; i++) {
                if (str[i] == 'A') {
                    str.splice(i, 1, 'T');
                } else if (str[i] == 'T') {
                    str.splice(i, 1, 'A');
                } else if (str[i] == 'C') {
                    str.splice(i, 1, 'G');
                } else if (str[i] == 'G') {
                    str.splice(i, 1, 'C');
                }
            }
            return str.join('');
            console.log(str);
        }