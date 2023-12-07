let user = {
  id: 2,
  name: 'Jane Doe',
  phone: '+1234567890',
  password: '5678',
  position: 'admin',
};

const setUser = (newValue) => {
  user = newValue;
};

export { setUser, user };
