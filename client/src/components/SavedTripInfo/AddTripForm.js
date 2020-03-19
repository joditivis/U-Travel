// import React, { useState } from 'react';
// import { Form, Button, Input } from 'reactstrap';
// import './style.css';

// const AddTripForm = ({ addTrip }) => {
//   const [title, setTitle] = useState('');
//   const [peopleOrDays, setPeopleOrDays] = useState('');
//   const [amount, setAmount] = useState('');


//   const handleSubmit = event => {
//     event.preventDefault();
//     addTrip(title, peopleOrDays, amount);
//     setTitle('');
//     setPeopleOrDays('');
//     setAmount('');
//   };

//   return (
//     <Form>
//       <Input
//         className="add-trip-input"
//         type="text"
//         name="title"
//         placeholder="surfing lessons"
//         value={title}
//         onChange={event => setTitle(event.target.value)}
//       />
//       <br></br>
//       <Input
//         className="add-trip-input"
//         type="text"
//         name="peopleOrDays"
//         placeholder="people/days"
//         value={peopleOrDays}
//         onChange={event => setPeopleOrDays(event.target.value)}
//       />
//       <br></br>
//       <Input
//         className="add-trip-input"
//         type="text"
//         name="amount"
//         placeholder="$"
//         value={amount}
//         onChange={event => setAmount(event.target.value)}
//       />
//       <br></br>
//       <Button className="add-item-btn" size="sm" onClick={handleSubmit}>
//         Add
//       </Button>
//     </Form>
//   );
// };

// export default AddTripForm;
