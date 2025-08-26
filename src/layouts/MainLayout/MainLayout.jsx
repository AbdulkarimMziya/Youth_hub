import styles from './MainLayout.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
