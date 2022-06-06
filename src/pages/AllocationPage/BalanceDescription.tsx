import { styled } from '@stitches/react';

const BalanceDescription = styled('p', {
  margin: 0,
  fontSize: 20,
  fontWeight: 300,
  // FIXME: Need to figure out colors
  // color: theme.colors.text,
  '&:first-of-type': {
    fontWeight: 500,
    // FIXME: Need to figure out colors
    // color: theme.colors.alert,
  },
});

export default BalanceDescription;
