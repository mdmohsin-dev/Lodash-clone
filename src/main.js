import _ from "./_/index.js";


const chunks = _.chunk([1, 2, 3, 4, 5, 6], 2)

const compacts = _.compact([-1, -2, 0, 1, 2, 3, false, '', null, undefined])

const concats = _.concact([1, [2, 3], 4, [5, 6]])

const diffrences = _.diffrence([1, 2, 3], [3, 4])

const diffrencesBy = _.diffrenceBy([1.2, 2.2, 2.7], [2.2])

const drops = _.drop([1, 2, 3, 4], 2)

const dropsRight = _.dropRight([1, 2, 3, 4, 5], 2)

const dropsWhile = _.dropWhile([1, 4, 6, 2, 5], 3)


const dropsRightWhile = _.dropRightWhite([
  { name: "a", active: true },
  { name: "b", active: true },
  { name: "c", active: false },
  { name: "d", active: true }
])


const fills = _.fill([1, 2, 3, 4], 'a')


const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true }
]
const index = _.findIndex(users, { user: 'fred', active: false })



const customers = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true }
]
const customer = _.findLastIndex(customers, { user: 'barney', active: false })

const theHead = _.head([1, 2, 3])

const searchIndex = _.indexOf([1, 2, 3, 4], 2)

const initialArray = _.initial([1, 2, 3, 4])

const findSameValue = _.intersection([1, 2, 3], [2, 3, 4])

const findSameDecimalValue = _.intersectionBy([1.1, 2.2, 3.5], [2.1, 3.3, 5.4])

const breakArray = _.faltten([1, [2, 3], 4])

const breakDeepArray = _.flattenDeep([1, [2, [3, [4]], 5]])

const pairs = _.fromPairs([['a', 1], ['b', 2]])

const joins = _.join(['a', 'b', 'c'])

const findLastElement = _.last([1, 2, 3, 4])

const findLastIndex = _.lastIndexOf([1, 2, 3, 4, 3, 5, 2], 2)

const pullArray = _.pull([1, 2, 3, 4, 5, 6, 2], 2, 3)

const pullAllArray = _.pullAll([1, 2, 3, 4, 5, 6], [1, 3])

const pullByIndexes = _.pullAt(['a', 'b', 3, 4, 5], [1, 3])

const arrayReverse = _.reverse([1, 2, 3, 4])

const sliceArray = _.slice([1, 2, 3, 4, 5], 1, 3)

const getUniqInMultipleArray = _.union([1, 2, 3], [2, 3, 4], [4, 5])

const getUniqValue = _.uniq([1, 2, 2, 3, 4, 4, 5])

const uniqSortArray = _.sortedUniq([1, 1, 2, 2, 3, 4])

const removeFirstElement = _.tail([2, 3, 5, 7, 9])

const takeValue = _.take([1,2,3,4,5],2)

const takeRightValue = _.takeRight([1, 2, 3, 4, 5], 2)

const getSize = _.size([1,2,3,4])

const withoutValue = _.without(['a', 2, 3, 4], 'a', 3)

const checkArray = _.isArray([1,2,3,4])

const checkBoolean = _.isBoolean(true)

const checkNumber = _.isNumber(1)

const checkObject = _.isObject({name:'mohsin'})

const greaterThan = _.gt(2,1)

const lessThan = _.lt(1,2)

const greaterThanOrEqual = _.gte(4,4)

const lessThanOrEqual = _.lte(3,3)

const maxNum = _.max([1,2,3,4,5])

const checkEqual = _.eq(10,10)
console.log(checkEqual)