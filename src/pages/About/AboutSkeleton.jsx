import styles from './AboutSkeleton.module.css';
import SkeletonLoader from '../../Components/UI/SkeletonLoader/SkeletonLoader';

const AboutSkeleton = () => {
  return (
    <div className={styles.aboutPageSkeleton}>
      {/* Page Header Skeleton */}
      <section className={styles.pageHeaderSkeleton}>
        <SkeletonLoader type="text" height={40} width="50%" />
        <SkeletonLoader type="text" height={20} width="30%" />
      </section>

      {/* Our Story Section Skeleton */}
      <section className={styles.ourStorySkeleton}>
        <div className={styles.container}>
          <div className={styles.storyContentSkeleton}>
            <div className={styles.storyTextSkeleton}>
              <SkeletonLoader type="text" height={30} width="30%" />
              <SkeletonLoader type="text" count={4} />
              <div className={styles.ctaButtonsSkeleton}>
                <SkeletonLoader type="button" width={120} />
                <SkeletonLoader type="button" width={120} />
              </div>
            </div>
            <div className={styles.gridBlueBgSkeleton}>
              <div className={styles.grid2x2Skeleton}>
                <SkeletonLoader type="image" />
                <SkeletonLoader type="text" height={60} />
                <SkeletonLoader type="text" height={60} />
                <SkeletonLoader type="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section Skeleton */}
      <section className={styles.ourMissionSkeleton}>
        <div className={styles.container}>
          <div className={styles.missionHeaderSkeleton}>
            <SkeletonLoader type="text" height={30} width="30%" />
            <SkeletonLoader type="text" width="60%" />
          </div>
          <div className={styles.missionCardsSkeleton}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.missionCardSkeleton}>
                <SkeletonLoader type="circle" width={60} height={60} />
                <SkeletonLoader type="text" height={24} width="50%" />
                <SkeletonLoader type="text" count={2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team Section Skeleton */}
      <section className={styles.theTeamSkeleton}>
        <div className={styles.container}>
          <SkeletonLoader type="text" height={30} width="20%" />
          <div className={styles.teamGridSkeleton}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.teamMemberSkeleton}>
                <SkeletonLoader type="image" height={200} />
                <SkeletonLoader type="text" height={24} width="70%" />
                <SkeletonLoader type="text" width="50%" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSkeleton;
