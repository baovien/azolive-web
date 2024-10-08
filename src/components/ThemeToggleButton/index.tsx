import { IconMoonFilled, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("theme", "dark");
      setDark(true);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("theme", "dark");
    } else {
      document.documentElement.setAttribute("theme", "light");
    }
  }, [dark]);

  return (
    <div className="iconButton" onClick={() => setDark(!dark)} onKeyUp={() => {}}>
      {dark ? <IconMoonFilled size={36} /> : <IconSun size={36} />}
    </div>
  );
}
