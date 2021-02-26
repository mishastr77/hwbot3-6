import users from './index.js'

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getNamesSortedByFriendsCount = usersArr => usersArr
.sort((a, b) => a.friends.length - b.friends.length)
.map((user) => user.name)
console.log(getNamesSortedByFriendsCount(users))