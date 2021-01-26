var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    orderPlaced: 'August 4, 2020',
    orderDelivered: 'August 8, 2020',
    returnWindowClosed: 'September 7, 2020',
    totalCost: 34.00,
    items: [
      {
        type: 'book',
        title: 'Javascript for Impatient Programmers',
        author: 'Dr. Axel Rauschmayer',
        itemCost: 31.55
      }
    ]
  },
  {
    orderNumber: '113-9984268-1280257',
    orderPlaced: 'July 19, 2020',
    orderDelivered: 'July 20, 2020',
    returnWindowClosed: 'August 19, 2020',
    totalCost: 44.53,
    items: [
      {
        type: 'book',
        title: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        itemCost: 41.33
      }
    ]
  },
  {
    orderNumber: '114-28575557-9059409',
    orderPlaced: 'July 4, 2020',
    orderDelivered: 'July 7, 2020',
    returnWindowClosed: 'August 5, 2020',
    totalCost: 17.22,
    items: [
      {
        type: 'video game accesory',
        title: 'Gamecube Controller Adapter',
        itemCost: 15.98
      }
    ]
  },
  {
    orderNumber: '113-2883177-2648248',
    orderPlaced: 'July 3, 2020',
    orderDelivered: 'July 5, 2020',
    returnWindowClosed: 'August 4, 2020',
    totalCost: 138.93,
    items: [
      {
        type: 'video game accessory',
        title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        itemCost: 94.95
      },
      {
        type: 'book',
        title: 'The Art of Sql',
        author: 'Stephane Faroult',
        itemCost: 33.99
      }
    ]
  }
];
console.log(orderHistory[3].items[1].title);
console.log(orderHistory[3].items[0].type);
console.log(orderHistory[3].items[1].itemCost);
