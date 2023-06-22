const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34553245-0215fc3b52d59e1d2b85f0996';
const getImage = searchImage => {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchImage}&image_type=photo&page=1&per_page=12`
  );
};
export default getImage;
