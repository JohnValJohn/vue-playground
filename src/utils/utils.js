export function getIndexOfCurrentSubtitle(time, endValues) {
  //todo: more efficient implementation
  let indexOfCurrent = null;
  for (let [index, value] of endValues.entries()) {
    if (value > time) {
      return index;
    }
  }
  return indexOfCurrent;
}
