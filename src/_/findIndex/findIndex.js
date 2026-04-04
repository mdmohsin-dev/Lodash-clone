export default function findIndex(users, predicted) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].user == predicted.user && users[i].active == predicted.active) {
            return i
        }
    }
    return -1
}