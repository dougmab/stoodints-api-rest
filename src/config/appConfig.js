const portInUse = process.env.PORT || 3000;

module.exports = {
  port: portInUse,
  url: `http://localhost:${portInUse}`,
};
