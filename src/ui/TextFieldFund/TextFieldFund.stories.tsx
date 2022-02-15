import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { TextFieldFund } from './TextFieldFund';

export default {
  title: 'Design System/Components/TextFieldFund',
  component: TextFieldFund,
  decorators: [withDesign],
} as ComponentMeta<typeof TextFieldFund>;

const Template: ComponentStory<typeof TextFieldFund> = args => (
  <TextFieldFund {...args}>{args.children}</TextFieldFund>
);

export const SingleTextField = Template.bind({});

SingleTextField.args = {};

SingleTextField.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/wXF7xGVv1j2SqwWfgbamS8/Coordinape-Design-v8?node-id=233%3A425',
  },
};