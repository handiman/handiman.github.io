import React, { useEffect, useState } from 'react';
import { Keys } from '../Types';
import { ContactFormDialog, Footer, Menu, SectionIndicator, SectionNavigator } from '../components';
import { useArray } from '../../Utils';
import { ICertification } from '../Profile';

interface DefaultLayoutProps {
  children?: any,
  showContactForm?: boolean,
  certifications? : Array<ICertification>
}

const DefaultLayoutComponent: React.FC<DefaultLayoutProps> = ({ children, showContactForm = false, certifications = [] }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(showContactForm);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const sections = useArray(children);

  const onShowContactForm = () => setIsContactFormOpen(true);
  const onHideContactForm = () => setIsContactFormOpen(false);

  /** Used to detect wich section is visible in the viewport a the moment */
  const observer = new IntersectionObserver((entries: any, _: any) => {
    entries.forEach((e: any) => {
      if (e.intersectionRatio > .25) {
        setVisibleIndex(parseInt(e.target.id.substring(e.target.id.indexOf('-') + 1)));
      }
    });
  }, { root: null, threshold: [.25] });

  const observe = (_: any, i: number) => {
    const element = document.getElementById(`section-${i}`);
    if (element) {
      observer.observe(element);
    }
  }

  const unobserve = (_: any, i: number) => {
    const element = document.getElementById(`section-${i}`);
    if (element) {
      observer.unobserve(element);
    }
  }

  const onSelect = (i: number) => {
    setVisibleIndex(i);
    document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const onPrev = () => onSelect(Math.max(visibleIndex - 1, 0));
  const onNext = () => onSelect(Math.min(visibleIndex + 1, sections.length - 1));

  const onKeyDown = (event: { keyCode: number }) => {
    if (event.keyCode === Keys.Left) {
      onPrev();
    } else if (event.keyCode === Keys.Right) {
      onNext();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    sections.forEach(observe);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      sections.forEach(unobserve);
    }
  }, []);

  return (
    <React.Fragment>
      {sections.map((section: any, i: number) => (
        <section key={`section-${i}`} id={`section-${i}`}>
          {section}
        </section>
      ))}
      <Footer children={sections} certifications={certifications} onSelect={onSelect} />
      <ContactFormDialog title="Contact Me" open={isContactFormOpen} onClose={onHideContactForm} />
      <Menu showContactForm={onShowContactForm} />
      {(sections.length > 1) && (
        <React.Fragment>
          <SectionIndicator onSelect={onSelect} visibleIndex={visibleIndex} children={sections} />
          <SectionNavigator onPrev={onPrev} onNext={onNext} visibleIndex={visibleIndex} children={sections} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export const DefaultLayout = DefaultLayoutComponent;