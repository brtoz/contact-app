import { useState } from "react";

const initalFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initalFormValues);

  const onChangInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);

    setForm(initalFormValues);
  };

  return (
    <form onClick={onSubmit}>
      <div>
        {" "}
        <input
          name="fullname"
          placeholder="Fullname"
          value={form.fullname}
          onChange={onChangInput}
        />
      </div>
      <div>
        {" "}
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangInput}
        />
      </div>
      <div>
        <button id="btn">Add</button>
      </div>
    </form>
  );
}

export default Form;
