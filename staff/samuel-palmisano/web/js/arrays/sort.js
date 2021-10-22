function sort(array) {

    for (var i = 0; i < array.length; i++) {
        var temp = array[i]

        if ( array[i] > [array[i + 1] ) {

            array[i] = array[array[i] + 1]

            array[array[i] + 1] = temp
        }

    }

    return array
}

