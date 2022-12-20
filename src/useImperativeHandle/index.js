import { useRef } from 'react'
import Videos from './videos'

//forwardRef : truyền dữ liệu ref
// useImperativeHandle :bảo vệ an toàn componant

function Clips() {

    const videoRef = useRef()

    const handlePlay = () => {
      videoRef.current.play()
    }
    const handlePause = () => {
      videoRef.current.pause()
    }
    return (
        <div>
            <Videos ref = {videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default Clips