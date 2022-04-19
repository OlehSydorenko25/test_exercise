import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";
import * as usersOperations from '../../redux/users/users-operations';
import * as usersAction from '../../redux/users/users-actions'
import {months} from '../../utils/months';
import s from './UserEditor.module.css';

// const data = {
//     "gender": "male",
//     "name": {
//     "title": "Mr",
//     "first": "Divo",
//     "last": "da Cunha"
//     },
//     "location": {
//     "street": {
//     "number": 9370,
//     "name": "Rua Paraíba "
//     },
//     "city": "Ji-Paraná",
//     "state": "Amapá",
//     "country": "Brazil",
//     "postcode": 51620,
//     "coordinates": {
//     "latitude": "-74.7968",
//     "longitude": "-152.5977"
//     },
//     "timezone": {
//     "offset": "-3:00",
//     "description": "Brazil, Buenos Aires, Georgetown"
//     }
//     },
//     "email": "divo.dacunha@example.com",
//     "login": {
//     "uuid": "435e7717-73ba-4e35-8832-c7720cbd1e4e",
//     "username": "browndog785",
//     "password": "kieran",
//     "salt": "DlTN5mwU",
//     "md5": "5d0362711eb2363366ede199d56679c3",
//     "sha1": "e3f9a3acd5a15b04a43b5af46eed8dc964c1ffc5",
//     "sha256": "beaf49191e63a0f8f97537748c6e29e910809b0db5e70af46b8fc17120a9000a"
//     },
//     "dob": {
//     "date": "1969-07-14T18:06:29.586Z",
//     "age": 53
//     },
//     "registered": {
//     "date": "2010-08-18T20:37:48.411Z",
//     "age": 12
//     },
//     "phone": "(07) 7819-2865",
//     "cell": "(28) 0586-4970",
//     "id": {
//     "name": "",
//     "value": null
//     },
//     "picture": {
//     "large": "https://randomuser.me/api/portraits/men/17.jpg",
//     "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
//     "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
//     },
//     "nat": "BR"
//     }


export default function OneUserPage ({data}) { 
    const userId = data.login.uuid
    const dispatch = useDispatch()
    let navigate = useNavigate ();

    let birthDay = new Date(data.dob.date);
    const dd = String(birthDay.getDate()).padStart(2, '0');
    const mm = String(birthDay.getMonth() + 1).padStart(2, '0');
    const yyyy = birthDay.getFullYear();

    birthDay = mm + '.' + dd + '.' + yyyy;

    const [name, setName] = useState(data.name.first)
    const [email, setEmail] = useState(data.email)
    const [phoneNumber, setPhoneNumber] = useState(data.phone)
    const [location, setLocation] = useState(data.location.city)
    const [address, setAddress] = useState(data.location.street.name)
    const [dateBirth, setDateBirth] = useState(birthDay)

    const handleChangeName = () => {
        dispatch(usersOperations.changeName(name))
    }

    const handleChangeEmail = () => {
        dispatch(usersOperations.changeEmail(email))
    }

    const handleChangePhoneNumber = () => {
        dispatch(usersOperations.changePhoneNumber(phoneNumber))
    }

    const handleChangeLocation = () => {
        dispatch(usersOperations.changeLocation(location))
    }

    const handleChangeAddress = () => {
        dispatch(usersOperations.changeAddress(address))
    }

    const handleChangeDateBirth = () => {
        dispatch(usersOperations.changeDateBirth(dateBirth))
    }

    const onDelete = () => {
        console.log(userId);
        navigate(-1)
        dispatch(usersAction.deleteUser(userId))
        
    }


    return (
        <div className={s.contaier}>
            <div>
                <button
                className={s.btnBack}
                type="button"
                onClick={() => navigate(-1)}
                >&lt; Back</button>
            </div>
            <div className={s.blocks}>
                <div className={s.blcInfo}>
                    <div className={s.blcImg}>
                        <img src={data.picture.large}  alt={`${data.name.first} ${data.name.last}`}/>
                    </div>
                    <p className={s.name}>{data.name.first} {data.name.last}</p>
                    <p className={s.date}>{dd} {months(mm)} {yyyy}</p>
                    <button
                    className={s.btnDelete}
                        type="button"
                        onClick={onDelete}
                    >Delete</button>
                </div>
                <div className={s.container__input}>
                    <label className={s.label}>
                        <input
                            className={s.input}
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {data.name.first !== name&& <input className={s.btnUpdate} type='button' onClick={handleChangeName} value='Update'/>}
                        {data.name.first === name&&<input className={s.btnEdite} type='button' value='Edite'/>}
                    </label>
                    <label className={s.label}>
                        <input
                        className={s.input}
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {data.email !== email&& <input className={s.btnUpdate} type='button' onClick={handleChangeEmail} value='Update'/>}
                        {data.email === email&&<input className={s.btnEdite} type='button' value='Edite'/>}
                    </label>
                    <label className={s.label}>
                        <input
                        className={s.input}
                            type='text'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {data.phone !== phoneNumber&& <input className={s.btnUpdate} type='button' onClick={handleChangePhoneNumber} value='Update'/>}
                        {data.phone === phoneNumber&& <input className={s.btnEdite} type='button' value='Edite'/>}
                    </label>
                    <label className={s.label}>
                        <input
                        className={s.input}
                            type='text'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)
                        }/>
                        {data.location.city !== location&& <input className={s.btnUpdate} type='button' onClick={handleChangeLocation} value='Update'/>}
                        {data.location.city === location&& <input className={s.btnEdite} type='button' value='Edite'/>}
                    </label>
                    <label className={s.label}>
                        <input
                        className={s.input}
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {data.location.street.name !== address&& <input className={s.btnUpdate} type='button' onClick={handleChangeAddress} value='Update'/>}
                        {data.location.street.name === address&& <input className={s.btnEdite} type='button' value='Edite'/>}
                    </label>
                    <label className={s.label}>
                        <input
                        className={s.input}
                            type='text'
                            value={dateBirth}
                            onChange={(e) => setDateBirth(e.target.value)}
                        />
                        {birthDay !== dateBirth && <input className={s.btnUpdate} type='button' onClick={handleChangeDateBirth} value='Update'/>}
                        {birthDay === dateBirth && <input className={s.btnEdite} type='button' value='Edite'/>}
                    </label>
                </div>
            </div>
        </div>
    )
}