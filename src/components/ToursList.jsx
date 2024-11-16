import React, { useState, useEffect } from "react";
import { collectionData } from "../content/tours-list";

const ToursList = () => {
   const [count, setCount] = useState(6);
   const [category, setCategory] = useState(collectionData);
   const [filteredCategory, setFilteredCategory] = useState(collectionData);
   const [showMore, setShowMore] = useState(false);
   const [cat, setCat] = useState("all");

   const handleBtns = (e) => {
      let selectedCat = e.target.value;

      setCat(selectedCat);

      document
         .querySelectorAll(".tours-list-filter button")
         .forEach((btn) => btn.classList.remove("active"));

      e.target.classList.add("active");
   };

   useEffect(() => {
      const data = collectionData.slice(0, count);

      const filteredData =
         cat === "all" ? data : data.filter((item) => item.category === cat);

      setFilteredCategory(filteredData);

      setCount(showMore ? collectionData.length : 6);
   }, [showMore, cat, count]);

   useEffect(() => {
      setCategory(filteredCategory);
   }, [count, filteredCategory]);

   const togShowMore = (e) => {
      e.target.innerText = showMore ? "Load More" : "Load Less";
      setShowMore(!showMore);
   };

   return (
      <>
         <div className="tours-list-wrapper">
            <div className="tours-list-filter">
               <button className="active" value="all" onClick={handleBtns}>
                  <img src="/src/assets/images/home/trips/3.png" alt="" />
                  <span>All Categories</span>
               </button>
               <button value="daytrip" onClick={handleBtns}>
                  <img src="/src/assets/images/home/trips/1.png" alt="" />
                  <span>Day Trips</span>
               </button>
               <button value="multidaytrip" onClick={handleBtns}>
                  <img src="/src/assets/images/home/trips/2.png" alt="" />
                  <span>Multi-day Trips</span>
               </button>
               <button value="privatetour" onClick={handleBtns}>
                  <img src="/src/assets/images/home/trips/3.png" alt="" />
                  <span>Private Tours</span>
               </button>
            </div>
            <div className="tours-list-items-wrapper">
               <div className="tours-list-items alpha-scrollbar">
                  {category.slice(0, count).map((item, i) => (
                     <div
                        key={item.id}
                        className="card"
                        style={{
                           "--offset": `${i / 10}s`,
                           // "--i": i / 2,
                        }}
                     >
                        <img
                           src={item.thumbImg}
                           alt="Ecotour tours list thumbnail"
                        />
                        <div className="card-info">
                           <div className="row">
                              <div className="col">
                                 <h3>{item.title}</h3>
                                 <p className="type">{item.category}</p>
                                 <span className="depart">
                                    Departing from: {item.depart}
                                 </span>
                              </div>
                              <div className="col">
                                 <div className="price">${item.price}</div>
                                 <p>per adult</p>
                                 <span>Transportation included</span>
                              </div>
                           </div>
                           <div className="row desc">
                              <div className="col">
                                 <h4>{item.descriptionTitle}</h4>
                                 <span>{item.description}</span>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col starCount">
                                 <i class="fa-brands fa-airbnb"></i>
                                 {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                       className={
                                          "star" +
                                          (i < item.ratingStars
                                             ? " filled"
                                             : "")
                                       }
                                    ></span>
                                 ))}
                                 <span className="opinionCount">
                                    {item.ratingCount} Opinions
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <button className="btn" onClick={togShowMore} data-block>
               Load more
            </button>
         </div>
      </>
   );
};

export default ToursList;
