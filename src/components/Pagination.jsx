import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./Pagination.module.css";

/**
 * A pagination control component that allows users to navigate through pages of podcasts.
 * Consumes state directly from {@link PodcastContext}.
 * 
 * @component
 * @requires PodcastContext
 * @returns {JSX.Element|null} The pagination UI controls, or null if there is only 1 page or fewer.
 */
export default function Pagination() {
  const { page, setPage, totalPages } = useContext(PodcastContext);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>
        Page {page} of {totalPages}
      </span>
      <button
        className={styles.button}
        type="button"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
