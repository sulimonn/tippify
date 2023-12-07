const data = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      phone: '+996 770 190 302',
      password: '1234',
      position: 'moderator',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '+1234567890',
      password: '5678',
      position: 'admin',
    },
    {
      id: 3,
      name: 'Юлия Пирогова',
      phone: '+996 770 180 302',
      password: '1234',
      position: 'waiter',
      restaurant: 1,
    },
    {
      id: 4,
      name: 'Сергей Козлов',
      phone: '+996 770 190 303',
      password: '1234',
      position: 'waiter',
      restaurant: 1,
    },
  ],
  restaurants: [
    {
      id: 1,
      title: 'Ресторан Метрополь',
      location: 'Москва, ул. Лесная 123',
      admin: 2,
    },
  ],
};

export default data;
