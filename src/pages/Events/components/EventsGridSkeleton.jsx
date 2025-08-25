import SkeletonLoader from '../../../Components/UI/SkeletonLoader/SkeletonLoader';
import styles from './EventsGridSkeleton.module.css';

const EventsGridSkeleton = ({ count = 4 }) => {
  return (
    <div className={styles.eventsGridSkeleton}>
      {Array(count).fill().map((_, index) => (
        <div key={index} className={styles.eventCardSkeleton}>
          <div className={styles.headerSkeleton}>
            <SkeletonLoader type="button" width={80} height={24} />
            {index % 3 === 0 && <SkeletonLoader type="button" width={70} height={24} />}
          </div>
          <SkeletonLoader type="text" height={30} width="80%" />
          <div className={styles.detailsSkeleton}>
            <SkeletonLoader type="text" count={3} height={18} />
          </div>
          <SkeletonLoader type="text" count={2} height={16} />
          <SkeletonLoader type="button" width="100%" height={40} />
        </div>
      ))}
    </div>
  );
};

export default EventsGridSkeleton;
