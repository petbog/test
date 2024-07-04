import s from "./userToEdit.module.scss";
import { useState } from "react";

const EditUser = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name);
  const [service, setService] = useState(user.service);
  const [price, setPrice] = useState(user.price);

  const saveChanges = () => {
    updateUser({ ...user, name, service, price });
  };

  return (
    <div className={s.edit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={service} onChange={(e) => setService(e.target.value)} />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default EditUser;
