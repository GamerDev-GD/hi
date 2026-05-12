import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";
import { ADMIN_GATE_KEY } from "../constants";
import styles from "./Layout.module.css";
const CLICK_WINDOW_MS = 2800;

export function Layout() {
  const navigate = useNavigate();
  const clicks = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetClicks = useCallback(() => {
    clicks.current = 0;
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }, []);

  const onLogoClick = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    clicks.current += 1;
    timer.current = setTimeout(resetClicks, CLICK_WINDOW_MS);

    if (clicks.current >= 4) {
      resetClicks();
      sessionStorage.setItem(ADMIN_GATE_KEY, "1");
      navigate("/admin");
    }
  }, [navigate, resetClicks]);

  return (
    <div className={styles.shell}>
      <div className={styles.bg} aria-hidden />
      <header className={styles.header}>
        <button type="button" className={styles.logoBtn} onClick={onLogoClick}>
          <span className={styles.logoMark} />
          <span className={styles.logoText}>
            <span className={styles.logoMain}>LAP90</span>
            <span className={styles.logoSub}>Sports Merch</span>
          </span>
        </button>

        <nav className={styles.nav} aria-label="Primary">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navActive : ""}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navActive : ""}`
            }
          >
            Shop
          </NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerNote}>
          Steel-built fan gear · Built for terraces, tracks, and streets.
        </p>
        <p className={styles.footerLegal}>© {new Date().getFullYear()} LAP90</p>
      </footer>
    </div>
  );
}
