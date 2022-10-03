/**
 * Interface with the yo momma jokes API.
 *
 */

import { fetchOrReject } from './utils.js';

export const jokesGetAll = async () => {
  const res = await fetchOrReject(process.env.YO_MOMMAS_URL + '/jokes');
  return res.json();
};
 
export const yoMommaGetAll = async (page, formData) => {
  const query = Array.from(formData.entries())
    .map(([k, v]) => `${k}=${v}`).join('&')
     + '&page=' + page;
  const res = await fetchOrReject(`${process.env.YO_MOMMAS_URL}?${query}`);
  return res.json();
};
