import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  FOOD_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import "./restmenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import useRestaurant from "../utils/useRestaurant";

const RestaruantMenu = () => {
  const { restId } = useParams();

  const restInfo = useRestaurant(restId);

  if (restInfo === null) return <Shimmer />;

  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const { info } = restInfo?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <div className="menu-details">
        <span className="m-name">{info.name}</span>
        <div className="res-details">
          <span className="ratings">
            <span>
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />{" "}
              {info.avgRating} (9.9k+ ratings)
            </span>
            <span>{info.costForTwoMessage}</span>
          </span>
          <span className="cuisines">{info?.cuisines?.join(", ")}</span>
          <span>{info.areaName}</span>
          <span>{info?.sla?.slaString?.toLowerCase()}</span>
        </div>
      </div>
      <div className="menu-items">
        <Accordion>
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
                      Rs:{" "}
                      {(item.card.info.defaultPrice || item.card.info.price) /
                        100}
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
        </Accordion>
      </div>
    </div>
  );
};

export default RestaruantMenu;
