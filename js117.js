       // Sum Numbers
       function sum(list) {
        var len = list.length,
            sum = 0,
            i = 0;
        for (; i < len; i += 1) {
            sum += list[i];
        }
        return sum;
    };