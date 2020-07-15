import axios from 'axios';

const { PIPEDRIVE_APITOKEN, PIPEDRIVE_URL } = process.env;

const getDeals = () => {
  const config = {
    url: `/deals?status=won&start=0&api_token=${PIPEDRIVE_APITOKEN}`,
    baseURL: `${PIPEDRIVE_URL}`,
    method: 'get',
  };

  return axios(config)
    .then(resp => {
      const wonDeals = resp.data.data.map(deal => {
        const { id, title, status, value, won_time } = deal;
        const data = { id, title, status, value, won_time };
        return data;
      });
      return wonDeals;
    })
    .catch(err => {
      throw err;
    });
};

export default {
  getDeals,
};
