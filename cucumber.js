const common = `
  --require steps/world.js 
  --require steps/**/*.steps.js
  `;
module.exports = {
  default: `${common} features/**/*.feature`,
};
module.exports = { default: `${common} features/**/*.feature --publish-quiet` } 