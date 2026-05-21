import { useState, useCallback } from 'react';
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
import { SITE } from './config/site';

const CHAPTER_NAV = [
  'Intro',
  'The Experiment',
  'The 4 Tricks',
  'Spot It',
  'Build It',
  'The Evidence',
  'Lesson Plan',
  'Takeaways',
];

export default function App() {
  useScrollEffects();

  const [currentScenario, setCurrentScenario] = useState('health');
  const [preScore, setPreScore] = useState(20);
  const [postScore, setPostScore] = useState(20);
  const [feedStarted, setFeedStarted] = useState(false);
  const [revealShown, setRevealShown] = useState(false);
  const [postMeterVisible, setPostMeterVisible] = useState(true);

  const [quizScores, setQuizScores] = useState({});
  const [correctTotal, setCorrectTotal] = useState(0);

  const [builder, setBuilder] = useState({
    trick: 'Fake expert',
    name: '',
    cred: '',
    claim: '',
    likes: '',
  });

  const resetExperiment = useCallback(() => {
    setFeedStarted(false);
    setRevealShown(false);
    setPostMeterVisible(true);
    setPreScore(20);
    setPostScore(20);
    scrollToChapter(1);
  }, []);

  const toggleTrick = useCallback((el) => {
    const body = el.querySelector('.tc-body');
    const toggle = el.querySelector('.tc-toggle');
    const isOpen = el.classList.contains('open');
    el.classList.toggle('open');
    body?.classList.toggle('open');
    if (toggle) {
      toggle.textContent = isOpen
        ? 'Tap to reveal the mechanism \u2193'
        : 'Tap to close \u2191';
    }
  }, []);

  const toggleEbar = useCallback((group) => {
    const wasOpen = group.classList.contains('open');
    document.querySelectorAll('.ebar-group.open').forEach((g) => g.classList.remove('open'));
    if (!wasOpen) group.classList.add('open');
  }, []);

  const onQuizAnswer = useCallback((qid, result) => {
    setQuizScores((prev) => {
      if (prev[qid] !== undefined) return prev;
      if (result === 'correct') setCorrectTotal((c) => c + 1);
      return { ...prev, [qid]: result };
    });
  }, []);

  const shareThis = useCallback(() => {
    if (navigator.clipboard && window.location.href) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert('Link copied to clipboard.'));
    }
  }, []);

  const printThis = useCallback(() => {
    const ch6 = document.getElementById('ch6');
    ch6?.scrollIntoView({ behavior: 'auto', block: 'start' });
    ch6?.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
    requestAnimationFrame(() => {
      window.print();
    });
  }, []);

  return (
    <>
      <SeoHead />

      <div id="global-progress">
        <div id="global-progress-fill" />
      </div>

      <nav id="chapter-nav" aria-label="Chapter navigation">
        {CHAPTER_NAV.map((title, i) => (
          <div
            key={title}
            className={`chapter-dot${i === 0 ? ' active' : ''}`}
            onClick={() => scrollToChapter(i)}
            onKeyDown={(e) => e.key === 'Enter' && scrollToChapter(i)}
            title={title}
            role="button"
            tabIndex={0}
          />
        ))}
      </nav>

      <main id="main-content">
      <Chapter0 scrollToChapter={scrollToChapter} />
      <Chapter1
        currentScenario={currentScenario}
        setCurrentScenario={setCurrentScenario}
        preScore={preScore}
        setPreScore={setPreScore}
        postScore={postScore}
        setPostScore={setPostScore}
        feedStarted={feedStarted}
        setFeedStarted={setFeedStarted}
        revealShown={revealShown}
        setRevealShown={setRevealShown}
        postMeterVisible={postMeterVisible}
        setPostMeterVisible={setPostMeterVisible}
        scrollToChapter={scrollToChapter}
        resetExperiment={resetExperiment}
      />
      <Chapter2 scrollToChapter={scrollToChapter} toggleTrick={toggleTrick} />
      <Chapter3
        scrollToChapter={scrollToChapter}
        quizScores={quizScores}
        onQuizAnswer={onQuizAnswer}
        correctTotal={correctTotal}
      />
      <Chapter4
        builder={builder}
        setBuilder={setBuilder}
        scrollToChapter={scrollToChapter}
      />
      <Chapter5 toggleEbar={toggleEbar} scrollToChapter={scrollToChapter} />
      <Chapter6 />
      <Chapter7 shareThis={shareThis} printThis={printThis} />
      <SeoFaq />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="site-footer-title">{SITE.name}</p>
          <p className="site-footer-copy">
            Free interactive media literacy training. Built on inoculation theory research from
            Cambridge University and the SIFT methodology from the University of Washington. All
            example posts are entirely fictional.
          </p>
        </div>
      </footer>
    </>
  );
}
