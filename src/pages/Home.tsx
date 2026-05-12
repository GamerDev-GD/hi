import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Sports merchandise · Fan culture</p>
            <h1 className={styles.title}>
              From the pitch to the paddock — gear that hits like steel.
            </h1>
            <p className={styles.lede}>
              LAP90 curates kits, layers, and accessories with a motorsport edge and
              stadium-ready presence. Metallic tones, deep ember accents, and textures
              chosen for real-world wear.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.btnPrimary} to="/shop">
                Browse the shop
              </Link>
              <Link className={styles.btnGhost} to="/shop">
                View new arrivals
              </Link>
            </div>
            <dl className={styles.stats}>
              <div>
                <dt>Authentic fan cuts</dt>
                <dd>Athletic & relaxed fits</dd>
              </div>
              <div>
                <dt>Steel & ember palette</dt>
                <dd>Cohesive drops</dd>
              </div>
              <div>
                <dt>Detail-first</dt>
                <dd>Embroidery & trims</dd>
              </div>
            </dl>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.frameOuter}>
              <div className={styles.frameInner}>
                <img
                  src="https://picsum.photos/seed/laphomehero/720/900"
                  alt="Stadium-inspired apparel still life"
                  width={720}
                  height={900}
                  loading="eager"
                  className={styles.heroImg}
                />
                <div className={styles.frameBadge}>World Cup 2026 ready</div>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <span className={styles.fcLabel}>Featured material</span>
              <span className={styles.fcValue}>Brushed steel mesh lining</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.strip} aria-label="Highlights">
        <div className={styles.stripInner}>
          <span>F1 & motorsport layers</span>
          <span className={styles.dot} />
          <span>League kits & training</span>
          <span className={styles.dot} />
          <span>Terrace accessories</span>
        </div>
      </section>

      <section className={styles.gridSection}>
        <h2 className={styles.sectionTitle}>Shop the mood</h2>
        <div className={styles.cardGrid}>
          <Link to="/shop" className={styles.moodCard}>
            <img
              src="https://picsum.photos/seed/lapmood1/600/420"
              alt=""
              width={600}
              height={420}
              className={styles.moodImg}
            />
            <div className={styles.moodOverlay}>
              <h3>Football kits</h3>
              <p>Heat-sealed crests, breathable panels</p>
            </div>
          </Link>
          <Link to="/shop" className={styles.moodCard}>
            <img
              src="https://picsum.photos/seed/lapmood2/600/420"
              alt=""
              width={600}
              height={420}
              className={styles.moodImg}
            />
            <div className={styles.moodOverlay}>
              <h3>Motorsport layers</h3>
              <p>Ripstop shells & reflective piping</p>
            </div>
          </Link>
          <Link to="/shop" className={styles.moodCard}>
            <img
              src="https://picsum.photos/seed/lapmood3/600/420"
              alt=""
              width={600}
              height={420}
              className={styles.moodImg}
            />
            <div className={styles.moodOverlay}>
              <h3>Street training</h3>
              <p>Heavy fleece, metal hardware</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
