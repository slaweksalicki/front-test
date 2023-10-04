import data from "./data.json";

export const fetchPhotos = ({ perPage, page }) => {
  return new Promise((res) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageData = data.slice(start, end);
    setTimeout(() => {
      res({ images: pageData, total: data.length });
    }, 2000);
  });
};
