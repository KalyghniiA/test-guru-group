import Catalog from '../../components/catalog/catalog';

import styles from './main.module.css';

function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className="visually-hidden">Квартиры</h1>
      <h2 className={styles.header}>Похожие объявления</h2>
      <Catalog />
    </main>
  );
}

export default Main;
