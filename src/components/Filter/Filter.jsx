import styles from './Filter.module.css';

export default function Filter({ onFilter, filter }) {
    return (
        <label className={styles.label}>
            Find contacts by name
            <input
                onChange={onFilter}
                type="text"
                value={filter}
                className={styles.input}
            ></input>
        </label>
    )
}