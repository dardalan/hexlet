import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic';
import { attach } from './type';

const defmethod = definer('SimpleCard');

const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));
