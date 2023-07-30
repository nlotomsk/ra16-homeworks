import { useState } from 'react'

const LikeButtonNew = () => {
    const [likeCount, setLikeCount] = useState (0)
    const handlerClick = () => {
        setLikeCount(prevState => {
            return prevState + 1
        })
    }
    return <>
        <button onClick={() => handlerClick()}>All</button>
        <button onClick={() => handlerClick()}>Websites</button>
        <button onClick={() => handlerClick()}>Flayers</button>
        <button onClick={() => handlerClick()}>Business Cards</button>
        <p>Количество лайков: {likeCount}</p>
        </>
}
export default LikeButtonNew
