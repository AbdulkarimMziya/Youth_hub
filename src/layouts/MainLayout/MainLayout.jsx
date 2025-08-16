import styles from './MainLayout.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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
