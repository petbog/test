import s from "./Prose.module.scss";
import { useState } from "react";
import Candidate from "../Candidate/Candidate";

import CreateUser from "../CreateUser/CreateUser";
import EditUser from "../userToEdit/userToEdit";

const Prose = () => {
  const [items, setItems] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [edit, setEdet] = useState(false);
  console.log(edit);

  const deleteUser = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editUser = (id) => {
    const userToEdit = items.find((item) => item.id === id);
    setEditingUser(userToEdit);
  };

  const updateUser = (updatedUser) => {
    setItems(
      items.map((item) => (item.id === updatedUser.id ? updatedUser : item))
    );
    setEditingUser(null);
  };

  return (
    <div className={s.Prose}>
      <CreateUser setItems={setItems} items={items} />
      {edit && <EditUser user={editingUser} updateUser={updateUser} />}
      {items.length &&
        items.map((item, i) => (
          <Candidate
            key={i}
            {...item}
            deleteUser={() => deleteUser(item.id)}
            editUser={() => editUser(item.id)}
            setEdet={setEdet}
            edit={edit}
          />
        ))}
    </div>
  );
};

export default Prose;
