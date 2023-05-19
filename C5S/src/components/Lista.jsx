import styles from './Lista.module.css'
export function Lista(props) {
    return <ul className={styles.lista}>{props.children}</ul>
}
