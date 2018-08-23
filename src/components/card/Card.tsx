import * as React from 'react';

import styles from './Card.css';

export interface CardProps {
  children: React.ReactNode;
  // IsNotRequired
  className?: string;
  style?: {
    color?: string,
    backgroundColor?: string,
    padding?: string,
    margin?: string,
  };
}

const Card: React.StatelessComponent<CardProps> = ({
  className,
  children,
  style,
}) => (
  <div className={`${styles.card} ${className}`} style={style}>
    {children}
  </div>
);

Card.defaultProps = {
  className: '',
  style: {
    color: '',
    backgroundColor: '',
    padding: '',
    margin: '',
  },
};

export default Card;