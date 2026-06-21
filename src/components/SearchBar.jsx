import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./SearchBar.module.css";

/**
 * A controlled search input component for filtering podcasts.
 * Consumes and updates the global search state via {@link PodcastContext}.
 * 
 * @component
 * @requires PodcastContext
 * @returns {JSX.Element} A stylized search input field.
 */
export default function SearchBar() {
  const { search, setSearch } = useContext(PodcastContext);

  return (
    <input
      className={styles.input}
      type="search"
      placeholder="Search podcasts"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
