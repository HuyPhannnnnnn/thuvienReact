// import { useEffect } from "react";
import { useLayoutEffect } from "react"
import { useState } from "react";

//Ví dụ với mount/mounted
// function Content() {
//     return(
//         <h1>Hello ANH EM</h1>
//     )
// }

// export default Content

//useEffect

// ví dụ 1 //UseEfect(callback,[])
// function Content() {
//     const [title,setTitle] = useState('') 
//     const [posts,setPosts] = useState([])

//     useEffect(() => {
//         document.title = title
//     })//thay đổi đc title ở trên

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => {setPosts(posts)})
//     },[])//call api đổ dữ liệu

//     return(
//         <div>
//             <input
//             value={title}
//             onChange = {e => setTitle(e.target.value)} 
//             />
//             <ul>
//                 {posts.map(post => {
//                     return <li key = {post.id}>{post.title}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }

//ví dụ 2 //UseEfect(callback,[def])
// const tabs = ['posts','comments','albums','photos','todos']

// function Content() {

//     const [posts,setPosts] = useState([])
//     const [type,setType] = useState('posts')
   
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//         .then(res => res.json())
//         .then(posts => {setPosts(posts)})
//     },[type]) //thay đổi dữ liệu

//     return(
//         <div>
//             {tabs.map(tab => {
//                 return <button
//                     key = {tab}
//                     style = {type === tab ? {
//                         color : 'white',
//                         background : 'black'
//                     } : {}}
//                     onClick = {() => setType(tab)}>{tab}</button>
//             })}
//             <ul>
//                 {posts.map(post => {
//                     return <li key = {post.id}>{post.title || post.name}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }

//ví dụ 3 : gọi api(thay đổi api),addEventListener
//  const tabs = ['posts','comments','albums','photos','todos']

//     function Content() {
//         const [posts,setPosts] = useState([])
//         const [type,setType] = useState('posts')
//         const [showgototop,setShowgototop] = useState(false)

//         useEffect(() => {
//             fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {setPosts(posts)})
//         },[type])

//         useEffect(() => {
//             const hanleScroll = () => {
//                if(window.scrollY >= 200) {
//                     setShowgototop(true)
//                } else {
//                     setShowgototop(false)
//                }
//             }
//             window.addEventListener('scroll',hanleScroll)

//             return () => {
//                 window.removeEventListener('scroll',hanleScroll)
//             }
//         },[]) //ad eventListener

//         const handleTop = () => {
//           window.scrollTo({top: 0, behavior: 'smooth'})
//         }

//         return(
//             <div>
//                 {tabs.map(tab => {
//                     return <button
//                         key = {tab}
//                         style = {type === tab ? {
//                             color : 'white',
//                             background : 'black'
//                         } : {}}
//                         onClick = {() => setType(tab)}>{tab}</button>
//                 })}
//                 <ul>
//                     {posts.map(post => {
//                         return <li key = {post.id}>{post.title || post.name}</li>
//                     })}
//                     {showgototop && (
//                         <button
//                         style={{
//                             position : 'fixed',
//                             right : '20px',
//                             bottom : '20px',
//                             background : 'black',
//                             color : 'white'
//                         }}
//                         onClick = {handleTop}
//                         > Về lại đầu trang </button>
//                     )}
                    
//                 </ul>
//             </div>
//         )
//     }

//ví dụ 4 : Xem width của ứng dụng
// function Content() {
//     const [width,setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }
//         window.addEventListener('resize',handleResize)

//         return () => {
//             window.removeEventListener('resize',handleResize)
//         }
//     },[])

//     return(
//       <h1>{width}</h1>
//     )
// }


//ví dụ 5 //seinterval và settimeout
// function Content() {
//     const [countdow,setCountdow] = useState(180)

//     //cách 1 Set Interval
//     useEffect(() => {
//        const timerID =  setInterval(() => {
//             setCountdow(prevState => prevState - 1)
//         },1000)

//         return () => clearInterval(timerID)
//     },[])

//     // cách 2 Set Timmeout
//     useEffect(() => {
//         const timerID = setTimeout(() => {
//             setCountdow(countdow - 1)
//         },1000)

//         return () => clearInterval(timerID)
//     },[countdow])

//     return(
//       <h1>{countdow}</h1>
//     )
// }

//ví dụ 6 thay avatar
// function Content() {
//     const[avatar,setAvater] = useState()

//     useEffect(() => {
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     },[avatar])

//     const handlePreviewavater = (e) => {
//         const file = e.target.files[0]

//         file.preview = URL.createObjectURL(file)

//         setAvater(file)
//     }

//     return(
//       <div>
//         <input
//         type = 'file'
//         onChange={handlePreviewavater}/>
//         {avatar && (
//             <img src = {avatar.preview} alt="" width = '80%'></img>
//         )}
//       </div>
//     )
// }

//ví dụ 7 //làm app chat kết hợp truyền dữ liệu ở File tổng Index.js
// const lessons = [
//     {
//         id : 1,
//         name:'Reactjs,tại sao nên học reactjs'
//     },
//     {
//         id : 2,
//         name:'SPA/MPA là gì'
//     },
//     {
//         id : 3,
//         name:'Arrow Funnction'
//     },
// ]
// function Content() {
//     const [lessonid,setLessonid] = useState(1)
//     const [comments,setComments] = useState([])

//     useEffect(() => {
//         const handleEvents = ({ detail }) => {
//            setComments((prev) => [...prev,detail]) //đưa vô mảng
//         }
//         window.addEventListener(`lesson-${lessonid}`,handleEvents)

//         return () => {
//             window.removeEventListener(`lesson-${lessonid}`,handleEvents)
//         }
//     },[lessonid])

//     return(
//       <div>
//             <ul>
//                 {lessons.map(lesson => {
//                     return <li
//                      key = {lesson.id}
//                      style = {lessonid === lesson.id ? {
//                         color : 'red',
                        
//                      } : {}}
//                      onClick = {() => setLessonid(lesson.id)}   
//                     >
//                         {lesson.name}</li>  
//                 })} 
//             </ul>
//             <ul>
//                 {comments && comments.map((comment,index) => {
//                     return <li key = {index}>{comment}</li>
//                 })}
//             </ul>
//       </div>
//     )
// }


//UselayoutEffect : khi sử dụng useEffect mà có hiện tượng Layout bị nhấp nháy thì nên dụng uselayoutEffect
//ví dụ 1
function Content() {
    const [count,setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    },[count])
 
    return(
      <div key = {count}>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Run</button>
      </div>
    )
}
export default Content

