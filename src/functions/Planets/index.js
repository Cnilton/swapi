import api from "../../services/api";
export const t = async () => {
  const random = Math.random();
  const number = parseInt(random > 0 ? random * 61 : 1);
  const resp = await fetch(`${api}/planets/${number}/`);
  const response = await resp.json();
  return response;
};
