import React, { useState } from 'react';
import style from './Pages.module.css';

const Project = () => {

  const [pageNo, setPageNo] = useState(0);

  const projects =['Counter','TempControl','Calc'];

  const pagesDisplay =()=>{
    if (pageNo === 0) {
      return projects[pageNo];
    } else if(pageNo === 1) {
      return projects[pageNo]; 
    }else{
      return projects[pageNo];
    }
  }

  return (
    <div className={style.project_container}>
       <div className={style.project_head}>
          <span>Projects: {pageNo+1}/{projects.length}</span>
       </div>
       <div className={style.project_display}>
         {/* projects comes here */}
         {pagesDisplay()}
       </div>
       <div className={style.project_button_group}>
       {
        pageNo === 0? '': <button onClick={()=>setPageNo((currPage)=> currPage - 1 )}>Previous</button>
       } 
       {
        pageNo === projects.length-1? '': <button onClick={()=>setPageNo((currPage)=> currPage + 1 )}>Next</button>
       }
       </div>
     </div>
  )
}

export default Project;