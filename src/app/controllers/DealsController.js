import Deals from '../models/Deals';

import blingApi from '../services/blingApi';
import pipedriveApi from '../services/pipedriveApi';

class DealsController {
  async index(req, res) {
    const wonDeals = await pipedriveApi.getDeals();
    wonDeals.forEach(wonDeal => {
      const { title, status, value, won_time } = wonDeal;
      Deals.create({ title, status, value, won_time })
        .then(async deal => {
          await blingApi.SendDeal(deal);
        })
        .catch(err => {
          throw err;
        });
    });
    return res.json({
      wonDeals,
      status: wonDeals ? 'success' : 'error',
    });
  }

  async show(req, res) {
    const deals = await Deals.find({});
    if (!deals) {
      return res
        .status(404)
        .json({ message: 'The database returned no results' });
    }

    return res.json(deals);
  }
}

export default new DealsController();
