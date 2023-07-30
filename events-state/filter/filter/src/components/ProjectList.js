import { imgfoto } from './imade.data'
import styles from './css/style.module.css'

//const imgfoto = []
function ProjectList() {
    return <div className={styles.column}>
        {imgfoto.length ? (
            imgfoto.map(image => (<div>
                <img src={image.img} alt='text'/>
                </div>)))
        : <div className={styles.column_text}>
            <h1>Нет изображений</h1>
        </div>}
    </div >
}

export default ProjectList
