export function ChatMessage({ msg, index, revealed }) {
  return (
    <div
      className={`chat-row ${msg.role}`}
      style={{ animationDelay: `${0.15 + index * 0.4}s` }}
    >
      <div
        className={`chat-msg ${msg.role}`}
        dangerouslySetInnerHTML={{ __html: msg.body }}
      />
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
