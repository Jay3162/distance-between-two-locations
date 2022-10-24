import {useState, useEffect} from 'react'
import Calculator from '../calculator/calculator';
import style from './landingPage.module.css'

export default function LandingPage () {
    const [startCoordLng, setStartCoordLng] = useState();
    const [endCoordLng, setEndCoordLng] = useState();
    const [startCoordLat, setStartCoordLat] = useState();
    const [endCoordLat, setEndCoordLat] = useState();
    const [result, setResult] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        return startCoordLng, startCoordLat, endCoordLng, endCoordLat
    }

    useEffect(() => {
        Calculator(startCoordLat, startCoordLng, endCoordLat, endCoordLng)
        setResult(Calculator(startCoordLat, startCoordLng, endCoordLat, endCoordLng))
    }, [startCoordLat, startCoordLng, endCoordLat, endCoordLng])
    
    return (
        <div className={style["wrapper"]}>
            <form 
            className={style["form-wrapper"]}
            onSubmit={(e) => handleSubmit(e)}>
                <p>From</p>
                <input 
                className={style["input"]}
                placeholder="long"
                onChange={(e) => setStartCoordLng(e.target.value)}
                />
                <input 
                className={style["input"]}
                placeholder="lat"
                onChange={(e) => setStartCoordLat(e.target.value)}
                />
                <p>To</p>
                <input 
                className={style["input"]}
                placeholder="long"
                onChange={(e) => setEndCoordLng(e.target.value)}
                />
                <input 
                className={style["input"]}
                placeholder="lat"
                onChange={(e) => setEndCoordLat(e.target.value)}
                />
                <input type="submit"/>
            </form>
            {result ? <div>{result}</div> : <div></div>}
        </div>
    )
}