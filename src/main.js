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

const breakArray = _.faltten([1,[2,3],4])
console.log(breakArray)