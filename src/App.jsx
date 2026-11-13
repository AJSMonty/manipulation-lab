import { useCallback } from 'react';
import './App.css';
import { useScrollEffects, scrollToChapter } from './hooks/useScrollEffects';
import { SeoHead } from './components/SeoHead';
import { SeoFaq } from './components/SeoFaq';
import { Chapter0 } from './components/Chapter0';
import { Chapter1 } from './components/Chapter1';
import { Chapter2 } from './components/Chapter2';
import { Chapter3 } from './components/Chapter3';
import { Chapter4 } from './components/Chapter4';
import { Chapter5 } from './components/Chapter5';
import { Chapter6 } from './components/Chapter6';
import { Chapter7 } from './components/Chapter7';
import { Chapter8 } from './components/Chapter8';
import { SITE } from './config/site';

const CHAPTER_NAV = [
  'Intro',
  'The Experiment',
  'The 5 Tricks',
  'Impersonation',
  'Spot It',
  'Build It',
  'The Evidence',
  'Teach It',
  'Takeaways',
];

export default function App() {
  useScrollEffects();

  // Prints one part of Chapter 7: the lesson plan, or the one-page family sheet.
  const printThis = useCallback((what = 'lesson') => {
    const ch = document.getElementById('ch7');
    document.body.dataset.print = what;
    ch?.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
    const clear = () => {
      delete document.body.dataset.print;
      window.removeEventListener('afterprint', clear);
    };
    window.addEventListener('afterprint', clear);
    requestAnimationFrame(() => window.print());
  }, []);

  return (
    <>
      <SeoHead />

      <div id="global-progress">
        <div id="global-progress-fill" />
      </div>

      <nav id="chapter-nav" aria-label="Chapter navigation">
        {CHAPTER_NAV.map((title, i) => (
          <button
            key={title}
            type="button"
            className={`chapter-dot${i === 0 ? ' active' : ''}`}
            onClick={() => scrollToChapter(i)}
            title={title}
            aria-label={title}
            data-label={title}
          />
        ))}
      </nav>

      <main id="main-content">
        <Chapter0 scrollToChapter={scrollToChapter} />
        <Chapter1 scrollToChapter={scrollToChapter} />
        <Chapter2 scrollToChapter={scrollToChapter} />
        <Chapter3 scrollToChapter={scrollToChapter} />
        <Chapter4 scrollToChapter={scrollToChapter} />
        <Chapter5 scrollToChapter={scrollToChapter} />
        <Chapter6 scrollToChapter={scrollToChapter} />
        <Chapter7 printThis={printThis} />
        <Chapter8 printThis={printThis} />
        <SeoFaq />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="site-footer-title">{SITE.name}</p>
          <p className="site-footer-copy">
            Free to use, with no sign-up and nothing stored. Every post, chat and call on this
            page is fictional. The research behind it is listed in Chapter 6.
          </p>
        </div>
      </footer>
    </>
  );
}
