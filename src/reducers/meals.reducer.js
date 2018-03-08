const initState = [
  {
    id: '2312asdasd123123',
    name: 'Spagetti Bolonese',
    text: 'Spagetti Bolonese jest włoską potrawą składającą się z sosu i makaronu',
    date: 1520451304861,
    ingredients: ['e04ead80-2318-11e8-b725-711261c2c67a', 'dd054ee0-2318-11e8-b725-711261c2c67a'],
  },
  {
    id: '2312asdasd1asd23123',
    name: 'Pizza',
    text: 'Spagetti Bolonese jest włoską potrawą składającą się z sosu i makaronu',
    date: 1520451304861,
    ingredients: ['e04ead80-2318-11e8-b725-711261c2c67a'],
  },
];

export default function(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
