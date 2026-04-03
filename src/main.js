import _ from "./_/index.js";


const chunks = _.chunk([1, 2, 3, 4, 5, 6], 2)

const compacts = _.compact([-1,-2, 0, 1, 2, 3,false,'',null,undefined])

const concats = _.concact([1,[2,3],4,[5,6]])

const diffrences = _.diffrence([1,2,3],[3,4])

const diffrencesBy = _.diffrenceBy([1.2, 2.2, 2.7],[2.2])
console.log(diffrencesBy)