//3.7
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
      name: 'Генри Сибола',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };
  
  // Пиши код ниже этой строки
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = 
    { country: 'Ямайка', 
     city: 'Кингстон' };

     // 3.8

     const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Пиши код ниже этой строки
name, 
price,
  image,
  tags,
  

  // Пиши код выше этой строки
};

// 3.9

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
 [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
  
  
  // Пиши код выше этой строки
};

//3.10

const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Пиши код ниже этой строки
  for (const key in apartment) {
   keys.push(key);
    values.push(apartment[key]);
      
  }

  //3.11

  const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
}
  // Пиши код выше этой строки
}

//3.12

function countProps(object) {
    let propCount = 0;
    // Пиши код ниже этой строки
    
    for (const key in object) 
      if (object.hasOwnProperty(key)) 
      propCount++;
      
    // Пиши код выше этой строки
    return propCount;
  }

  //3.13

  const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Пиши код ниже этой строки
  const keys = Object.keys(apartment);
  for (const key of keys){
    values.push(apartment[key]);
  }

  //3.14

  function countProps(object) {
    // Пиши код ниже этой строки
    let propCount = 0;
   const keys = Object.keys(object);
    for (const key of keys) {
        propCount += 1;
       }
  
    return propCount;
    // Пиши код выше этой строки
  }

  //3.15

  const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  // Пиши код ниже этой строки
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);

  //3.16

  function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
  const values = Object.values(salaries);
    for(const key of values) {
     totalSalary += key; 
    }
    // Пиши код выше этой строки
    return totalSalary;
  }

  //3.17

  const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const key of colors) {
    hexColors.push(key.hex);
    rgbColors.push(key.rgb);
}

//3.18

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
 for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
     }
  return null;
   // Пиши код выше этой строки
}

//3.19

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const prod = [];
  for(const product of products) {
  if (propName === 'name' ||  propName === 'price' ||  propName === 'quantity') {
      prod.push(product[propName]);
    } 
    }
      return prod;
  
  // Пиши код выше этой строки
}

//3.20 

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalSpend = 0;
  for(const product of products) {
    if(productName === product.name){
    totalSpend = product.price * product.quantity;
    } 
      
      }
  return totalSpend


  // Пиши код выше этой строки
}

//3.21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow} = highTemperatures;
// Пиши код выше этой  
const meanTemperature = (yesterday + today + tomorrow) / 3;

//3.22

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, 
       today, 
       tomorrow, 
       icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

//3.23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday: highYesterday, 
       today: highToday,
       tomorrow: highTomorrow,
       highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} =  highTemperatures;
// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//3.24

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

//3.25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
   tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},    } = forecast;

// 3.26

// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh}, tomorrow:{low: tomorrowLow, high: tomorrowHigh},} = forecast; 
  
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

//3.27

const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

//3.28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

//3.29

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {...defaultSettings, ...overrideSettings};

//3.30

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
 const newData = {}
 newData.category = 'Общее';
 newData.priority = 'Обычный';
 newData.text;
  newData.completed = false;
     return {...newData, ...data};
  // Пиши код выше этой строки
}


//3.34

const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(bookName1, bookName2) {
    return `Обновляем книгу ${bookName1} на ${bookName2}`;
  },
  
  // Пиши код выше этой строки
};

//3.35

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	 const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
	
	
    // Пиши код выше этой строки
  },
};

//3.36

const atTheOldToad = {
  // Пиши код ниже этой строки
potions: [],
  getPotions() {},
  add(potion) {},
  remove(potionName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(potionName) {},
  decreaseQuantity(potionName) {},
  // Пиши код выше этой строки
};

//3.37

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
  return this.potions;
  },
  
  // Пиши код выше этой строки
};

//3.38

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    return this.potions.push(potionName);
    // Пиши код выше этой строки
  },
};

//3.39
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    for(let i = 0; i <= this.potions.length; i++){
      if(potionName === this.potions[i]) {
        this.potions.splice(i, 1);
      }
    }
    
    
    //🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};

//3.40

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const potionsIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionsIndex, 1, newName);
    
    
    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};

//3.41

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    
    for(let i = 0; i <= this.potions.length; i++){
      if(potionName === this.potions[i].name) {
        return this.potions.splice(i, 1);
      }
    }
        
  },
  updatePotionName(oldName, newName) {
   for(let i = 0; i <= this.potions.length; i++){
      if(oldName === this.potions[i].name){
     return this.potions[i].name = newName;
      }
   }
  },
  // Пиши код выше этой строки
};




  
  
  
    
  
