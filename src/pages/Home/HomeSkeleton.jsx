import styles from './HomeSkeleton.module.css';
import SkeletonLoader from '../../Components/UI/SkeletonLoader/SkeletonLoader';

const HomeSkeleton = () => {
  return (
    <div className={styles.homeSkeleton}>
      {/* Hero Section Skeleton */}
      <section className={styles.heroSkeleton}>
        <div className={styles.heroContentSkeleton}>
          <SkeletonLoader type="text" height={24} width="60%" />
          <SkeletonLoader type="text" height={50} width="80%" />
          <div className={styles.callToActionSkeleton}>
            <SkeletonLoader type="button" width={120} />
            <SkeletonLoader type="button" width={120} />
          </div>
        </div>
      </section>

      {/* Certification Section Skeleton */}
      <section className={styles.certificationSectionSkeleton}>
        <div className={styles.container}>
          <SkeletonLoader type="text" height={30} width="50%" />
          <div className={styles.certificationGridSkeleton}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.certificationCardSkeleton}>
                <SkeletonLoader type="image" height={60} width={60} />
                <SkeletonLoader type="text" height={24} width="80%" />
                <SkeletonLoader type="text" count={2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className={styles.aboutSectionSkeleton}>
        <div className={styles.wrapper}>
          <div className={styles.textContentSkeleton}>
            <SkeletonLoader type="text" height={30} width="40%" />
            <SkeletonLoader type="text" count={3} />
          </div>
          <div className={styles.grid2x2Skeleton}>
            <SkeletonLoader type="image" />
            <SkeletonLoader type="text" height={60} />
            <SkeletonLoader type="text" height={60} />
            <SkeletonLoader type="image" />
          </div>
        </div>
      </section>

      {/* Events Section Skeleton */}
      <section className={styles.eventsSectionSkeleton}>
        <div className={styles.container}>
          <SkeletonLoader type="text" height={30} width="30%" />
          <div className={styles.eventsGridSkeleton}>
            {[1, 2, 3].map((item) => (
              <SkeletonLoader key={item} type="card" />
            ))}
          </div>
          <div className={styles.eventsCTASkeleton}>
            <SkeletonLoader type="button" width={150} />
          </div>
        </div>
      </section>

      {/* Sponsorship Section Skeleton */}
      <section className={styles.sponsorshipSectionSkeleton}>
        <div className={styles.container}>
          <SkeletonLoader type="text" height={30} width="40%" />
          <SkeletonLoader type="text" width="70%" />
          <div className={styles.sponsorLogosSkeleton}>
            {[1, 2, 3, 4].map((item) => (
              <SkeletonLoader key={item} type="image" height={80} width={120} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSkeleton;
