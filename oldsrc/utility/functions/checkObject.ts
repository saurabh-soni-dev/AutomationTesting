export function checkObject(newObj: object) {
  const obj = {a: 1, b: 2};
  if (obj == newObj) {
    return true;
  }
  return false;
}
