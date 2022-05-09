import moment from 'moment';
import * as yup from 'yup';

export const imageSearchFormSchema = yup.object().shape({
  keywords: yup.string()
    .required('Please enter keywords to search.'),
  mediaType: yup.string()
    .required('Please select a media type.'),
  yearStart: yup.number()
    .test('is-valid-year', 'Please enter a valid year', (value?: number) => {
      if (!value) return true;

      const firstDigit = value!.toString().slice(0, 1);

      if (parseInt(firstDigit, 2) === 0) return false;

      if (value.toString().length > 4) return false;

      return true;
    })
    .test('is-in-past', 'Year start cannot be in the future.', (value?: number) => {
      if (!value) return true;

      if (value > moment().year()) return false;

      return true;
    })
});