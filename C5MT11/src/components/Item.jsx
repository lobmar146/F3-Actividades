import styles from './Item.module.css'
export function Item(props) {
    return <li className={styles.item}>{props.children}</li>
}
