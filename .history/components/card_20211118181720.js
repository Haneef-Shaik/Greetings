
import styles from '../styles/card.module.scss';
function Card(props) {
    return (
        <div>
            <div className={styles.festival} style={{ backgroundImage: "url(" + `${props.image}` + ")",backgroundSize: "100%"} } >
                <h1 className= {styles.txt} style={{ color:`${props.color}`}}  >Happy {props.event}</h1>
                <h1 className= {styles.txt} style={{ color:`${props.color}`}} >From</h1>
                <h1 className= {styles.txt} style={{ color:`${props.color}`}} > {props.name}</h1>
                <h5 className={ styles.para} > {props.greeting}</h5>
                
            </div>
        </div>
    )
}
export default Card;

