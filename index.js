if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/use-barcode.min');
} else {
  module.exports = require('./dist/use-barcode');
}
