import { IMG_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faStar} from '@fortawesome/free-solid-svg-icons'


export const RestaurantCard = (props) => {
  const { resData } = props;

 
  return (
    <div data-testid = 'resCard' className="res-card dark:border border-blue-400 ">
      <img src={IMG_URL+resData.info.cloudinaryImageId} alt="res" className="res-img" />
      <div className="name">
       <span className="name-span dark:text-blue-600">{resData.info.name}</span>
      </div>
     
      <div className="details dark:text-blue-500">
       
        <span className="rating dark:text-blue-500">
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

export const WithPromtedRestaurantCard = (RestaurantCard) =>{

   return (props) =>{
      return(
        <div>
          <label className="bg-blue-500 text-white font-bold absolute py-2 px-4 rounded-lg">Top Class</label>
          <RestaurantCard {...props}/>
        </div>
      )
   }
};