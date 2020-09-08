import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "virinchi",
  country: "India"
}





function Hello({library,message,number}){
    return(
    <div>
      <h1>Welcome to {library}!</h1>
    <p>lets,build amazing</p>
    <p>{message} and number is </p>
    </div>)
}

// function Lake({names}){
//   return <h1>{names}</h1>;
// }


// list of data
// const lakeList = [
//   "Godavari",
//   "kaveri",
//   "krishna nadi"
// ]
// list of objects
// const riverList = [
//   {id: "1", name: "bramhaputra", trailhead: "nihith"},
//   {id: "2", name: "kaveri", trailhead: "virinchi"}
// ]





// for rendering list of objects
// function App3({lake}){
//   return (
//     <div >
//       {lake.map(indRiv=> (
//         <div key= {indRiv.id}>
//           <h2>{indRiv.id}</h2>
//       <p>Guest: {indRiv.trailhead}</p>
//           <p>Accessed by {indRiv.name}</p>
          
//           </div>
//       ))}
//     </div>
//   );

// }


// for rendering list of data
// function App2({lake}){
//     return (
//       <ul>
//         {lake.map(lakesvar => (
//           <li>{lakesvar}</li>
//         ))}
//       </ul>
//     );
// 

  // function Laked(){
  //   return (
  //     <div>
  //       <h1>
  //         Visit Lake!
  //       </h1>
  //     </div>
  //   )

  // }
  // // use upper case for writing functions
  // function SkinResort(){
  //   return (
  //   <div>
  //     <h2>visted SkinResort!</h2>
  //   </div>)

  // }



  // function App(){
    
  //   const [year,setManager2] = useState(2050)
  //   const [manager,setManager] = useState("virinchi")
  //   const [status,changestatus] = useState("opended");
  //   return (
  //     <>
  //     <div>
  //       <h1>{year}</h1>
  //       <button onClick = {()=> setManager2(year+1)}>add on</button>
  //       <button onClick = {()=> setManager2(year - 1) }>sub off</button>
  //     </div>

  //     <div>
  //       <h1>current manager: {manager}</h1>
  //       <button onClick= {()=> setManager("rashin kanna")}>changemanager</button>
  //       <button onClick = {()=> setManager("deepika padukone") }>change pa</button>
  //     </div>

  //     <div>
  //       <h1>current status: {status}</h1>
  //       <button onClick={()=> changestatus("closed")}>closed</button>
  //       <button onClick={() => changestatus("opened")}>opended</button>
  //     </div>

  //     </>
  //   )}

  function Checkbox(){
    const[checked,setchecked] = useState(false);
    return(
      <>
      <input
      type = "checkbox" 
      value = {checked}
      onChange = {()=> setchecked(checked=> !checked)
      }
      />
      
      {checked ? "checked" : "not checked"}
      </>
    )
  }

  ReactDOM.render(

    <Checkbox />,
    document.getElementById("root")
  );


