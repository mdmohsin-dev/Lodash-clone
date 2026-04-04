export default function findLastIndex(users, predicted) {
    for (let i = 0; i < users.length - 1; i++) {
        if (users[i].user == predicted.user && users[i].active == predicted.active) {
            return i
        }
    }
    return -1
}
