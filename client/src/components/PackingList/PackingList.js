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
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  const completeItem = index => {
    const newItems = [...items];
    newItems[index].isCompleted = true;
    setItems(newItems);
  };

  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  
  return (
    <Card>
      <CardHeader>Items to Pack</CardHeader>
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
        <AddItemForm addItem={addItem} />
      </CardBody>
    </Card>
  );
};

export default PackingList;
