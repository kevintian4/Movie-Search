import { PersonCard } from './PersonCard';
import { useState } from 'react';

function PeopleList({ items }) {
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 12));
  const [nextIndex, setNextIndex] = useState(12);

  const loadMoreItems = () => {
    const newNextIndex = nextIndex + 12;
    setDisplayedItems(items.slice(0, newNextIndex));
    setNextIndex(newNextIndex);
  };

  const loadAllItems = () => {
    setDisplayedItems(items);
    setNextIndex(items.length)
  }

  return (
    <div className='list-container'>
      {items.length > 0 && 
        <>  
          <h2 className="list-header" id="people-list-header">People</h2> 
          <hr />
        </>
      }
      <div className="item-list" id="people-list">
        {displayedItems.length === 0 ? (
          <></>
        ) : (
          displayedItems.map((person) => (
            <PersonCard key={person.id} person={person} />
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
    </div>
  );
}

export default PeopleList;

  