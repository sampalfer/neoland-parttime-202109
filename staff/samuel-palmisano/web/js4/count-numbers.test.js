describe('TEST countNumbers')

// CASE 1

var res = countNumbers([1, 2, 3])

if (res instanceof Array
    && res.length === 3
    && res[0] === 6
    && res[1] === 0
    && res[2] === 6)
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = countNumbers([1, -2, 3])

if (res instanceof Array
    && res.length === 3
    && res[0] === 4
    && res[1] === -2
    && res[2] === 2)
    success('test ok')
else
    fail('test failed')

// CASE 3

var res = countNumbers([1, 2, -3])

if (res instanceof Array
    && res.length === 3
    && res[0] === 3
    && res[1] === -3
    && res[2] === 0)
    success('test ok')
else
    fail('test failed')