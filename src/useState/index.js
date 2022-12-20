//hook1 : useState
import { useState } from "react"

//ví dụ 1
// function App() {
//   const [counter,setcounter] = useState(1)

//   const handleIncrease = () => {
//     // setcounter( counter + 1) //k gọicallback
//     setcounter( (preventlt)  => { 
//         return  preventlt + 1
//     })
//     setcounter( (preventlt)  => { 
//       return  preventlt + 1
//     })
//   }

//   return (
//     <div className="App" style={{ padding:20 }}>
//         <h1>{counter}</h1>
//         <button onClick = {handleIncrease}>Increase</button>
//     </div>
//   );
// }

// ví dụ 2
// const oders = [100,200,300]
// function App() {
//   const [counter,setcounter] = useState(() => {  //gọi callback áp dụng hàm tính toán
//     const total = oders.reduce((total,cur) => total + cur)
//     return total
//   })

//   const handleIncrease = () => {
//     setcounter( (preventlt)  => { 
//         return  preventlt + 1
//     })
  
//   }

//   return (
//     <div className="App" style={{ padding:20 }}>
//         <h1>{counter}</h1>
//         <button onClick = {handleIncrease}>Increase</button>
//     </div>
//   );
// }

//ví dụ 3 : thêm mục mới vào object
// function App() {
//   const [info,setInfo] = useState({
//     name:'Phan Phụng Huy',
//     age:24,
//     gmail:'congachoi6@gmail.com'
//   })

//   const handleIncrease = () => {
//     setInfo({
//       ...info,
//       languege: 'english'
//     })
//   }

//   return (
//     <div className="App" style={{ padding:20 }}>
//         <h1>{info.name}</h1>
//         <h2>{info.languege}</h2>
//         <button onClick = {handleIncrease}>Increase</button>
//     </div>
//   );
// }

//ví dụ 4 :thay đỗi ngẫu nhiên
// function App() {
//   const gifts = ['CPU I9','Ram 32G RGB','RGB keyboard']

//   const [gift,setGift] = useState()

//   const Random = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index])
//   }

//   return (
//     <div className="App" style={{ padding:20 }}>
//         <h1>{ gift || 'Chọn 1 phần thưởng'}</h1>
//         <button onClick = {Random}>Increase</button>
//     </div>
//   );
// }

//ví dụ 5 : Làm việc với form
// function App() {
//   const courses = [
//     {
//       id:1,
//       name:'Html,css',
//       idd:'one'
//     },
//     {
//       id:2,
//       name:'Javacript',
//       idd:'two'
//     },
//     {
//       id:3,
//       name:'Reactjs',
//       idd:'tree'
//     }
//   ]
  

//   const [name,setName] = useState('')
//   const [mail,setMail] = useState('')
//   const [checked,setChecked] = useState('Javacript')
//   const [checkbox,setCheckbox] = useState([])


//   const handlecheck = (idd) => {
//     setCheckbox(prev => {
//       const ischeckbox = checkbox.includes(idd)
//       if(ischeckbox) {
//         return checkbox.filter(item => item !== idd)
//       } else {
//         return [...prev,idd]
//       }
//     })
//   }

//   const handleSubmit = () => {
//     //Call api
//     console.log({
//       name,
//       mail,
//       checked,
//       checkbox
//     })
   
//   }

//   return (
//     <div className="App" style={{ padding:20 }}>
//         <input
//         value = {name}
//         onChange = {e => setName(e.target.value)}></input>
//         <input
//         value = {mail}
//         onChange = {e => setMail(e.target.value)}></input>
//         {courses.map(course => (
//           <div key = {course.id}>
//             <input
//              type = 'radio'
//              checked = {checked === course.name}
//              onChange = {() => setChecked(course.name) } />{course.name}
//              <input
//              type = 'checkbox'
//              checked = {checkbox.includes(course.idd)}
//              onChange = {() => handlecheck(course.idd) } />{course.idd}
//           </div>
//         ))}
//         <button onClick = {handleSubmit}>Submit</button>
//     </div>
//   );
// }

//ví dụ 6 Todolist
 function UseState() {
  const [job,setJob] = useState('')
  const [jobs,setJobs] = useState([])

    const handlSubmit = () => {
      setJobs(prev => {
        return [...prev,job]
      })
    } 

    return (
      <div className="App" style={{ padding:20 }}>
        <input
          value = {job}
          onChange = {e => setJob(e.target.value)}
        />
        <button onClick = {handlSubmit}>Submit</button>
        <ul>
          {jobs.map((cur,index) => (
            <li key = {index}>{cur}</li>
          ))}
        </ul>
      </div>
    );
}

export default UseState;