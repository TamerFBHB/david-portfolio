
import './MenuToClose.scss';


const MenuToClose = ({show  , toggleSideBar}) => {

    
    return (

        <div className={`barToclose ${show? "active" : ""}`}
        onClick={toggleSideBar}>
            <div className="content">
            </div>
        </div>

    )
};
export default MenuToClose ;