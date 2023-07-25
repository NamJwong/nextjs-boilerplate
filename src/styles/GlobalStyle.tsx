import { css, Global } from '@emotion/react';

import { global } from './global';
import { reset } from './reset';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${reset}
        ${global}
      `}
    />
  );
}
