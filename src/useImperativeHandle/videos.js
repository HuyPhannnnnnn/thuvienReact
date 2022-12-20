import video1 from './clips/video1.mp4'
import { forwardRef,useImperativeHandle,useRef } from 'react'

function Videos(props,ref) {
    const videoRef = useRef()

    useImperativeHandle(ref,() => {
        return {
            play() {
                videoRef.current.play()
            },
            pause() {
                videoRef.current.pause()
            }
        }
    })

    return (
        <video
            ref={videoRef}
            src={video1}
            style = {{width:'280px'}}
        ></video>
    )
}

export default forwardRef(Videos)