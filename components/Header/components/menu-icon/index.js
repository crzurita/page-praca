import styles from './index.module.scss';

export default ({onClick}) => {
  return (
    <svg onClick={onClick} className={styles.menuButton} viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  )
}