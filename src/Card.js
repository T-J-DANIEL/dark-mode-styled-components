import styles from './cardStyles.module.css'
const Card = ({article}) =>{
    const {title,length,date,snippet} = article
    let dateString = `${date
      .getDate().toString()
      .padStart(2, "0")}.${date.getMonth().toString().padStart(2, '0')}.${date.getFullYear()}`
    return (
      <div className={styles.card}>
        <h2>{title}</h2>
        <h3>Date: {dateString}</h3>
        <p>{length} minute read</p>
        <h4>{snippet}</h4>
      </div>
    )
}

export default Card