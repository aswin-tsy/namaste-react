import { IMG_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faStar} from '@fortawesome/free-solid-svg-icons'


export const RestaurantCard = (props) => {
  const { resData } = props;
 
  return (
    <div className="res-card">
      <img src={IMG_URL+resData.info.cloudinaryImageId} alt="res" className="res-img" />
      <div className="name">
       <span className="name-span">{resData.info.name}</span>
      </div>
     
      <div className="details">
       
        <span className="rating">
          <span>{resData.info.avgRating} <FontAwesomeIcon style={{color:"green"}} icon={faStar} /></span>
          
          <span>{resData.info.sla.slaString}</span>
        </span>
        <span>{resData.info.cuisines.slice(0,4).join(", ")}</span>
        <span>{resData.info.costForTwo}</span>
        <span>{resData.info.locality}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
