import { Story, Meta } from '@storybook/react';
import { CoreUi, CoreUiProps } from './core-ui';

export default {
  component: CoreUi,
  title: 'CoreUi',
} as Meta;

const Template: Story<CoreUiProps> = (args) => <CoreUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
