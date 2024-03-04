import {MouseEventHandler} from 'react'
import { _Task } from '../../App'


const Tabs = ({handlClick,isActive}:{handlClick:MouseEventHandler<HTMLButtonElement>,isActive:boolean}) => {
  
  return(
    <div className='m-1 d-flex justify-content-center'>
          <ul className="nav nav-tabs" id="myTab" role="tablist ">
            <li className="nav-item" role="presentation ">
                <button className={`nav-link  text-black ${isActive && "active" }`}  id="1" data-bs-toggle="tab"  type="button" role="tab" aria-controls="home" aria-selected="true"
                onClick={handlClick}
                >
                  Active
                </button>
              </li>
              <li className="nav-item" role="presentation ">
                <button className={`nav-link  text-black ${!isActive && "active" }`} id="2" data-bs-toggle="tab"  type="button" role="tab" aria-controls="home" aria-selected="true"
                 onClick={handlClick}>
                  Completed
                </button>
            </li>
          </ul>
        </div>
  )
}

export default Tabs