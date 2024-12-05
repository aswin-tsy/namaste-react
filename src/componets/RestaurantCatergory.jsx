import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {  IMG_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Restaurant Catergory - Accorian made with help of M-UI 

const RestaurantCatergory = (props) => {
  const category = props.data;
  console.log(category);
  return (
    <div className="mt-6">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className="font-bold text-xl">{category.title} ({category.itemCards.length})</h1>
        </AccordionSummary>
        <AccordionDetails>
          {category.itemCards.map((item) => (
            <div key={item.card.info.id} className="recom-menu">
              <div className="recom-container">
                <div className="recom-details">
                  <span>
                    <FontAwesomeIcon
                      style={{ color: "#dd5b1e", fontSize: "20px" }}
                      icon={faInstagram}
                    />
                  </span> 
                  <span className="f-name">{item.card.info.name}</span>
                  <span className="price">
                    Rs:{" "}
                    {(item.card.info.defaultPrice || item.card.info.price) /
                      100}
                  </span>
                  <span className="f-desc w-[600px]">{item.card.info.description}</span>
                </div>
                <div className="recom-img">
                  <img className="w-56" src={IMG_URL + item.card.info.imageId} alt="food" />
                  <button className="add">ADD</button>
                  <div className="cust">Customisable</div>
                </div>
              </div>
              <div className="line"></div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RestaurantCatergory;

{/* <Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <h1>Recommended</h1>
  </AccordionSummary>
  <AccordionDetails>
    {itemCards.map((item) => (
      <div key={item.card.info.id} className="recom-menu">
        <div className="recom-container">
          <div className="recom-details">
            <span>
              <FontAwesomeIcon
                style={{ color: "#dd5b1e", fontSize: "20px" }}
                icon={faInstagram}
              />
            </span>
            <span className="f-name">{item.card.info.name}</span>
            <span className="price">
              Rs: {(item.card.info.defaultPrice || item.card.info.price) / 100}
            </span>
            <span className="f-desc">{item.card.info.description}</span>
          </div>
          <div className="recom-img">
            <img src={FOOD_URL + item.card.info.imageId} alt="food" />
            <button className="add">ADD</button>
            <div className="cust">Customisable</div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    ))}
  </AccordionDetails>
</Accordion>; */}
