
import Content from "./content";
import { useState } from "react";


//Mounted/unMounted
//ví dụ : ẩn hiện //kết hợp với file content.js
// function UseEffect() {
//   const [show,setShow] = useState(false)
//     return (
//       <div className="App" style={{ padding:20 }}>
//           <button onClick = {() => setShow(!show)}>SHOW/HIGH</button>
//           {show && <Content />}
//       </div>
//     );
// }


//use useEffect
//ví dụ 1,2,3,4,5,6,7
// function UseEffect() {
//     const [show,setShow] = useState(false)
//       return (
//         <div className="App" style={{ padding:20 }}>
//             <button onClick = {() => setShow(!show)}>SHOW/HIGH</button>
//             {show && <Content />}
//         </div>
//       );
//   }


//UselayOuteffect
//ví dụ 1
function UseEffect() {
  const [show,setShow] = useState(false)
    return (
      <div className="App" style={{ padding:20 }}>
          <button onClick = {() => setShow(!show)}>SHOW/HIGH</button>
          {show && <Content />}
      </div>
    );
}



export default UseEffect