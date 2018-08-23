import * as React from 'react';

import styles from './Issue.css';

export interface IssueProps {
  title: string;
  // IsNotRequired
  children: React.ReactNode;
  className: string;
  description: string;
}

const Issue: React.StatelessComponent<IssueProps> = ({
  title,
  // IsNotRequired
  children = null,
  className = '',
  description = '',
}) => (
  <div className={`${styles.root} ${className}`}>
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
    <div className={styles.resolver}>{children}</div>
  </div>
);

export default Issue;