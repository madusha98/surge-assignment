export const fetchBooks = async (abortController) => {
  const url = `${process.env.REACT_APP_BEST_SELLER_API}?api-key=${process.env.REACT_APP_BEST_SELLER_API_KEY}`;

  return new Promise((resolve, reject) => {
    return fetch(url, {signal: abortController.signal}).then(
      (response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error("error"));
        }
      },
      (error) => {
        reject(new Error(error.message));
      }
    );
  });
};
