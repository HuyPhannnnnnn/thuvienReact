// import Content from "./content";

import { useState } from "react";
// import { useCallback } from "react";
import { useMemo } from "react";
import { useRef } from "react";


//memo : dùng memo để không phải render lại giao diên
//Ví dụ 1
// function UseMemo() {
//     const[show,setShow] = useState(false)
//          return (
//             <div className="App" style={{ padding:20 }}>
//                 <button onClick = {() => setShow(!show)}>SHOW/HIGH</button>
//                 {show && <Content />}
//             </div>
//          );
// }

//useReff :lưu các giá trị qua một tham chiếu bên ngoài
//ví dụ 1
// function UseMemo() {
//     const[show,setShow] = useState(false)
//          return (
//             <div className="App" style={{ padding:20 }}>
//                 <button onClick = {() => setShow(!show)}>SHOW/HIGH</button>
//                 {show && <Content />}
//             </div>
//         );
// }

//userCallback : truyền giá trị qia prop để viết logic(kết hợp với memo)
//ví dụ 1
// function UseMemo() {
//     const [count,setCount] = useState(0)

//     const handleClick =  useCallback (() => {
//         setCount(prevCount => prevCount + 1)
//     },[])

//     return (
//       <div className="App" style={{ padding:20 }}>
//           <Content onIncrease = {handleClick} />
//           <h1>{count}</h1>
//       </div>
//     );
// }

//useMemo : tránh lặp lại logic không cần thiết(Xử lý form)
//ví dụ 1
function UseMemo() {
  const [name,setName] = useState('')
  const [price,setprice] = useState('')
  const [product,setproduct] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setproduct([...product,{
      name,
      price : Number(price)
    }])
    setName('')
    setprice('')
    nameRef.current.focus()
  }

  const total = useMemo(() => {  //tránh lặp lại logic không cần thiết sử dụng useMemo
   const results =  product.reduce((total,current) => {
        return total + current.price
        } ,0)
    return results
  },[product])

    return (
      <div className="App" style={{ padding:20 }}>
          <input
            ref={nameRef}
            value = {name}
            placeholder = 'enter Name'
            onChange = {e => setName(e.target.value)} />
          <br /> 
          <input
            value = {price}
            placeholder = 'enter Price'
            onChange = {e => setprice(e.target.value)} />
          <br /> 
          <h2>total : {total}</h2>
          <br />  
          <button onClick = {handleSubmit}>Submit</button>
          <ul>
            {
              product.map((cur,index) => {
                  return <li key = {index}>{cur.name} + {cur.price}</li>
              })
            }
          </ul>
      </div>
    );
}

export default UseMemo