import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Catagories() {
  return (
    <div>
        <div className="dropdown" style={{paddingLeft:'8%',paddingBottom:'1%'}}>
                    
                    <a type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <b> All Categories <FontAwesomeIcon icon={faCaretDown} /></b>
                    </a>
                 

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
      
    </div>
  )
}
