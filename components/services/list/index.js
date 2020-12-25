import {useState} from 'react';
import Item from '../item';

const List = ({itemList}) => {

  const [items, setItems] = useState(itemList)

  const setActive = (id) => {
    const changedItems = [...items];
    const currentItem = changedItems.find(item => item.id === id);
    if(currentItem.active) {
      currentItem.active = false;
    } else {
      changedItems.forEach(item => {
        item.active = item.id === id ? true : false;
      })
    }
    setItems(changedItems);
  }

  return (
    <div className="grid columns-3 margin-center relative row-gap-50 max-width-1200">
      {items.map(item => (
        <div key={item.id} onClick={() => setActive(item.id)}>
          <Item {...item} />
        </div>
      ))}
    </div>
  )
}

export default List;