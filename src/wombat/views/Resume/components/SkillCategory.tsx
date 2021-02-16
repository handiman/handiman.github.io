import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, Link, Theme, Tooltip, Typography, useMediaQuery, withStyles, WithStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { About } from '../../../components';
import { ISkill, SkillLevel } from '../../../Profile';
import { Colors } from '../../../theme';

const SkillCategoryStyles = (theme: Theme) => createStyles({
  root: {
    '& .fas, .far': {
      fontSize: theme.typography.fontSize - 3,
      marginRight: theme.spacing(.25)
    },
    '& .fas': {
      color: Colors.LightGreen
    },
    '& .far': {
      color: Colors.LightGrey
    }
  }
});

export interface SkillCategoryProps extends WithStyles<typeof SkillCategoryStyles> {
  category: string,
  skills: Array<ISkill>
}

const SkillCategoryComponent: React.FC<SkillCategoryProps> = ({ category, skills, classes }) => {
  const FilledStar = 'fas fa-circle';
  const OutlinedStar = 'far fa-circle';
  const skillLevel = (level?: string) => level ? SkillLevel[level as any] : SkillLevel.Novice;

  const star = (requiredLevel: SkillLevel, skill: ISkill) => {
    return skillLevel(skill.level) >= requiredLevel
      ? FilledStar
      : OutlinedStar
  }

  const compareSkills = (a: ISkill, b: ISkill) => {
    const compareBool = (a?: boolean, b?: boolean) => {
      if (a && !b) {
        return -1;
      } else if (b && !a) {
        return 1;
      } else {
        return 0;
      }
    }

    const compareLevel = (a?: any, b?: any) => {
      const levelA = skillLevel(a);
      const levelB = skillLevel(b);
      if (levelA > levelB) {
        return -1;
      } else if (levelA < levelB) {
        return 1;
      } else {
        return 0;
      }
    }

    const featured = compareBool(a.featured, b.featured);
    if (0 === featured) {
      return compareLevel(a.level, b.level);
    }

    return featured;
  }

  const AboutBox: React.FC<{ skill: ISkill }> = ({ skill }) => {
    const [open, setOpen] = useState(false);
    const show = () => setOpen(true);
    const hide = () => setOpen(false);

    if (useMediaQuery('screen')) {
      return (
        <div>
          <span className="noPrint" style={{ cursor: 'pointer' }} title={`This site uses ${skill.name}. Click for more info.`} onClick={show}>{skill.name}*</span>
          <About open={open} onClose={hide} />
        </div>
      );
    }
    return <div>{skill.name}</div>;
  }

  return (
    <div className={classes.root}>
      <Typography variant="caption">{category}</Typography>
      <ul>
        {skills.sort(compareSkills).map((skill: ISkill, i: number) => (
          <li key={i} title={skill.level ? `${skill.name} - ${skill.level}` : ''}>
            {(skill.name === 'React' || skill.name === 'TypeScript' || skill.name === 'HTML & CSS') ? <AboutBox skill={skill} /> : <div>{skill.name}</div>}
            <div>
              <span className={FilledStar} />
              <span className={FilledStar} />
              <span className={`${star(SkillLevel.Intermediate, skill)}`} />
              <span className={`${star(SkillLevel.Advanced, skill)}`} />
              <span className={`${star(SkillLevel.Expert, skill)}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const SkillCategory = withStyles(SkillCategoryStyles)(SkillCategoryComponent);