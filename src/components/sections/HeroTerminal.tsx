import { useEffect, useState } from "react";

const LINES = [
  { type: "cmd",    text: "lyrnique init project --scope=validated" },
  { type: "out",   text: "✓ Requirements mapped" },
  { type: "out",   text: "✓ Architecture designed" },
  { type: "out",   text: "✓ API contracts defined" },
  { type: "cmd",   text: "lyrnique build --env=production" },
  { type: "out",   text: "✓ TypeScript strict — 0 errors" },
  { type: "out",   text: "✓ Test coverage — 94%" },
  { type: "out",   text: "✓ Security headers — active" },
  { type: "cmd",   text: "lyrnique deploy --target=prod" },
  { type: "success", text: "🚀  Live in 18 days. On scope. On budget." },
];

const CHAR_DELAY = 28;
const LINE_PAUSE = 320;
const RESTART_PAUSE = 3200;

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<{ text: string; type: string; done: boolean }[]>([]);
  const [typing, setTyping] = useState({ lineIdx: 0, charIdx: 0 });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const { lineIdx, charIdx } = typing;

      if (lineIdx >= LINES.length) {
        // All done — restart after pause
        timer = setTimeout(() => {
          setVisibleLines([]);
          setTyping({ lineIdx: 0, charIdx: 0 });
        }, RESTART_PAUSE);
        return;
      }

      const line = LINES[lineIdx];
      const isOutput = line.type !== "cmd";

      if (isOutput) {
        // Output lines appear instantly
        setVisibleLines((prev) => {
          const updated = [...prev];
          updated[lineIdx] = { ...line, done: true };
          return updated;
        });
        timer = setTimeout(() => {
          setTyping({ lineIdx: lineIdx + 1, charIdx: 0 });
        }, LINE_PAUSE);
        return;
      }

      // Command lines type character by character
      const partial = line.text.slice(0, charIdx + 1);
      setVisibleLines((prev) => {
        const updated = [...prev];
        updated[lineIdx] = { ...line, text: partial, done: charIdx >= line.text.length - 1 };
        return updated;
      });

      if (charIdx >= line.text.length - 1) {
        timer = setTimeout(() => {
          setTyping({ lineIdx: lineIdx + 1, charIdx: 0 });
        }, LINE_PAUSE);
      } else {
        timer = setTimeout(() => {
          setTyping({ lineIdx, charIdx: charIdx + 1 });
        }, CHAR_DELAY);
      }
    }

    tick();
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typing]);

  return (
    <div
      style={{
        background: "rgba(8,10,15,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(99,102,241,0.2)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow:
          "0 0 40px rgba(99,102,241,0.12), 0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "12px 16px",
          borderBottom: "1px solid rgba(99,102,241,0.12)",
          background: "rgba(99,102,241,0.05)",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", opacity: 0.8 }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", opacity: 0.8 }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", opacity: 0.8 }} />
        <span
          style={{
            marginLeft: 8,
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "var(--text3)",
            letterSpacing: "0.06em",
          }}
        >
          lyrnique-cli — build session
        </span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: "16px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        {visibleLines.map((l, i) => {
          if (!l) return null;
          if (l.type === "cmd") {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 12, fontWeight: 600 }}>❯</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text)", letterSpacing: "0.02em" }}>
                  {l.text}
                  {!l.done && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 7,
                        height: 13,
                        background: "var(--text2)",
                        marginLeft: 2,
                        verticalAlign: "middle",
                        animation: "cur 1s infinite",
                      }}
                    />
                  )}
                </span>
              </div>
            );
          }
          if (l.type === "success") {
            return (
              <div key={i} style={{ fontFamily: "var(--mono)", fontSize: 12, marginTop: 4 }}>
                <span className="gt3" style={{ fontWeight: 700 }}>{l.text}</span>
              </div>
            );
          }
          return (
            <div
              key={i}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "#22c55e",
                paddingLeft: 16,
                letterSpacing: "0.02em",
              }}
            >
              {l.text}
            </div>
          );
        })}

        {/* Idle cursor when done or waiting */}
        {visibleLines.length === 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="gt3" style={{ fontFamily: "var(--mono)", fontSize: 12, fontWeight: 600 }}>❯</span>
            <span
              style={{
                display: "inline-block",
                width: 7,
                height: 13,
                background: "var(--text2)",
                verticalAlign: "middle",
                animation: "cur 1s infinite",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
