# use-barcode

## Installation

```
yarn add use-barcode
# or
npm install use-barcode
```

## Usage

```js
import useBarcode from 'react-barcode';

useEffect(() => {
  if (barcode) {
    // do your own logic
  }
}, [barcode]);
```

The above `useEffect` will be performed after scanned anywhere on the page, except for `input`, `textarea` and any elements with `contenteditable` attribute.

Refer to [Demo.js](example/Demo.js) for more details.

## Reference

- https://github.com/kciter/react-barcode
