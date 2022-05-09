import React from 'react';
import { useFormik } from 'formik';
import { imageSearchFormSchema } from 'modules/media/validation/image-search-form-schema';
import { Button, DateField, ErrorText, Select, TextField } from '@cruk/cruk-react-components';
import { useImageSearch } from 'modules/media/context';
import { MediaSearchParams } from 'modules/media/types/image-search-params';
import { MediaType } from 'modules/media/types/media-type';
import moment from 'moment';
import styled from 'styled-components';

const FormField = styled.div`
  margin-bottom: 20px;
`;

export const ImageSearchForm: React.FC<{}> = () => {

  const { handleSearch } = useImageSearch();

  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      keywords: ''
    },
    validationSchema: imageSearchFormSchema,
    onSubmit: (values: Partial<MediaSearchParams>) => {
      return handleSearch(values as MediaSearchParams);
    }
  });

  const renderError = (text: string) => (
    <ErrorText>
      {text}
    </ErrorText>
  );

  return (
    <React.Fragment>
      <FormField>
        <TextField
          label='Keywords'
          type='text'
          name='keywords'
          value={form.values.keywords}
          onChange={form.handleChange}
          required
        />
        {
          form.errors.keywords &&
          form.touched.keywords &&
          renderError(form.errors.keywords)
        }
      </FormField>
      <FormField>
        <Select
          label='Media Type'
          name='mediaType'
          value={form.values.mediaType}
          onChange={(e: React.ChangeEvent) => {
            form.setFieldTouched('mediaType');
            form.handleChange(e);
          }}
          required>
          <option></option>
          {
            Object.entries(MediaType).map(([key, value], index) => (
              <option key={`media-type-option-${key}`} value={value}>
                { key }
              </option>
            ))
          }
        </Select>
        {
          form.errors.mediaType &&
          form.touched.mediaType &&
          renderError(form.errors.mediaType)
        }
      </FormField>
      <FormField>
        <TextField
          label="Year Start"
          type="number"
          name={'yearStart'}
          inputMode="numeric"
          value={form.values.yearStart}
          onChange={form.handleChange}
        />
        {
          form.errors.yearStart &&
          form.touched.yearStart &&
          renderError(form.errors.yearStart)
        }
      </FormField>
      <FormField>
        <Button
          type="submit"
          onClick={(): void => {
            form.submitForm();
          }}
          disabled={form.isSubmitting}>
          {form.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </FormField>
    </React.Fragment>
  );
};