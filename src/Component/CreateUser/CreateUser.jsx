import { useEffect, useState } from "react";
import s from "./CreateUser.module.scss";
import { v4 as uuid } from "uuid";

const CreateUser = ({ setItems, items }) => {
  const [user, setUser] = useState({
    name: "",
    service: "",
    price: "",
    id: "",
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [servece, setServece] = useState("");
  useEffect(() => {
    if (name.length && price.length && servece.length) {
      setUser({
        name: name,
        service: servece,
        price: price,
        id: uuid(),
      });
    }
  }, [name, price, servece]);

  const newUser = () => {
    setItems([...items, user]);
    setName("");
    setPrice("");
    setServece("");
  };

  return (
    <div className={s.CreateUser}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className={s.CreateUser_input}
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        className={s.CreateUser_input}
      />
      <input
        value={servece}
        onChange={(e) => setServece(e.target.value)}
        type="text"
        className={s.CreateUser_input}
      />
      <button onClick={newUser} className="">
        save
      </button>
    </div>
  );
};

export default CreateUser;
