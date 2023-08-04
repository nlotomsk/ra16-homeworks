import { imgfoto } from './imade.data'
import styles from './css/button.module.css'

//const imgfoto = []
function ButtonFilter() {
    const array = imgfoto.map(ima =>(ima.category))
    //console.log(...new Set(array))
    // const makeUniq = (arr) => {
    //     const uniqSet = new Set(arr)
    //     console.log(uniqSet)
    //     const makeUniq = (array) => [...new Set(array)]
    //     console.log(makeUniq)   
    //}
    

    return <div className={styles.btn} role= "toolbar" aria-label="Toolbar with button groups">
        <div role="group" aria-label="First group">
            <button className={styles.btn_1} 
        onClick={()=>console.log("All")}
        >All</button></div>
        {imgfoto.length ? (
            [...new Set(array)].map(cat => (
                <div role="group" aria-label="First group">
                    <button className={styles.btn_1} 
                onClick={()=>console.log(cat.activ)}>
                {cat}
                </button></div>
                    )))
                    
            : <div>
            <h1>Нет категорий</h1>
        </div>}
    </div >
}

export default ButtonFilter
