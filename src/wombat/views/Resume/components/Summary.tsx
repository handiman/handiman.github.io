import { Container } from '@material-ui/core';
import React from 'react';
import { SectionProps } from '../../../components';

export interface SummaryProps extends SectionProps {
  summary: Array<string>
}

export const Summary: React.FC<SummaryProps> = ({ title, summary }) => (
  <Container>
    {title && <header>{title}</header>}
    {summary.map ? summary.map((line: string, i: number) => (
      <div key={i}>{line}</div>
    )) : summary}
  </Container>
);