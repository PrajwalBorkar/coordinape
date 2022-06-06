import { styled } from '@stitches/react';

const BalanceContainer = styled('div', {
  position: 'fixed',
  right: 50,
  // FIXME: magic numbers
  top: /*theme.custom.appHeaderHeight*/ 82 + 90,
  zIndex: 1,
  // FIXME: no idea what this is
  padding: '8px 16px', // theme.spacing(0.5, 1),
  display: 'flex',
  borderRadius: 8,
  justifyContent: 'flex-start',
  background: 'linear-gradient(0deg, #FAF1F2, #FAF1F2)',
  boxShadow: '2px 3px 6px rgba(81, 99, 105, 0.12)',
});

export default BalanceContainer;
