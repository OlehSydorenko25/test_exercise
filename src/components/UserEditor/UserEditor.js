import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as usersOperations from '../../redux/users/users-operations';
import * as usersSelectors from '../../redux/users/users-selectors';
import * as usersAction from '../../redux/users/users-actions';
import { months } from '../../utils/months';
import s from './UserEditor.module.css';

export default function OneUserPage({}) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const params = useParams();
  const userId = params.id;

  const data = useSelector(usersSelectors.getOneUser);

  let birthDay = new Date(data.dob.date);
  const dd = String(birthDay.getDate()).padStart(2, '0');
  const mm = String(birthDay.getMonth() + 1).padStart(2, '0');
  const yyyy = birthDay.getFullYear();

  birthDay = mm + '.' + dd + '.' + yyyy;

  const [name, setName] = useState(data.name.first);
  const [email, setEmail] = useState(data.email);
  const [phoneNumber, setPhoneNumber] = useState(data.phone);
  const [location, setLocation] = useState(data.location.city);
  const [address, setAddress] = useState(data.location.street.name);
  const [dateBirth, setDateBirth] = useState(birthDay);

  const inputName = useRef();
  const focusInputName = () => inputName.current.focus();

  const inputEmail = useRef();
  const focusInputEmail = () => inputEmail.current.focus();

  const inputPhone = useRef();
  const focusInputPhone = () => inputPhone.current.focus();

  const inputLocation = useRef();
  const focusInputLocation = () => inputLocation.current.focus();

  const inputAddress = useRef();
  const focusInputAddress = () => inputAddress.current.focus();

  const inputDate = useRef();
  const focusInputDate = () => inputDate.current.focus();

  const handleChangeName = () => {
    dispatch(usersOperations.changeName(name));
  };

  const handleChangeEmail = () => {
    dispatch(usersOperations.changeEmail(email));
  };

  const handleChangePhoneNumber = () => {
    dispatch(usersOperations.changePhoneNumber(phoneNumber));
  };

  const handleChangeLocation = () => {
    dispatch(usersOperations.changeLocation(location));
  };

  const handleChangeAddress = () => {
    dispatch(usersOperations.changeAddress(address));
  };

  const handleChangeDateBirth = () => {
    dispatch(usersOperations.changeDateBirth(dateBirth));
  };

  const onDelete = () => {
    navigate(-1);
    dispatch(usersAction.deleteUser(userId));
  };

  return (
    <div className={s.contaier}>
      <div>
        <button
          className={s.btnBack}
          type="button"
          onClick={() => navigate(-1)}
        >
          &lt; Back
        </button>
      </div>
      <div className={s.blocks}>
        <div className={s.blcInfo}>
          <div className={s.blcImg}>
            <img
              src={data.picture.large}
              alt={`${data.name.first} ${data.name.last}`}
            />
          </div>
          <p className={s.name}>
            {data.name.first} {data.name.last}
          </p>
          <p className={s.date}>
            {dd} {months(mm)} {yyyy}
          </p>
          <button className={s.btnDelete} type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
        <div className={s.container__input}>
          <label className={s.label}>
            <input
              ref={inputName}
              className={s.input}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {data.name.first !== name && (
              <input
                className={s.btnUpdate}
                type="button"
                onClick={handleChangeName}
                value="Update"
              />
            )}
            {data.name.first === name && (
              <input
                onClick={focusInputName}
                className={s.btnEdite}
                type="button"
                value="Edite"
              />
            )}
          </label>
          <label className={s.label}>
            <input
              ref={inputEmail}
              className={s.input}
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {data.email !== email && (
              <input
                className={s.btnUpdate}
                type="button"
                onClick={handleChangeEmail}
                value="Update"
              />
            )}
            {data.email === email && (
              <input
                onClick={focusInputEmail}
                className={s.btnEdite}
                type="button"
                value="Edite"
              />
            )}
          </label>
          <label className={s.label}>
            <input
              ref={inputPhone}
              className={s.input}
              type="text"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
            {data.phone !== phoneNumber && (
              <input
                className={s.btnUpdate}
                type="button"
                onClick={handleChangePhoneNumber}
                value="Update"
              />
            )}
            {data.phone === phoneNumber && (
              <input
                onClick={focusInputPhone}
                className={s.btnEdite}
                type="button"
                value="Edite"
              />
            )}
          </label>
          <label className={s.label}>
            <input
              ref={inputLocation}
              className={s.input}
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            {data.location.city !== location && (
              <input
                className={s.btnUpdate}
                type="button"
                onClick={handleChangeLocation}
                value="Update"
              />
            )}
            {data.location.city === location && (
              <input
                onClick={focusInputLocation}
                className={s.btnEdite}
                type="button"
                value="Edite"
              />
            )}
          </label>
          <label className={s.label}>
            <input
              ref={inputAddress}
              className={s.input}
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            {data.location.street.name !== address && (
              <input
                className={s.btnUpdate}
                type="button"
                onClick={handleChangeAddress}
                value="Update"
              />
            )}
            {data.location.street.name === address && (
              <input
                onClick={focusInputAddress}
                className={s.btnEdite}
                type="button"
                value="Edite"
              />
            )}
          </label>
          <label className={s.label}>
            <input
              ref={inputDate}
              className={s.input}
              type="text"
              value={dateBirth}
              onChange={e => setDateBirth(e.target.value)}
            />
            {birthDay !== dateBirth && (
              <input
                className={s.btnUpdate}
                type="button"
                onClick={handleChangeDateBirth}
                value="Update"
              />
            )}
            {birthDay === dateBirth && (
              <input
                onClick={focusInputDate}
                className={s.btnEdite}
                type="button"
                value="Edite"
              />
            )}
          </label>
        </div>
      </div>
    </div>
  );
}
