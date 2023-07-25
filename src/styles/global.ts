import { css } from '@emotion/react';

export const global = css`
  /* Remove Arrows/Spinners Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Remove Arrows/Spinners Firefox */
  input[type='number'] {
    appearance: textfield;
  }

  button {
    cursor: pointer;
  }
`;
