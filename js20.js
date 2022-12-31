class SmallestIntegerFinder {
    findSmallestInt(args) {
        var el1 = args[0];
        var el2;
        for (var i = 0; i < args.length; i++) {
            el2 = args[i]
            if (el1 >= el2) {
                el1 = el2;
            }
        }
        return el1;
    }
}