export const isContentEditable = (element) => {
  if (typeof element.getAttribute !== 'function') {
    return false;
  }

  return !!element.getAttribute('contenteditable');
};

export const isInput = (element) => {
  if (!element) {
    return false;
  }

  const { tagName } = element;
  const editable = isContentEditable(element);

  return tagName === 'UI5-INPUT' || tagName === 'INPUT' || tagName === 'TEXTAREA' || editable;
};
