import { NavLink } from "react-router-dom";
import {months} from '../../utils/months';
import s from './UserItem.module.css';


export default function UserItem ({id, img, date, city, streetName, streetNumber, email, firstName, lastName}) {
    let birthDay = new Date(date);
    const dd = String(birthDay.getDate()).padStart(2, '0');
    const mm = String(birthDay.getMonth() + 1).padStart(2, '0');
    const yyyy = birthDay.getFullYear();

    return (
        <li className={s.item}>
            <div className={s.imgBlc}>
                <img src={img}/>
            </div>
            <div className={s.blcInfo}>
                <p className={s.name}>{firstName} {lastName}</p>
                <p className={s.date}>{dd} {months(mm)} {yyyy}</p>
                <p className={s.address}>{city}, {streetName} {streetNumber}</p>
                <p className={s.email}>{email}</p>
            </div>
            <NavLink
                to={`/user/${id}`}
                className={s.edite}
            >Edite</NavLink>
        </li>
    )
}