import _ from 'core/utils/deepdash';

export const pushNewItemToFieldArray = (
  item: any,
  fieldArray: any[],
  setField: (newValues: any[]) => void
): void => {
  const newValues = _.clone(fieldArray);

  newValues.push(item);

  setField(newValues);
};

export const removeItemFromFieldArray = (
  index: number,
  fieldArray: any[],
  setField: (newValues: any[]) => void
): void => {
  const newValues = _.clone(fieldArray);
  _.pullAt(newValues, index);
  setField(newValues);
};