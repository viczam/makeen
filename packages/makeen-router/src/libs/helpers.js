export const wrapHandler = handler => (req, res, next) =>
  Promise.resolve(handler(req, res, next))
    .then(response => {
      if (typeof response !== 'undefined') {
        res.json(response);
      }
    })
    .catch(next);

export { toBSON, idPattern, idValidator } from 'makeen-mongodb/build/libs/helpers';
