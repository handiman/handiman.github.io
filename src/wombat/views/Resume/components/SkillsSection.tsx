import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { SectionProps } from '../../../components';
import { SkillCategory } from '.';
import { ISkillSet } from '../../../Profile';

export interface SkillsSectionProps extends SectionProps {
  skills: ISkillSet
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  return (
    <Container>
      {title && <header>{title}</header>}
      <Grid container spacing={4}>
        {Object.keys(skills).map((category: string, i: number) => (
          <Grid key={i} item xs sm md lg>
            <SkillCategory category={category} skills={skills[category]} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}