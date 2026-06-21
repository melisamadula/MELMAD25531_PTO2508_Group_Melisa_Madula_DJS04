import styles from "./Header.module.css";

/**
 * Renders the global application header with the podcast logo and title.
 * 
 * @component
 * @returns {JSX.Element} The rendered header section.
 */
export default function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>🎙️ Podcast App</h1>
    </header>
  );
}
