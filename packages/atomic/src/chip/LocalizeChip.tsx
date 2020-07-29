import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { lighten } from 'polished';

import {
  LocalizeThemeProps,
  LocalizeProps,
  LocalizeSize,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Button';
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

export interface LocalizeChipProps extends LocalizeProps, SpanProps {
  size?: LocalizeSize;

  borderRadius?: string;
}

const getSizeStyle = (size?: LocalizeSize) => {
  switch (size) {
    case 'xl':
      return '1.4rem 2rem';
    case 'lg':
      return '1.2rem 1.8rem';
    case 'md':
      return '1rem 1.4rem';
    case 'sm':
      return '0.8rem 1rem';
    default:
      return '0.6rem 0.8rem';
  }
};

const StyledLocalizeChip = styled.span<LocalizeChipProps, LocalizeThemeProps>(
  ({ theme, size = 'md', bgColor = 'primary', borderRadius }) => {
    const fonts = theme.fonts.font1;
    const backgroundColor = theme.colors[bgColor];
    const color = theme.colors.neutral1;

    return {
      ...fonts,
      display: 'inline-block',
      height: 'auto',
      padding: getSizeStyle(size),
      backgroundColor,
      border: `1px solid transparent`,
      borderRadius,
      color,

      textAlign: 'center',
      verticalAlign: 'middle',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: lighten(0.1, backgroundColor),
        borderColor: backgroundColor,
      },

      '&:disabled': {
        backgroundColor: theme.colors.neutral4,
        color: theme.colors.neutral3,
        cursor: 'not-allowed',
      },
    };
  },
);

const LocalizeChip: React.FC<LocalizeChipProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <StyledLocalizeChip
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
    >
      {children}
    </StyledLocalizeChip>
  );
};

export { LocalizeChip };
export default LocalizeChip;
