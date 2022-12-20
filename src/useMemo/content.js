// import { memo } from "react"
// import { useEffect } from "react"
// import { useState } from "react"
// import { useRef } from "react"


//Memo
//ví dụ 1
// function Content() {
//     return(
//       <div>
//           <h1>Hello anh em</h1>
//       </div>
//     )
// }

// export default memo(Content) //dùng memo để không phải re-render lại giao diện bên file App.js thẻ content

//useReft
//ví dụ 1
// function Content() {
//     const [count,setCount] = useState(60)

//     const timerID = useRef()
//     const prevCount = useRef()
//     const h1ref = useRef()

//     useEffect(() => {
//         prevCount.current = count //get ra được giá trị trước
//     },[count])

//     useEffect(() => {
//         console.log(h1ref.current) //get ra được thẻ h1
//     })

//     const hanlestart = () => {
//         timerID.current = setInterval(() =>{
//             setCount(prev => prev - 1)
//         },1000)
//     }

//     const hanleStop = () => {
//         clearInterval(timerID.current)
//     }

//     return(
//       <div>
//           <h1 ref={h1ref} style = {{color:'red',fontSize :'30px'}}>{count}</h1>
//           <h2>{prevCount.current}</h2>
//           <button onClick = {hanlestart}>Start</button>
//           <button onClick={hanleStop}>Stop</button>
//       </div>
//     )
// }

//useCallback
//ví dụ 1
// function Content({ onIncrease}) {
//     return(
//       <>
//         <h1>Hello anh em</h1>
//         <button onClick={onIncrease}>click me!</button>
//       </>
//     )
// }

// export default memo(Content)



// export default Content

