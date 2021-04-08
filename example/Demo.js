import React, { useState, useEffect, useRef } from 'react';
import useBarcode from 'use-barcode';

export default function Demo() {
  const searchRef = useRef();
  const [value, setValue] = useState('');
  const barcode = useBarcode();

  useEffect(() => {
    if (barcode) {
      console.log('barcode reader', barcode);
      setValue(barcode);
      // do your own logic
    }
  }, [barcode]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('barcode', value);
      searchRef.current.select();
      // do your own logic
    }
  };

  return (
    <div>
      <input
        ref={searchRef}
        type="text"
        value={value}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
    </div>
  );
}
