export function PhoneFrame({ variant = 'social', children }) {
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
          <div className="chat-hdr-av">AI</div>
          <div>
            <div className="chat-hdr-name">Assistant</div>
            <div className="chat-hdr-sub">
              <span className="chat-hdr-dot" /> Always online · replies instantly
            </div>
          </div>
        </div>
      )}
      <div className="phone-screen">{children}</div>
    </div>
  );
}
