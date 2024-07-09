import { useState } from 'react';
import { TVCard } from "./TVCard";

function TVList({ items }) {
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 12));
  const [nextIndex, setNextIndex] = useState(14);

  const loadMoreItems = () => {
    const newNextIndex = nextIndex + 14;
    setDisplayedItems(items.slice(0, newNextIndex));
    setNextIndex(newNextIndex);
  };

  const loadAllItems = () => {
    setDisplayedItems(items);
    setNextIndex(items.length)
  }

  return (
    <>
      {items.length > 0 && 
        <>  
          <h2 className="list-header" id="tv-list-header">TV</h2> 
          <hr />
        </>
      }
      <div className="item-list" id="tv-list">
        {displayedItems.length === 0 ? (
          <></>
        ) : (
          displayedItems.map((tv) => (
            <TVCard key={tv.id} tv={tv} />
          ))
        )}
      </div>
      {nextIndex < items.length && (
        <>
          <div className="load-results-button-container">
            <button onClick={loadMoreItems} className="load-results-button button" id="load-more-button">
              Show More...
            </button>
            <button onClick={loadAllItems} className="load-results-button button" id="load-all-button">
              Show All ({items.length} results)
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TVList;
