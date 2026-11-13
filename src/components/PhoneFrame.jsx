export function PhoneFrame({ variant = 'social', header, children }) {
  const chatHeader =
    variant === 'ai'
      ? { av: 'AI', name: 'Assistant', sub: 'Always on · remembers your chats', dot: true }
      : header;

  return (
    <div className={`phone-frame phone-${variant}`}>
      <div className="phone-status">
        <span>9:41</span>
        <span className="phone-status-right">
          <span className="ps-bars">▂▄▆█</span> 5G <span className="ps-batt">▐▉</span>
        </span>
      </div>
      {variant === 'social' ? (
        <div className="phone-tabs">
          <span>Following</span>
          <span className="active">For You</span>
        </div>
      ) : (
        <div className="phone-chat-hdr">
          <div className="chat-hdr-av">{chatHeader.av}</div>
          <div>
            <div className="chat-hdr-name">{chatHeader.name}</div>
            <div className="chat-hdr-sub">
              {chatHeader.dot && <span className="chat-hdr-dot" />} {chatHeader.sub}
            </div>
          </div>
        </div>
      )}
      <div className="phone-screen">{children}</div>
    </div>
  );
}
