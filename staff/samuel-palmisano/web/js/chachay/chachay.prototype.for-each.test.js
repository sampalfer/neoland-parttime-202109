describe('TEST forEach')

// ______________________________________________________________________________

var animals = new Chachay('zebra', 'lion', 'kangoroo', 'hypo', 'elephant', 'dog', 'coco', 'cat')
var res = []

animals.forEach(function (element, index) {
    res[index] = element
})

if (res.length === animals.length
    && res[0] === animals[0]
    && res[1] === animals[1]
    && res[2] === animals[2]
    && res[3] === animals[3]
    && res[4] === animals[4]
    && res[5] === animals[5]
    && res[6] === animals[6]
    && res[7] === animals[7]
    && animals.length === 8
    && animals[0] === 'zebra'
    && animals[1] === 'lion'
    && animals[2] === 'kangoroo'
    && animals[3] === 'hypo'
    && animals[4] === 'elephant'
    && animals[5] === 'dog'
    && animals[6] === 'coco'
    && animals[7] === 'cat')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________
var nums = new Chachay(1, 2, 3, 4, 5, 6)
var res = []

function pow(num, index) {
    return res[index] = num * num
}

nums.forEach(pow)

if (res.length === nums.length
    && res[0] === 1
    && res[1] === 4
    && res[2] === 9
    && res[3] === 16
    && res[4] === 25
    && res[5] === 36
    && nums.length === 6
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3
    && nums[3] === 4
    && nums[4] === 5
    && nums[5] === 6)
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________

var nums = new Chachay(1, 2, 3)
var indexes = []
var arrays = []
var elements = []

nums.forEach(function (element, index, array) {
    elements[elements.length] = element
    indexes[indexes.length] = index
    arrays[arrays.length] = array
})

if (elements instanceof Array
    && elements.length === nums.length
    && elements[0] === nums[0]
    && elements[1] === nums[1]
    && elements[2] === nums[2]
    && indexes.length === nums.length
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && arrays.length === nums.length
    && arrays[0] === nums
    && arrays[1] === nums
    && arrays[2] === nums
    && nums.length === 3
    && nums[0] === 1
    && nums[1] === 2
    && nums[2] === 3)
    success('test 3 ok')
else
    fail('test 3 failed')
