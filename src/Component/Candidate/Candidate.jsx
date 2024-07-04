import s from "./Candidate.module.scss";

const Candidate = ({
  name,
  service,
  price,
  deleteUser,
  editUser,
  id,
  setEdet,
  edit,
}) => {
  const handleUser = () => {
    editUser(id);
    setEdet(!edit);
  };

  return (
    <div className={s.Candidate}>
      <div className={s.Candidate_box}>
        <div className={s.Candidate_user}>
          <div className={s.Candidate_name}>{name}</div>
          <div className={s.Candidate_price}>{price}</div>
        </div>
        <div className={s.Candidate_description}>{service}</div>
      </div>
      <div onClick={deleteUser} className={s.delete}>
        удалить
      </div>
      <button onClick={handleUser}>Edit</button>
    </div>
  );
};

export default Candidate;
