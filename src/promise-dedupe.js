const requestById = {};

// responses of outdated requests will be pending FOREVER!
export default async (id, promise) => {
  requestById[id] = promise;
  const check = (value, shouldResolve = true) =>
    new Promise((resolve, reject) => {
      if (requestById[id] === promise) {
        if (shouldResolve) {
          resolve(value);
        } else {
          reject(value);
        }
      }
    });

  return promise.then(r => check(r, true)).catch(r => check(r, false));
};
