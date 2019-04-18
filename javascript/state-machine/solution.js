import Order from './Order';

export const init = items => new Order(items);

export const tryCancel = order => order.can('cancel') && order.cancel();
