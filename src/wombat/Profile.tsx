import React, { createContext, useContext, useEffect, useState } from 'react';
import { useApi } from '../Api';
import { initCaps } from '../Utils';
import { Splash } from './components';

export interface ILanguage {
  name: string,
  proficiency: 'Native' | 'Fluent'
}

export enum SkillLevel {
  Novice = 0,
  Intermediate = 1,
  Advanced = 2,
  Expert = 3
}

export interface ISkill {
  name: string,
  level?: string,
  featured?: boolean,
  comments?: string
}

export interface IExperience {
  name: string,
  role: string,
  from: string,
  to: string,
  summary: string,
  skills?: Array<string>
}

export interface IRecommendation {
  text: string,
  name: string,
  link: string
}

export interface IUsp {
  title: string,
  excerpt: string,
  font: string,
  link?: {
    href: string,
    text: string
  }
}

export interface ISkillSet {
  [category: string]: Array<ISkill>
}

export interface ICertification {
  name: string,
  date: string,
  issuer: string,
  url: string,
  badgeUrl: string
}

export interface IProfile {
  summary: Array<string>,
  languages: Array<ILanguage>,
  skills: ISkillSet,
  projects: Array<IExperience>,
  employers: Array<IExperience>,
  certifications: Array<ICertification>,
  interests: Array<string>,
  recommendations: Array<IRecommendation>
}

const EmptyProfile: IProfile = {
  summary: [],
  languages: [],
  skills: {},
  projects: [],
  employers: [],
  certifications: [],
  interests: [],
  recommendations: []
}

const ProfileContext = createContext<IProfile>(EmptyProfile);

interface ProfileProviderProps {
  /** 
   * Called if an exception occurs when loading the profile. 
   */
  onError?: (e: any) => void;

  /** 
   * Called before loading starts and after loading completes whether or not an exception has been thrown. 
   */
  onLoading?: (inProgress: boolean) => void;

  children: any;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  onError = () => { },
  onLoading = () => { },
  children
}) => {
  const { getProfile } = useApi();
  const [profile, setProfile] = useState<IProfile>();

  const loadProfile = async () => {
    try {
      onLoading(true);
      var profile = await getProfile();
      setProfile({ ...profile });
    } catch (e) {
      onError(e);
    } finally {
      onLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return profile ? (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  ) : <Splash loading />;
}

const createMockProfile = (): IProfile => {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel pulvinar nunc, id ultricies arcu. Etiam consequat dolor efficitur lobortis iaculis. Duis consequat malesuada elit gravida efficitur. Integer feugiat id sapien sed porttitor. Morbi egestas feugiat libero. Praesent consequat diam odio, at ullamcorper tortor gravida eu. Morbi ultrices, lectus eu sollicitudin pretium, nunc orci accumsan tortor, sit amet efficitur sapien mauris id turpis. Maecenas luctus finibus lorem eget porta. Duis condimentum efficitur lectus viverra pulvinar. Pellentesque ac tortor posuere, interdum diam id, rutrum odio.";
  const year = (i: number) => `2${`${i + 1}`.padStart(3, '0')}`
  const title = (i: number) => initCaps(loremIpsum.split(' ').slice(i * 2, i * 2 + 2).join(' '));
  const location = (i: number) => i > 0 ? 'Roma' : '';
  const from = (i: number) => `Jan ${year(i)}`;
  const to = (i: number) => `${0 === i ? 'nunc' : 1 === i ? '' : `Dec ${year(i)}`}`;

  return {
    ...EmptyProfile,
    skills: {
      "Languages": [
        { name: 'C#', level: 'Expert' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'VB.Net', level: 'Intermediate' }
      ],
      "Frameworks": [
        { name: 'Asp.Net Core', level: 'Expert' },
        { name: 'Asp.Net', level: 'Expert' },
        { name: 'React', level: 'Advanced' },
        { name: "KnockoutJS", level: 'Intermediate' }
      ],
      "Methods": [
        { name: 'Agile Methods', level: 'Advanced' },
        { name: 'Test Driven Development', level: 'Expert' },
        { name: 'Continuous Integration', level: 'Advanced' },
        { name: 'Continuous Deployment', level: 'Advanced' }
      ],
      "Tools": [
        { name: 'Azure', level: 'Intermediate' },
        { name: 'Azure DevOps', level: 'Intermediate' },
        { name: 'Octopus Deploy', level: 'Advanced' },
        { name: 'TeamCity', level: 'Intermediate' }
      ]
    },
    summary: loremIpsum.split('. ').slice(0, 3),
    projects: Array(12).fill(0).map((_: any, i: number) => ({
      name: title(i),
      role: 'Servus',
      location: location(i),
      from: from(i),
      to: to(i),
      summary: loremIpsum.split('.').slice(2).join('.')
    })),
    employers: Array(12).fill(0).map((_: any, i: number) => ({
      name: initCaps(title(i)),
      role: 'Caesar',
      organization: "Romanus",
      summary: loremIpsum.split('.').slice(2).join('.'),
      from: from(i),
      to: to(i)
    })),
    interests: loremIpsum.split(' ').slice(0, 5),
    languages: [
      { name: 'Swedish', proficiency: 'Native' },
      { name: 'English', proficiency: 'Fluent' }
    ],
    recommendations: [
      {
        name: "Marcus Tullius Cicero",
        link: "https://en.wikipedia.org/wiki/Cicero",
        text: 'Vos iustus have ut homo amat hoc' // You gotta love this guy
      },
      {
        name: "Julius Caesar",
        link: "https://en.wikipedia.org/wiki/Julius_Caesar",
        text: 'Ipse est ita stupenda' // He is so amazing
      },
      {
        name: "Henrikus Beckerus",
        link: "https://www.henrikbecker.net",
        text: 'Vos iustus have ut pretium eius' // You just have to hire him
      }
    ]
  }
}

export const mockProfile = createMockProfile();
export const useProfile = () => useContext(ProfileContext);
