import React from 'react';

import { DateType } from '@date-io/type';

import { TimePicker } from '@material-ui/pickers';

import { ApeTextField } from 'components';

export const FormTimePicker = ({
  onChange,
  ...props
}: Omit<React.ComponentProps<typeof TimePicker>, 'onChange'> & {
  onChange: (newValue: string) => void;
  errorText?: string;
}) => {
  const handleChange = (date: DateType | null, newValue?: string | null) => {
    onChange(date?.toISOString() ?? '');
  };

  return (
    <TimePicker
      {...props}
      onChange={handleChange}
      TextFieldComponent={ApeTextField}
    />
  );
};