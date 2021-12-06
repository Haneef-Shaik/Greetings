
import styles from '../styles/card.module.scss';
function Card(props) {
    if (props.greeting) {
        return (
            <div>
                <div className={styles.festival} style={{ backgroundImage: `{url(/images/${props.event}/${bgImage}.webp)}`,backgroundSize: "100%"} } >
                    <h1 className= {styles.txt} style={{ color:`${props.color}`}}  >Happy {props.event}</h1>
                    <h1 className= {styles.txt} style={{ color:`${props.color}`}} >From</h1>
                    <h1 className= {styles.txt} style={{ color:`${props.color}`}} > {props.name}</h1>
                    
                    <h5 className={ styles.para} > {props.greeting}</h5>
                    
                </div>
            </div>
        )
    }
    return (
        <div>
                <div className={styles.festival} style={{ backgroundImage: url(`{/images/${props.event}/${bgImage}.webp}`),backgroundSize: "100%"} } >
            
                <h1 className= {styles.txt} style={{ color:`${props.color}`}}  >Happy {props.event}</h1>
                <h1 className= {styles.txt} style={{ color:`${props.color}`}} >From</h1>
                <h1 className= {styles.txt} style={{ color:`${props.color}`}} > {props.name}</h1>
                
                
            </div>
        </div>
    )
}
export default Card;

