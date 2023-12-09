const data = {
  users: [
    {
      id: 1,
      name: 'Иван Иванов',
      phone: '+996 770 190 302',
      password: '1234',
      position: 'moderator',
      position_title: 'Модератор',
    },
    {
      id: 2,
      name: 'Николай Николаев ',
      phone: '+1234567890',
      password: '5678',
      position: 'admin',
      position_title: 'Админстратор',
    },
    {
      id: 3,
      name: 'Юлия Пирогова',
      phone: '+996 770 180 302',
      password: '1234',
      position: 'waiter',
      position_title: 'Официант',
      restaurant: 1,
    },
    {
      id: 4,
      name: 'Сергей Козлов',
      phone: '+996 770 190 303',
      position_title: 'Официант',
      password: '1234',
      position: 'waiter',
      restaurant: 1,
    },
    {
      id: 5,
      name: 'Петр Петров',
      phone: '+996',
      position_title: 'Официант',
      password: '1234',
      position: 'waiter',
      restaurant: 3,
    },
  ],
  restaurants: [
    {
      id: 1,
      title: 'Ресторан Метрополь',
      location: 'Москва, ул. Лесная 123',
      admin: 2,
    },
    {
      id: 3,
      title: 'Ресторан Мертвые души',
      location: 'Москва, ул. Лесная 123',
      admin: 2,
    },
  ],
  cards: [
    {
      id: 3,
      holder: 2,
      number: '0192 7497 5409 1286',
      valid: '11/23',
      cvv: '123',
    },
    {
      id: 34,
      holder: 5,
      number: '0192 7497 5409 1286',
      valid: '11/23',
      cvv: '123',
    },
  ],
};

export default data;
