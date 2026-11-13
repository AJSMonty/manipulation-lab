export function CallMessage({ msg, index, revealed }) {
  const side = msg.role === 'you' ? 'user' : msg.role === 'event' ? 'event' : 'ai';
  const delay = { animationDelay: `${0.15 + index * 0.4}s` };

  let bubble;
  if (msg.role === 'event') {
    bubble = (
      <div className={`call-event${msg.kind === 'sms' ? ' sms' : ''}`}>{msg.body}</div>
    );
  } else if (msg.kind === 'voice') {
    bubble = (
      <div className="chat-msg ai voice-note">
        <div className="vn-row">
          <span className="vn-play" aria-hidden="true">▶</span>
          <span className="vn-wave" aria-hidden="true" />
          <span className="vn-len">{msg.length}</span>
        </div>
        <div className="vn-transcript">
          <span className="vn-label">Voice note</span> &ldquo;{msg.body}&rdquo;
        </div>
      </div>
    );
  } else {
    bubble = (
      <div className={`chat-msg ${side}`}>
        {msg.kind === 'video' && <span className="vn-label">On camera</span>}
        {msg.body}
      </div>
    );
  }

  return (
    <div className={`chat-row ${side}`} style={delay}>
      {bubble}
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
