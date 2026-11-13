export function ChatMessage({ msg, index, revealed }) {
  return (
    <div
      className={`chat-row ${msg.role}`}
      style={{ animationDelay: `${0.15 + index * 0.4}s` }}
    >
      {msg.memory && (
        <div className="chat-memory">
          <span className="vn-label">Memory</span> {msg.memory}
        </div>
      )}
      <div className={`chat-msg ${msg.role}`}>
        <span dangerouslySetInnerHTML={{ __html: msg.body }} />
        {msg.sources && (
          <div className="chat-sources">
            <span className="vn-label">Sources</span>
            {msg.sources.map((s) => (
              <span key={s} className="chat-source">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
      {revealed && msg.tag && (
        <div
          className={`chat-tag${msg.tag.cls ? ` ${msg.tag.cls}` : ''}`}
          style={{ animationDelay: `${0.3 + index * 0.3}s` }}
        >
          {msg.tag.text}
        </div>
      )}
    </div>
  );
}
