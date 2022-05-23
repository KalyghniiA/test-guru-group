import { useAppSelector } from '../../hooks';
import { selectApartments, selectApartmentsStatus } from '../../store/apartments-data-process/apartments-data-process';
import { LoadingStatus } from '../../const';
import Preloader from '../preloader/preloader';
import Card from '../card/card';

import styles from './catalog.module.css';
import ButtonShowMore from '../button-show-more/button-show-more';
import { selectStateQuantityShownCard } from '../../store/app-process/app-process';

function Catalog(): JSX.Element {
  const apartments = useAppSelector(selectApartments);
  const apartmentsStatus = useAppSelector(selectApartmentsStatus);
  const quantityShownCards = useAppSelector(selectStateQuantityShownCard);

  if (apartmentsStatus === LoadingStatus.Loading) {
    return <Preloader />;
  }

  return (
    <>
      <section className={styles.catalog}>
        {apartments.slice(0, quantityShownCards).map((apartmentData) => (
          <Card cardData={apartmentData} key={apartmentData.id} />
        ))}
      </section>
      {quantityShownCards <= apartments.length && <ButtonShowMore />}
    </>
  );
}

export default Catalog;
