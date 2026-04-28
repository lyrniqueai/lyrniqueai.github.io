import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  /** Size of the icon in pixels */
  size?: number;
  /** Extra CSS class on the wrapper button */
  className?: string;
}

export default function ThemeToggle({ size = 16, className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 34,
        height: 34,
        borderRadius: 8,
        border: "1px solid var(--b2)",
        background: "transparent",
        color: "var(--text2)",
        cursor: "pointer",
        transition: "border-color 0.2s, color 0.2s, background 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--text3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text2)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--b2)";
      }}
    >
      {isDark
        ? <Sun style={{ width: size, height: size }} />
        : <Moon style={{ width: size, height: size }} />
      }
    </button>
  );
}
