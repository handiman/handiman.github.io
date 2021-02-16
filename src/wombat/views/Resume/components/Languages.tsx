import { Container, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { SectionProps } from '../../../components';
import { ILanguage } from '../../../Profile';

const styles = (theme: Theme) => createStyles({
  root: {
    '& li': {
      display: 'table',
      '& > div': {
        display: 'table-cell',
        '&:first-child': {
          width: theme.spacing('Swedish'.length + 1)
        }
      }
    }
  }
});

export interface LanguageSectionProps extends SectionProps, WithStyles<typeof styles> {
  languages: Array<ILanguage>
}

const LanguageSectionComponent: React.FC<LanguageSectionProps> = ({ title, classes, languages }) => {
  return (
    <Container className={classes.root}>
      {title && <header>{title}</header>}
      <ul>
        {languages.map((language: ILanguage, i: number) => (
          <li key={i}>
            <div>{language.name}</div>
            <div>{language.proficiency}</div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export const LanguageSection = withStyles(styles)(LanguageSectionComponent);