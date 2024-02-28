import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
/* 
  <div id="parent">
    <div id="child">
      <h2>I'm heading one</h2>
    </div>
  </div>
*/

// React Element
// const heading = React.createElement("h1", {
//  id: "heading"
// }, "Hello world from react");
// 1. tag name, 2. Attributes 3. Children

// =============JSX==============
const heading = <h1 id="heading">Hello world from React JSX</h1>;

// const parent = React.createElement("div", {
//   id:"parent"
// }, React.createElement("div", {
//   id:"child"
// }, React.createElement("h1", {}, "im heading one")))

// React Function Component

const resObj = {
  info: {
    id: "114323",
    name: "Iscon Thal",
    cloudinaryImageId: "3af2182ff376076a6993fbbd9fb14f47",
    locality: "SG Road",
    areaName: "Satellite",
    costForTwo: "₹200 for two",
    cuisines: ["Gujarati", "Thalis", "Indian", "Sweets", "Desserts", "Jain"],
    avgRating: 4.4,
    veg: true,
    parentId: "107384",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 6.8,
      serviceability: "SERVICEABLE",
      slaString: "27 mins",
      lastMileTravelString: "6.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-21 15:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹349",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/iscon-thal-sg-road-satellite-ahmedabad-114323",
    type: "WEBLINK",
  },
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
