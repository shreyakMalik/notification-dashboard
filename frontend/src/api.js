const BASE_URL = 'http://localhost:5000';

export const fetchData = async (type) => {
  const res = await fetch(`${BASE_URL}/${type}`);
  return res.json();
};

export const postData = async (type, data) => {
  const res = await fetch(`${BASE_URL}/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return res.json();
};