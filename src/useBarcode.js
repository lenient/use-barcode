import { useState, useEffect, useRef } from 'react';
import { isInput } from './utils';

const initialState = {
  code: '',
};

export function useBarcode() {
  const info = useRef({ ...initialState });
  const [barcode, setBarcode] = useState('');
  const initScannerDetection = () => {
    info.current = { ...initialState };
  };

  useEffect(() => {
    let timerId;

    const handleKeyPress = (e) => {
      const { target, key } = e;
      if (target instanceof window.HTMLElement && isInput(target)) {
        return;
      }

      clearTimeout(timerId);
      if (info.current.code && key === 'Enter') {
        setBarcode(info.current.code);
        initScannerDetection();
        setBarcode('');
      } else {
        info.current.code += key;
        timerId = setTimeout(() => {
          initScannerDetection();
        }, 80);
      }
    };
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      clearTimeout(timerId);
    };
  }, []);

  return barcode;
}
