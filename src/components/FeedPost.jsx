export function FeedPost({ post, index }) {
  const badge = post.badge ? (
    <span className={`post-badge ${post.badgeCls}`}>{post.badge}</span>
  ) : null;

  const statsHtml = post.ratio ? (
    <>
      <span>
        <strong>{post.reposts}</strong> reposts
      </span>
      <span>
        <strong>{post.likes}</strong> likes
      </span>
      <span className="ratio">
        <strong>{post.ratioCount}</strong> 👎 ratio&apos;d
      </span>
    </>
  ) : (
    <>
      <span>
        <strong>{post.reposts}</strong> reposts
      </span>
      <span>
        <strong>{post.likes}</strong> likes
      </span>
      <span>
        <strong>{post.comments}</strong> comments
      </span>
    </>
  );

  return (
    <div
      className="feed-post"
      style={{ animationDelay: `${0.1 + index * 0.15}s` }}
    >
      <div className="post-hdr">
        <div
          className="post-av"
          style={{ background: post.avBg, color: post.avCol }}
        >
          {post.av}
        </div>
        <div className="post-meta">
          <div className="post-name">
            {post.name} {badge}
          </div>
          <div className="post-handle">{post.handle}</div>
        </div>
      </div>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      <div className="post-stats">{statsHtml}</div>
    </div>
  );
}
