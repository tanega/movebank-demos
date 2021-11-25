import { Story, Meta } from '@storybook/react';
import { MUIButton, MUIButtonProps } from './MUIButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/styles';

export default {
  component: MUIButton,
  title: 'MUIButton',
} as Meta;

const Template: Story<MUIButtonProps> = (args) => {
  const theme = useTheme();
  console.log({ theme });
  return (
    <>
      <Box
        sx={{
          p: 8,
          backgroundColor: 'primary.main',
        }}
      />
      <Button variant="contained">Contained</Button>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
