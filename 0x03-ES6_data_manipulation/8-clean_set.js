/**
 * returns a string of all the set values that start with the given `startString`.
 */
export default function cleanSet(set, startString) {
  const result = '';

  if (!startString || !startString.length) {
    return result;
  }

  const filtered = [];
  const len = startString.length;
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      filtered.push(element.slice(len));
    }
  });
  return filtered.join('-');
}
