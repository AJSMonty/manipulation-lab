import { useEffect } from 'react';

const CHAPTERS = ['ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7'];

export function useScrollEffects() {
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      const fill = document.getElementById('global-progress-fill');
      if (fill) fill.style.width = `${pct}%`;

      let current = 0;
      CHAPTERS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) current = i;
      });

      document.querySelectorAll('.chapter-dot').forEach((d, i) => {
        d.classList.remove('active', 'done');
        if (i < current) d.classList.add('done');
        else if (i === current) d.classList.add('active');
      });

      document.querySelectorAll('.ebar-fill[data-w]').forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && bar.style.width === '0%') {
          bar.style.width = bar.getAttribute('data-w');
        }
      });

      document.querySelectorAll('.fade-up').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    const t = setTimeout(onScroll, 300);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);
}

export function scrollToChapter(n) {
  document.getElementById(`ch${n}`)?.scrollIntoView({ behavior: 'smooth' });
}
