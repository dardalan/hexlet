import uuid from 'uuid-js'; // eslint-disable-line
import ApplicationEntity from './ApplicationEntity';

export default class CapitalTransaction extends ApplicationEntity {
  static types = ['income', 'loss'];

  static constraints = {
    ticket: {
      presence: true,
    },
    cost: {
      presence: true,
      numericality: true,
    },
    type: {
      presence: true,
      inclusion: CapitalTransaction.types,
    },
  };

  constructor(ticket, type) {
    super();
    this.ticket = ticket;
    this.type = type;
    this.createdAt = new Date();

    switch (type) { // eslint-disable-line
      case 'income':
        this.cost = ticket.cost;
        break;
      case 'loss':
        this.cost = -ticket.cost;
        break;
    }
  }
}
