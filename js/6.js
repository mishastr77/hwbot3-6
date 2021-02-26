//6.1
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
   
  orderedItems.forEach(item => totalPrice += item);
    
    // Пиши код выше этой строки
    return totalPrice;
  }

  //6.2

  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  numbers.forEach(function (number,) {
  if (number > value) {
        filteredNumbers.push(number);
      }
});
    // Пиши код выше этой строки
    return filteredNumbers;
  }

  //6.3

  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  firstArray.forEach(function(elem){
    if (secondArray.includes(elem)) {
        commonElements.push(elem);
      }
    });
  
    return commonElements;
    // Пиши код выше этой строки
  }

  //6.4

  // Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  
    // Пиши код выше этой строки
    return quantity * pricePerItem;
  }

  //6.5

  const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

  //6.6

  // Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки

//6.7

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}

//6.8

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
}

//6.9

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
const newArray = [];

numbers.forEach(number => {
   if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
  newArray.push(number);
    }
  });
return newArray;
  // Пиши код выше этой строки
}

//6.10

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

//6.11

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(book => book.title);

//6.12

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => book.genres);

//6.13

// Пиши код ниже этой строки
const getUserNames = users => {
  const usersName = users.map(user => user.name);
return usersName;
  };
  // Пиши код выше этой строки

  //6.14

  // Пиши код ниже этой строки
const getUserEmails = users => {
  
  const userEmails = users.map(user => user.email);
return userEmails;
  };
  // Пиши код выше этой строки

  //6.15

  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

//6.16

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

//6.17

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

//6.18

// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
 
  const usersEyeColor = users.filter(user => user.eyeColor === color);
return usersEyeColor;
};
// Пиши код выше этой строки

//6.19

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
 
  const usersWithAge = users.filter(user => user.age >= minAge && user.age <= maxAge);
  return usersWithAge;

};
// Пиши код выше этой строки

//6.20

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  
  const usersWithFriend = users.filter(user => user.friends.includes(friendName));
  
  return usersWithFriend;
};
// Пиши код выше этой строки

//6.21

// Пиши код ниже этой строки
const getFriends = (users) => {
  const friendsList = users.flatMap(user => user.friends);
  const friends = friendsList.filter((user, index, array) => array.indexOf(user) === index);

return friends;
};

// Пиши код выше этой строки

//6.22

// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  
  const activeUsers = users.filter(user => user.isActive)
  
  return activeUsers;
};
// Пиши код выше этой строки

//6.23

// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  
  const inactiveUsers = users.filter(user => !user.isActive);
  return inactiveUsers;
};
// Пиши код выше этой строки

//6.24

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

//6.25

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  
  const userEmail = users.find((user) => user.email === email);
  return userEmail;
};
// Пиши код выше этой строки

//6.26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((first) => first % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((first) => first % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((second) => second % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((second) => second % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((third) => third % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((third) => third % 2 !== 0);

//6.27

// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  
  const allUserActive = users.every((user) => user.isActive);
  
  return allUserActive;
};
// Пиши код выше этой строки

//6.28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(first => first % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(first => first % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(second => second % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(second => second % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(third => third % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(third => third % 2 !== 0);

//6.29

// Пиши код ниже этой строки
const isAnyUserActive = users => {
  
  const anyUserActive = users.some(user => user.isActive);
  return anyUserActive;
};
// Пиши код выше этой строки

//6.30

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((acc, value) => acc + value, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

//6.31

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
 return acc + player.playtime / player.gamesPlayed;
  }, 0);

  //6.32

  // Пиши код ниже этой строки
const calculateTotalBalance = users => {
  
  const totalBalance = users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
  return totalBalance;
};
// Пиши код выше этой строки

//6.33

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  
  const totalFriendCount = users.reduce((total, user) => {
    return total + user.friends.length;
  }, 0);
  return totalFriendCount;
};
// Пиши код выше этой строки

//6.34

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

//6.35

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//6.36

const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

//6.37

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

//6.38

// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  
  const ascendingBalance = [...users].sort((a, b) => a.balance - b.balance);
  
  return ascendingBalance;
};
// Пиши код выше этой строки

//6.39

// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  
  const descendingFriendCount = [...users].sort((a, b) => b.friends.length - a.friends.length);
  
  return descendingFriendCount;
};
// Пиши код выше этой строки

//6.40

// Пиши код ниже этой строки
const sortByName = users => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
  
  };
// Пиши код выше этой строки

//6.41

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books.filter((book) => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
.sort((a, b) => a.localeCompare(b));

//6.42

// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
  return  [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name); 
};
// Пиши код выше этой строки

//6.43

// Пиши код ниже этой строки
const getSortedFriends = users => {
  return users.flatMap(user => user.friends)
  .filter((user, index, array) => array.indexOf(user) === index)
  .sort((a, b) => a.localeCompare(b));  
};
// Пиши код выше этой строки

//6.44

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return users.filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0); 
};
// Пиши код выше этой строки

