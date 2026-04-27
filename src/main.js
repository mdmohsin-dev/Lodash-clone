import _ from "./_/index.js";
import min from "./_/min/min.js";


const chunks = _.chunk([1, 2, 3, 4, 5, 6], 2)

const compacts = _.compact([-1, -2, 0, 1, 2, 3, false, '', null, undefined])

const concats = _.concact([1, [2, 3], 4, [5, 6]])

const diffrences = _.diffrence([1, 2, 3], [3, 4])

const diffrencesBy = _.diffrenceBy([1.2, 2.2, 2.7], [2.2])

const removeItem = _.remove([1, 2, 3, 4], n => n % 2 === 0)

const objects = [{ x: 1 }, { x: 2 }];
const others = [{ x: 1 }];
const resultDiffrenceWith = _.differenceWith(objects, others, (a, b) => a.x === b.x);


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

const checkValue = _.includes([1, 2, 3, 4], 2)

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

const takeValue = _.take([1, 2, 3, 4, 5], 2)

const takeRightValue = _.takeRight([1, 2, 3, 4, 5], 2)

const getSize = _.size([1, 2, 3, 4])

const withoutValue = _.without(['a', 2, 3, 4], 'a', 3)

const checkArray = _.isArray([1, 2, 3, 4])

const checkBoolean = _.isBoolean(true)

const checkNumber = _.isNumber(1)

const checkObject = _.isObject({ name: 'mohsin' })

const greaterThan = _.gt(2, 1)

const lessThan = _.lt(1, 2)

const greaterThanOrEqual = _.gte(4, 4)

const lessThanOrEqual = _.lte(3, 3)

const maxNum = _.max([1, 2, 3, 4, 5])

const checkEqual = _.eq(10, 10)

const removeSameItem = _.xor([1, 2], [2, 3])

const getValueByIndex = _.nth([1, 2, 3, 4, 5], 2)

const ranges = _.range(1, 5)

const upperFirstCharacter = _.upperFirst('hello')

const repeatSring = _.repeat("hi")

const lowerFirstCharacter = _.lowerFirst('AMAR')

const getCapitalize = _.capitalize('bangladesh')

const obj = { name: 'mohsin', age: 21, role: 'fullstack developer' }

const pickAnyPair = _.pick(obj, ['name', 'role'])

const withoutAnyPair = _.omit(obj, ['role'])

const summation = _.sum([5, 10, -5])

const subtraction = _.subtract(6, 4)

const multiplication = _.multiply(6, 5)

const minNumber = _.min([3, 2, 6, 1, 8])

const meanOfNumbers = _.mean([2, 4, 5, 1])

const division = _.divide(15, 5)

const addNumbers = _.add(4, 5)

const createObject = _.zipObject(['a', 'b'], [1, 2])

const getUniqWithDecimal = _.unionBy([2.1], [1.2, 2.3])

const breakArrayByCondition = _.flattenDepth([1, [2, [3, [4]], 5]], 2)

const rangesRight = _.rangeRight(0, 20, 5)

const matchFirstChar = _.startsWith('hello world', 'hello')

const getDefault = _.defaultTo(1, 10)

const resultOfOmitBy = _.omitBy({ a: 1, b: '2', c: 3 }, value => typeof value === 'number')

const resultOf_inRange = _.inRange(3, 2, 5)

const resultOfClump = _.clamp(10, 0, 5)

const checkUndefined = _.isUndefined(true)

const checkNull = _.isNull(void 0)

const checkValueNullOrUndefined = _.isNil(undefined)

const checkNaN = _.isNaN(2)

const getLast = _.findLast([1, 2, 3, 4], n => n % 2 === 0)

const findValue = _.find([1, 2, 3, 4], n => n % 2 === 0)

const arrayCast = _.castArray('abc')

const getSample = _.sample([1, 2, 3, 4])

const takeByCondition = _.takeWhile([1, 2, 3, 4], n => n < 3)

const takeRightByCondition = _.takeRightWhile([1, 2, 3, 4], n => n > 2)

const filtered = _.filter([1, 2, 3, 4], n => n % 2 === 0)

const combinedArray = _.zip([1, 2], [3, 4], [5, 6])
console.log(combinedArray)