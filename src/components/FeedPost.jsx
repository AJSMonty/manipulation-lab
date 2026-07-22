import { useEffect, useState } from 'react';

function parseCount(str) {
  if (!str) return 0;
  const m = String(str).replace(/,/g, '').match(/^([\d.]+)\s*([KkMm]?)$/);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  if (/k/i.test(m[2])) return Math.round(n * 1000);
  if (/m/i.test(m[2])) return Math.round(n * 1000000);
  return Math.round(n);
}

function formatCount(n) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 100000) return `${Math.round(n / 1000)}K`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export function FeedPost({ post, index, revealed, tag, engagement, onEngage }) {
  const [likes, setLikes] = useState(() => parseCount(post.likes));
  const [reposts, setReposts] = useState(() => parseCount(post.reposts));
  const liked = engagement?.liked ?? false;
  const reposted = engagement?.reposted ?? false;

  // Engagement numbers keep climbing while the user reads — part of the
  // fabrication, called out at reveal time. Freezes once revealed.
  useEffect(() => {
    if (revealed) return undefined;
    const id = setInterval(() => {
      setLikes((n) => n + Math.max(1, Math.round(n * (0.0005 + Math.random() * 0.002))));
      if (Math.random() > 0.45) {
        setReposts((n) => n + Math.max(1, Math.round(n * (0.0003 + Math.random() * 0.0012))));
      }
    }, 1600 + index * 350 + Math.random() * 900);
    return () => clearInterval(id);
  }, [revealed, index]);

  const toggleLike = () => {
    if (revealed) return;
    setLikes((n) => n + (liked ? -1 : 1));
    onEngage?.(index, 'liked', !liked);
  };

  const toggleRepost = () => {
    if (revealed) return;
    setReposts((n) => n + (reposted ? -1 : 1));
    onEngage?.(index, 'reposted', !reposted);
  };

  const badge = post.badge ? (
    <span className={`post-badge ${post.badgeCls}`}>{post.badge}</span>
  ) : null;

  return (
    <div
      className={`feed-post${revealed ? ' revealed' : ''}`}
      style={{ animationDelay: `${0.1 + index * 0.15}s` }}
    >
      {revealed && tag && (
        <div
          className={`evidence-stamp${tag.cls ? ` ${tag.cls}` : ''}`}
          style={{ animationDelay: `${0.4 + index * 0.35}s` }}
        >
          {tag.text}
        </div>
      )}
      <div className="post-hdr">
        <div className="post-av" style={{ background: post.avBg, color: post.avCol }}>
          {post.av}
        </div>
        <div className="post-meta">
          <div className="post-name">
            {post.name} {badge}
          </div>
          <div className="post-handle">{post.handle}</div>
        </div>
      </div>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
      <div className="post-actions">
        <button
          type="button"
          className={`pa-btn${reposted ? ' on-repost' : ''}`}
          onClick={toggleRepost}
          aria-pressed={reposted}
          aria-label={`Repost — ${formatCount(reposts)} reposts`}
        >
          <span className="pa-icon">⇄</span> <strong>{formatCount(reposts)}</strong>
        </button>
        <button
          type="button"
          className={`pa-btn${liked ? ' on-like' : ''}`}
          onClick={toggleLike}
          aria-pressed={liked}
          aria-label={`Like — ${formatCount(likes)} likes`}
        >
          <span className="pa-icon">{liked ? '♥' : '♡'}</span> <strong>{formatCount(likes)}</strong>
        </button>
        <span className="pa-btn pa-static">
          <span className="pa-icon">◍</span> <strong>{post.comments}</strong>
        </span>
        {post.ratio && (
          <span className="pa-btn pa-static ratio">
            <strong>{post.ratioCount}</strong> 👎 ratio&apos;d
          </span>
        )}
      </div>
    </div>
  );
}
