describe('TEST sort')

// _____________________________________________________________

var array = ['pera', 'manzana', 'banana']
var res = sort(array)

if (res instanceof Array
    && res.length === 3
    && res[0] === 'banana'
    && res[1] === 'manzana'
    && res[2] === 'pera')
    success('test 1 ok')
else
    fail('test 1 failed')

// _____________________________________________________________

var array = [1, 10, 2, 21];

res = sort(array)

if (
    res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 10
    && res[2] === 2
    && res[3] === 21
    )
    success('test 2 ok')
else
    fail('test 2 failed')

// _____________________________________________________________

