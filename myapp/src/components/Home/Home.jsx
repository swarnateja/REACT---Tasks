import "./Home.css";

import data from "../../mock.data.json";
import Body from "../Body/Body";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
const initialData = {
  first: "",
  last: "",
  phone: "",
};
const Home = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeFromData = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const addFormSubmit = (event) => {
    event.preventDefault();
    const newData = {
      id: v4(),
      first: addFormData.first,
      last: addFormData.last,
      phone: addFormData.phone,
    };
    if (
      addFormData.first !== "" &&
      addFormData.last !== "" &&
      addFormData.phone !== "" &&
      addFormData.phone.length === 10
    ) {
      const newContact = [...contacts, newData];
      setContacts(newContact);
      setAddFormData({
        first: "",
        last: "",
        phone: "",
      });
    }

    setFormErrors(validations(addFormData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(addFormData);
    }
  });
  const validations = (values) => {
    const errors = {};
    const regex = (/^[A-Za-z]+$/);
    if (!values.first) {
      errors.first = "First Name is Required";
    } else if (!regex.test(values.first)) {
      errors.first = "Please enter valid name";
    }

     if (!values.last) {
      errors.last = "Last name is Required";
    } else if (!regex.test(values.last)) {
      errors.last = "Please enter valid name";
    }

    if (!values.phone) {
      errors.phone = "Phone Number Required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone Number Must be in 10 Digits!";
    } else if (values.phone.length > 10) {
      errors.phone = "Phone Number cannot exceed more then 10 Digits!";
    } else if (values.phone.length === 10) {
      errors.phone = "";
    }
    return errors;
  };

  const onClickDelete = (event, id) => {
    event.preventDefault();
    const contact = [...contacts];
    const filtered = contact.filter((each) => each.id !== id);
    setContacts(filtered);
  };
  return (
    <div className="main">
      <div className="tableContainer">
        <h1>Phone Book</h1>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((eachContact) => (
              <Body
                eachContact={eachContact}
                key={eachContact.id}
                onClickDelete={onClickDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="formContainer">
        <form onSubmit={addFormSubmit}>
          <label>First name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="first"
            onChange={onChangeFromData}
            value={addFormData.first}
          />
          <spam>{formErrors.first}</spam>
          <label>Last name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="last"
            onChange={onChangeFromData}
            value={addFormData.last}
          />
          <spam>{formErrors.last}</spam>
          <label>Phone number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            onChange={onChangeFromData}
            value={addFormData.phone.replace(/\D/g, "")}
          />
          <spam>{formErrors.phone}</spam>
          <button className="button" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
