import { useState } from 'react'
import './App.css'

const Issues = [
  {
  description: "FastCash App with integration of loan and bill payment platform ",
  state: "New",
  tag: "",
  expiry: "June 30",
  created: "01/26/2024",
  title: "Bank App",
  id: 1
},
{
  description: "Library web App with collcetion of new and new book available in the university library ",
  state: "Pending",
  tag: "",
  expiry: " Jan 16",
  created: "01/26/2024",
  title: "Library Web App",
  id: 2
},
{
  description: "Food web app that contain both local and internation dicies ",
  state: "Completed",
  tag: "",
  expiry: "Feb 10",
  created: "01/26/2024",
  title: "Food App",
  id: 3
},
{
  description: "Academy app with the list of courses, admission date and fees ",
  state: "New",
  tag: "red",
  expiry: "March 15",
  created: "01/26/2024",
  title: "Academy App",
  id: 4
}
]

function App() {
  const [issues, setIssues] = useState(Issues)
  function handleAdd (Issue){
    setIssues((Issues)=>[...Issues, Issue])
  }
  function handleEdit(id, editIssue){
    handleAdd(editIssue)
    setIssues((issues) => issues.filter(issue => issue.id !==id))
  }
  function handleDel(id){
    setIssues((issues) => issues.filter(issue => issue.id !==id))
  }
  function changeState(id, newstate){
    setIssues((issues) => issues.map(issue => issue.id ===id ? {...issue, state: newstate}: issue))
    

  }
  return (
    <div className='bg-purple-50 min-h-lvh flex flex-col justify-center '>
       <Search issues={issues} addIssue={handleAdd} />
       <div className='border-black-100 border-2 rounded-t-lg w-11/12'>
        <IssueCard issues = {issues} changeSate={changeState} deleteCard = {handleDel} handleEdit={handleEdit} />
  </div>
   </div>
  )
}

function IssueCard({issues, changeSate, deleteCard, handleEdit}){
  
return(
<div>
 <div className='grid gap-1 grid-cols-3'>
    <NewCard issues={issues.filter(issue => issue.state === "New")} changeSate ={changeSate} deleteCard = {deleteCard} handleEdit={handleEdit} />
    <ProgIssue issues={issues.filter(issue => issue.state === "Pending")} changeSate={changeSate} deleteCard = {deleteCard} />
    <ComIssue issues={issues.filter(issue => issue.state === "Completed")} changeSate={changeSate} deleteCard = {deleteCard} />    
   </div>
  </div>
)
}

function Search ({addIssue}){
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [state, setState] = useState("")
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today. getDate();
  const currdate = month + "/" + date + "/" + year;
  function HandleAdd(){
    const NewIssue = {title, description, expiry, state, created:currdate, id:Date.now()}
    console.log(NewIssue);
    addIssue(NewIssue)
    setShowModal(false)

  }
  

return(
  <div className='items-center px-8 py-16 flex justify-around'>
    <input className='rounded border border-red-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent' type="text" placeholder="Search"/>
    <div className='flex items-center'> <button className='bg-purple-600 rounded-2xl font-semibold text-white px-2 py-1' onClick={() => setShowModal(true)}>ADD</button>
    </div>
    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h2 className="text-lg font-semibold">
                    Create A New Project For Your Team
                  </h2>

                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                   <div className='mb-3 flex content-start border-2 rounded-md'>
                    <span className='ms-2'>Title: </span>
                    <input className='bg-transparent font-serif ms-2 w-5/6' type="text" placeholder='' value={title} onChange={(e) => setTitle(e.target.value)} />
                   </div>
                   <div className='mb-3 flex flex-col content-start border-2 rounded-md'>
                    <span className='ms-2 text-start'>Description:</span>
                    <input className='bg-transparent ' type="text" placeholder='' value={description} onChange={(e) => setDescription(e.target.value)} />
                   </div> 
                   <div className='mb-3 flex content-start border-2 rounded-md'>
                    <span className='ms-2'>State:</span>
                    <select className='ms-4 text-sm font-mono' name="" id="" value={state} onChange={(e) => setState(e.target.value)}>
                      <option value="New">New</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                   </div> 
                   <div className='flex content-start border-2 rounded-md'>
                    <span className='ms-2'>Date:</span>
                    <input className='bg-transparent ms-6 text-sm font-mono' type="date" placeholder='' />
                   </div> 
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={HandleAdd}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black">
          </div>
        </>
      ) : null}
  </div>
)
}
function NewCard({issues, changeSate, deleteCard, handleEdit}){

  return(
    <div>
      
      <h1 className='font-bold text-white bg-slate-600 rounded-t-md'>New </h1>
      {/* <Card issues={issues.filter(issue => issue.state === currSate)} /> */}
    {issues.map((issue) => <Card title ={issue.title} description ={issue.description} id = {issue.id} expiry = {issue.expiry} created={issue.created} state = {issue.state} key={issue.id} changeSate={changeSate} deleteCard={deleteCard}handleEdit={handleEdit} />)}
    </div>
  )
}

function ProgIssue({issues, changeSate, deleteCard}){
  // const currSate = 'New'
  return(
    <div className='border-black-300'>
    <h1 className='font-bold text-white bg-yellow-600 rounded-t-lg'>Progress</h1>
    {issues.map((issue) => <Card title ={issue.title} description ={issue.description} id = {issue.id} expiry = {issue.expiry} created={issue.created} state = {issue.state} key={issue.id} changeSate={changeSate} deleteCard={deleteCard} />)}

    {/* {issues.map((issue) => <Card title ={issue.title} description ={issue.description} id = {issue.id} expiry = {issue.expiry} created={issue.created} state = {issue.state} key={issue.id} changeSate={changeSate} deleteCard={deleteCard} />)} */}
    </div> 
  )
}
function ComIssue({issues, changeSate, deleteCard}){

  return(
    <div className='border-black-300'>
  <h1 className='font-bold text-white bg-green-900 rounded-t-lg'>Completed</h1>
  {issues.map((issue) => <Card title ={issue.title} description ={issue.description} id = {issue.id} expiry = {issue.expiry} created={issue.created} state = {issue.state} changeSate={changeSate} deleteCard={deleteCard} key={issue.id} />)}
  </div>
  )
}

function Card ({description, expiry, title, created, state, id, changeSate, deleteCard, handleEdit}){
  const [showModal, setShowModal] = useState(false);
  const[edit, setEdit] = useState(false)
  function showEdit(){
  setEdit(!edit)
  }
  function editData(){
    setShowModal(true)
    setEdit(!edit) 
  }
  const edittitle = "New Edit"
  const editdescription = "New Edit"
  const editstate = "New"

  const editIssue = {title:edittitle, description:editdescription, expiry, state:editstate, created:created, id:Date.now()}
  return (
    <>
    <div>
    <div className='bg-white py-1 px-3 my-1 border-double border-4 border-blue-300 shadow'>
      <div className='flex justify-between relative'><h1 className='font-semibold text-left text-sm bg-slate-100 p-2 rounded-md'> {title}</h1>
      <button className='font-extrabold me-3' onClick={showEdit}>...</button>
      {edit && <div className='flex flex-col text-xs absolute right-0 top-7 bg-slate-200 rounded-md py-1 font-serif shadow-md'> <button className='text-left border-b-2 border-white px-1' onClick={editData}>Edit</button>
      <button className='px-1' onClick={() => deleteCard(id)}>Delete</button>
        </div>}
        </div>
      <p className='font-mono text-xs text-justify py-3 items-center'> {description} </p>
      <div className='flex justify-between pb-2 border-t-2 border-slate-100 pt-1'>
        <select className='text-xs w-16' name="" value={state} onChange={(e) => changeSate(id, e.target.value)} id="">
          <option value="New">New</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <div className='font-bold text-xs'>⏱</div>

      <p className='text-xs'>Created:<span className='text-blue-800 px-1 rounded'>{created}</span> </p></div>
    </div>
  {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h2 className="text-lg font-semibold">
                    Edit Your Team Project </h2>
                  
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                   <div className='mb-3 flex content-start border-2 rounded-md'>
                    <span className='ms-2'>Title: </span>
                    <input className='bg-transparent font-serif ms-2 w-5/6' type="text" placeholder={title} onChange={(e) => edittitle(e.target.value)} />
                   </div>
                   <div className='mb-3 flex flex-col content-start border-2 rounded-md'>
                    <span className='ms-2 text-start' onChange={(e) => editdescription(e.target.value)}>Description:</span>
                  <input className='bg-transparent ' type="text" placeholder={description} />
                   </div> 
                   <div className='mb-3 flex content-start border-2 rounded-md' onChange={(e) => editstate(e.target.value)}>
                    <span className='ms-2'>State:</span>
                    <select className='ms-4 text-sm font-mono' name="" id="" >
                      <option value="New">New</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                   </div> 
                   <div className='flex content-start border-2 rounded-md'>
                    <span className='ms-2'>Date:</span>
                    <input className='bg-transparent ms-6 text-sm font-mono' type="date" placeholder='' />
                   </div> 
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  onClick={() => handleEdit(id, editIssue)}
                  >
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black">
          </div>
        </>
      ) : null}
    </div>
    </>
    
  )
}

// function PenCard ({description, expiry, created, title, state, id, changeSate}){
//   const [showModal, setShowModal] = useState(false);
//   const[edit, setEdit] = useState(false)
//   function showEdit(){
//     setEdit(!edit)
//     }
//     function editData(){
//       setShowModal(true)
//       setEdit(!edit) 
//     }
//   return (
//     <div>
//     <div className='bg-white py-1 px-3 my-1 border-double border-4 border-blue-300 shadow'>
//       <div className='flex justify-between relative'><h1 className='font-semibold text-left text-sm bg-yellow-50 p-2 rounded-md'> {title}</h1>
//       <button className='font-extrabold me-3' onClick={showEdit}>...</button>
//       {edit && <div className='flex flex-col text-xs absolute right-0 top-7 bg-slate-200 rounded-md py-1 font-serif shadow-md'> <button className='text-left border-b-2 border-white px-1' onClick={editData}>Edit</button>
//       <button className='px-1' onClick={() => deleteCard(id)}>Delete</button>
//         </div>}
//         </div>
//       <p className='font-mono text-xs text-justify py-3 items-center'> {description} </p>
//       <div className='flex justify-between pb-2 border-t-2 border-slate-100 pt-1'>
//         <select className='text-xs w-16' name="" value={state} onChange={(e) => changeSate(id, e.target.value)} id="">
//           <option value="New">New</option>
//           <option value="Pending">Pending</option>
//           <option value="Completed">Completed</option>
//         </select>

//         <div className='font-bold text-xs'>⏱</div>

//       <p className='text-xs '>Created:<span className='text-blue-800 px-1 rounded'>{created}</span> </p></div>
//     </div>
//     {showModal ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//                   <h2 className="text-lg font-semibold">
//                     Edit Your Team Project </h2>
                  
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-4 flex-auto">
//                   <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                    <div className='mb-3 flex content-start border-2 rounded-md'>
//                     <span className='ms-2'>Title: </span>
//                     <input className='bg-transparent font-serif ms-2 w-5/6' type="text" placeholder=''  />
//                    </div>
//                    <div className='mb-3 flex flex-col content-start border-2 rounded-md'>
//                     <span className='ms-2 text-start'>Description:</span>
//                     <input className='bg-transparent ' type="text" placeholder='' />
//                    </div> 
//                    <div className='mb-3 flex content-start border-2 rounded-md'>
//                     <span className='ms-2'>State:</span>
//                     <select className='ms-4 text-sm font-mono' name="" id="" >
//                       <option value="New">New</option>
//                       <option value="Pending">Pending</option>
//                       <option value="Completed">Completed</option>
//                     </select>
//                    </div> 
//                    <div className='flex content-start border-2 rounded-md'>
//                     <span className='ms-2'>Date:</span>
//                     <input className='bg-transparent ms-6 text-sm font-mono' type="date" placeholder='' />
//                    </div> 
//                   </div>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
                  
//                   >
//                     ADD
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black">
//           </div>
//         </>
//       ) : null}
//     </div>
//   )
// }
// function ComCard ({description, expiry, created, title, state, id, changeSate}){
//   const [showModal, setShowModal] = useState(false);
//   const[edit, setEdit] = useState(false)
//    function showEdit(){
//   setEdit(!edit)
//   }
//   function editData(){
//     setShowModal(true)
//     setEdit(!edit) 
//   }
//   return (
//     <div>
//     <div className='bg-white py-1 px-3 my-1 border-double border-4 border-blue-300 shadow'>
//       <div className='flex justify-between relative'><h1 className='font-semibold text-left text-sm bg-green-50 p-2 rounded-md'> {title}</h1>
//       <button className='font-extrabold me-3' onClick={showEdit}>...</button>
//       {edit && <div className='flex flex-col text-xs absolute right-0 top-7 bg-slate-200 rounded-md py-1 font-serif shadow-md'> <button className='text-left border-b-2 border-white px-1'onClick={editData}>Edit</button>
//       <button className='px-1' onClick={() => deleteCard(id)}>Delete</button>
//         </div>}
//         </div>
//       <p className='font-mono text-xs text-justify py-3 items-center'> {description} </p>
//       <div className='flex justify-between pb-2 border-t-2 border-slate-100 pt-1'>
//         <select className='text-xs w-18' name="" value={state} onChange={(e) => changeSate(id, e.target.value)} id="">
//           <option value="New">New</option>
//           <option value="Pending">Pending</option>
//           <option value="Completed">Completed</option>
//         </select>

//         <div className='font-bold text-xs'>⏱</div>

//       <p className='text-xs '>Created:<span className='text-blue-800 px-1 rounded'>{created}</span> </p></div>
//     </div>
//     {showModal ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//                   <h2 className="text-lg font-semibold">
//                     Edit Your Team Project </h2>
                  
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-4 flex-auto">
//                   <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                    <div className='mb-3 flex content-start border-2 rounded-md'>
//                     <span className='ms-2'>Title: </span>
//                     <input className='bg-transparent font-serif ms-2 w-5/6' type="text" placeholder=''  />
//                    </div>
//                    <div className='mb-3 flex flex-col content-start border-2 rounded-md'>
//                     <span className='ms-2 text-start'>Description:</span>
//                     <input className='bg-transparent ' type="text" placeholder='' />
//                    </div> 
//                    <div className='mb-3 flex content-start border-2 rounded-md'>
//                     <span className='ms-2'>State:</span>
//                     <select className='ms-4 text-sm font-mono' name="" id="" >
//                       <option value="New">New</option>
//                       <option value="Pending">Pending</option>
//                       <option value="Completed">Completed</option>
//                     </select>
//                    </div> 
//                    <div className='flex content-start border-2 rounded-md'>
//                     <span className='ms-2'>Date:</span>
//                     <input className='bg-transparent ms-6 text-sm font-mono' type="date" placeholder='' />
//                    </div> 
//                   </div>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
                  
//                   >
//                     ADD
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black">
//           </div>
//         </>
//       ) : null}
//     </div>
//   )
// }
export default App
