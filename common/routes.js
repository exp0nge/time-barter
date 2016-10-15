const simpleRoutes = {};

simpleRoutes.redirectTo = (url) =>
  (req, res, next) => {
    res.redirect(url);
  }

module.exports = simpleRoutes;
