// utils.js
export const findCharStyle = (content, startSymbol, endSymbol) => {
  const listContentChars = [];
  const listStyleChars = [];
  content.split(startSymbol).forEach((i) => {
    const arr = i.split(endSymbol);
    listContentChars.push(...arr);
  });
  listContentChars.map((i) => {
    const index = content.indexOf(i);
    if (index >= content.length) {
      return false;
    }
    const endSymbolIndex = content.indexOf(endSymbol, index);
    if (endSymbolIndex - index === i.length) {
      listStyleChars.push(i);
      return true;
    }
    return false;
  });
  return { listContentChars, listStyleChars };
};
