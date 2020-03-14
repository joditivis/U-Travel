import React, { useState } from 'react';
import AddItemForm from '../PackingList/AddItemForm';
import Item from '../PackingList/Item';
import { Card, CardHeader, CardBody } from 'reactstrap';
import './style.css';

const PackingList = () => {
  const [items, setItems] = useState([
    {
      text: 'Sunscreen',
      isCompleted: false
    },
    {
      text: 'Sunglasses',
      isCompleted: false
    },
    {
      text: 'Sandals',
      isCompleted: false
    }
  ]);

  const addItem = text => {
    console.log('add', text);
    const newItems = [...items, { text, isCompleted: false }];
    setItems(newItems);
  };

  const completeItem = index => {
    console.log('complete', index);
    const newItems = [...items];
    if (newItems[index].isCompleted === false)
      newItems[index].isCompleted = true;
    else newItems[index].isCompleted = false;
    setItems(newItems);
  };

  const removeItem = index => {
    console.log('remove', index);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <Card className='packing-card'>
      <CardHeader className='packing-header'>Items to Pack</CardHeader>
      <CardBody className="item-list">
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            item={item}
            completeItem={completeItem}
            removeItem={removeItem}
          />
        ))}
        <br></br>
        <AddItemForm addItem={addItem} />
      </CardBody>
    </Card>
  );
};

export default PackingList;
