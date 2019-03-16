import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

export const getMethod = (obj, methodName) => {
  const currentType = typeTag(obj);
  const iter = (elements) => {
    if (isEmpty(elements)) {
      return null;
    }

    const element = head(elements);
    if (currentType === typeTag(element)) {
      const method = contents(element);

      if (methodName === car(method)) {
        return cdr(method);
      }
    }

    return iter(tail(elements));
  }

  return iter(methods);
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };
