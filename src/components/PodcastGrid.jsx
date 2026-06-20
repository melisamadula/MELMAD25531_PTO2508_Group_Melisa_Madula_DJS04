import { useContext } from "react";
import PodcastCard from "./PodcastCard";

/**
 * Displays a grid layout of podcast preview cards. Each card includes
 * podcast details such as title, image, genres, season count, and updated date.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array<Object>} props.podcasts - Array of podcast objects to display.
 * @param {Array<Object>} props.genres - Array of genre objects used to map genre IDs to titles.
 *
 * @returns {JSX.Element} The rendered grid of podcast cards.
 *
 */
export default function PodcastGrid({ genres }) {
    const { podcasts } = useContext(PodcastContext);
    if (!podcasts.length) {
        return (
            <p className={StyleSheet.noResults}>
                No podcast match your search or filters.
            </p>
        );
    }
    return (
        <>
            <div className={styles.grid}>
                {podcasts.map((podcast) => (
                    <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
                ))}
            </div>
        </>
     );
}
