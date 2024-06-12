import axios from 'axios';
import { Payment } from '../models';

export const createPayment = async (userId: number, bookId: number, amount: number) => {
  const response = await axios.post('https://api.gocardless.com/payments', {
    amount,
    currency: 'USD',
    links: {
      mandate: 'MANDATE_ID',
    },
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.GC_ACCESS_TOKEN}`,
      'GoCardless-Version': '2015-07-06',
    },
  });

  const payment = await Payment.create({
    userId,
    bookId,
    amount,
    status: response.data.status,
  });

  return payment;
};
