import React, { useState, useEffect } from "react";
import { tourListData } from "../content/tours-list";

const ToursList = () => {
   const [tourList, setTourList] = useState(tourListData);
   const [count, setCount] = useState(6);
   const [curCategory, setCurCategory] = useState("all");
   let resLimit = 6;

   const filterTourList = (category, dataCount) => {
      setTourList(
         category === "all"
            ? tourListData.slice(0, dataCount, count)
            : tourListData
                 .slice(0, dataCount)
                 .filter((item) => item.category === category)
                 .slice(0, count)
      );

      setCurCategory(category);

      console.log(category, dataCount);
   };

   const handleBtns = (e) => {
      let selectedCat = e.target.value;

      filterTourList(selectedCat, count, count);

      document
         .querySelectorAll(".tours-list-filter button")
         .forEach((btn) => btn.classList.remove("active"));

      e.target.classList.add("active");
   };

   const togShowMore = () => {
      // setCount(curCategory, newLimit, newLimit);

      let newCount = count === 6 ? 20 : 6;

      console.log(`old: ${count}, new: ${newCount}`);
      setCount(newCount);
      filterTourList(curCategory, count, count);
   };

   // useEffect(() => {
   //    const filteredData =
   //       cat === "all"
   //          ? tourListData
   //          : tourListData.filter((item) => item.category === cat);
   //    setFilteredCategory(filteredData);

   //    console.log(category);

   //    setCount(showMore ? 15 : 6);
   // }, [showMore, cat]);

   // useEffect(() => {
   //    setTourList(filteredCategory);
   // }, [count, filteredCategory]);

   // const togShowMore = (e) => {
   //    e.target.innerText = showMore ? "Load More" : "Load Less";
   //    setShowMore(!showMore);
   // };

   return (
      <>
         <div className="tours-list-wrapper">
            <div className="tours-list-filter">
               <button className="active" value="all" onClick={handleBtns}>
                  <img src="https://placehold.co/150x100/EEE/999" alt="" />
                  <span>All Categories</span>
               </button>
               <button value="daytrip" onClick={handleBtns}>
                  <img src="https://placehold.co/150x100/EEE/999" alt="" />
                  <span>Day Trips</span>
               </button>
               <button value="multidaytrip" onClick={handleBtns}>
                  <img src="https://placehold.co/150x100/EEE/999" alt="" />
                  <span>Multi-day Trips</span>
               </button>
               <button value="privatetour" onClick={handleBtns}>
                  <img src="https://placehold.co/150x100/EEE/999" alt="" />
                  <span>Private Tours</span>
               </button>
            </div>
            <div className="tours-list-items">
               {tourList.slice(0, count).map((item, i) => (
                  <div
                     key={item.id}
                     className="card"
                     style={{
                        "--offset": `${i * (i / 2)}s`,
                        "--i": i / 10,
                     }}
                  >
                     <img
                        src={item.thumbImg}
                        alt="Ecotour tours list thumbnail"
                     />
                     <div className="card__info">
                        <div className="row">
                           <div className="col">
                              <h3>
                                 {item.id}. {item.title}
                              </h3>
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
                        <div className="row">
                           <div className="col">
                              <h4>{item.descriptionTitle}</h4>
                              <p>{item.description}</p>
                           </div>
                        </div>
                        <div className="row"></div>
                     </div>
                  </div>
               ))}
            </div>
            <button className="btn" onClick={togShowMore} data-block>
               Load more
            </button>
         </div>
      </>
   );
};

export default ToursList;
