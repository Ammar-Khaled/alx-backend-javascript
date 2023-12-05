/**
 * returns a string of all the set values that start with the given `startString`.
 */
export default function cleanSet(set, startString) {
  const len = startString.length;
  if (!startString || !len) {
    return '';
  }

  const filtered = [];
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      filtered.push(element.slice(len));
    }
  });
  return filtered.join('-');
}
