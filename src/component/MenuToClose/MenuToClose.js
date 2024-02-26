
import './MenuToClose.scss';


const MenuToClose = ({show  , toggleClose}) => {

   
    return (

        <div className={`barToclose ${show? "ameen" : ""}`}
        onClick={toggleClose}>
            <div className="content">
            </div>
        </div>

    )
};
export default MenuToClose ;