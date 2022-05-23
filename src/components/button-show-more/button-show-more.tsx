import styles from './button-show-more.module.css';
import { useAppDispatch } from '../../hooks';
import { increaseLimit } from '../../store/app-process/app-process';

function ButtonShowMore(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.button}
      onClick={() => {
        dispatch(increaseLimit());
      }}
    >
      Показать еще
      <svg>
        <use xlinkHref="#arrow" />
      </svg>
    </button>
  );
}

export default ButtonShowMore;
