import { useState } from 'react'


// const orders = [100, 200, 300 , 400, 500]

// function App() {
// //   const [counter, setCount] = useState(()=>{
// //     const total = orders.reduce((total,cur)=> total + cur)
// //     return total;
// //   });

//   // const handleIncrease = () => {
//   //   setCount(counter + 1);
//   //   // setCount(prevState => prevState + 1): có thể dùng để lấy giá trị trước đó, ko bị hardcode
//   // }
//   // const handleDecrease = () => {
//   //   setCount(counter - 1);
//   // }
//   const [info, setInfo] = useState({
//     name:'Việt đẹp trai',
//     age:20,
//     address:'Hồ Chí Minh'
//   })
//   const handleupdate = () => {
//     setInfo({
//       ...info,
//       bio:'yêu màu hồng ghét sự giả dối'
//     })

//     setInfo(prev =>{
//       // logic nếu có
//       return {
//       ...prev,
//         bio:'yêu màu hồng ghét sự giả dối'
//       }
//     })
//   }
//   return (
//     <div className="App" style = {{ padding: '20px' }}>
//       {/* <h1>{counter}</h1> */}
//       <h1>{JSON.stringify(info)}</h1>
//       {/* <button id='nut1' onClick={handleIncrease}>+</button>
//       <button  style={{ marginLeft: '10px' }} onClick={handleDecrease}>-</button> */}
//       <button onClick={handleupdate}>Change</button>
//     </div>
//   );
  
// }
//  

// LƯU Ý:
// 1. Array
// 2. Reference types

// Ví dụ:
// 1. Random gift
// 2. Two-way binding
// 3. Todo list

// *Respone from API
const courses = [
  {
    id:1,
    name:'HTML,CSS'
  },
  {
    id:2,
    name:'Javascript'
  },
  {
    id:3,
    name:'ReactJS'
  }
]

// *Ứng dụng random nhận quà
const gifts = [
  'Intel Core i9',
  'RAM 32GB',
  'RGB Keyboard',
  'May mắn lần sau',
]

// function App() {
//   const [gift, setGift] = useState();

//   const handleGetGift = ()=>{
//     const randomPercent = Math.random()*100;
//     console.log(randomPercent)
//     if(randomPercent<98){
//       setGift(gifts[3]);
//     }else{
//       const randomIndex = Math.floor(Math.random()*(gifts.length-1))
//       setGift(gifts[randomIndex])
//     }
//   }

//   return (
//     <div style={{padding: '32px'}} className="App">
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={handleGetGift}>Lấy thưởng</button>
//     </div>
//   )
// }

// *Lý giải one và two-way binding:
// function App(){
//   // const [name, setName] = useState('');
//   // const [email, setEmail] = useState('');
//   const [checked,setChecked] = useState([]);

//   const handleCheck = (id)=>{
//     setChecked(prev => {
//       const isChecked = checked.includes(id);
//       if(isChecked){
//         // Unchecked
//         return checked.filter(item => item !== id)
//       }else{
//         return [...prev,id]
//       }
//     })
//   }
//   const handleSubmit = ()=>{
//     // CALL API
    
//   }

//   return (
//     <div style={{padding: '32px'}} className="App">
//       {/* <input value={name} onChange={e =>setName(e.target.value)}/> */}
//       {/* <button onClick={()=> setName('Việt Đẹp trai')}>Change</button> */}
//       {/* <input value={email} onChange={e =>setEmail(e.target.value)}/> */}
//       {courses.map(course =>(
//         <div key={course.id}>
//         <input type='checkbox' 
//         checked={checked.includes(course.id)}
//         onChange={() => handleCheck(course.id)}/>
//         {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
    
//   )
// }

// *Todo List
function App(){
  const storageJobs = JSON.parse(localStorage.getItem('jobs'))
  console.log(storageJobs);

  const [job, setJob] = useState('')
  const [jobs,setJobs] = useState(() =>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs || []
  })

  const handleSubmit = ()=>{
    setJobs(prev =>{
      const newJobs = [...prev,job]
      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJobs)

      return newJobs
    })
    setJob('')
  }

  const handleDelete = (index)=>{
    setJobs((prev) =>{
      prev = jobs.filter((job) => job !== jobs[index]);
      const jsonJobs = JSON.stringify(prev);
      localStorage.setItem('jobs',jsonJobs);
      return prev;
    })
  }

  return (
    <div style={{padding: '32px'}} className="App">
      <input 
      value={job} 
      type="text" 
      onChange={e =>setJob(e.target.value)}/>
      <button onClick={handleSubmit}>Thêm việc</button>

      <ul>
        {jobs.map((job,index) => (
          <li key={index}>{job}<button 
          onClick={()=>handleDelete(index)} style={{marginLeft: '32px'}}>Xóa</button></li>
        ))}
      </ul>
    </div>
  )
}


export default App;
