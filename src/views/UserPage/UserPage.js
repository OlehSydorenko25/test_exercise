import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserEditor from '../../components/UserEditor/UserEditor';
import * as usersSelectors from '../../redux/users/users-selectors';
import s from './UserPage.module.css';


export default function UserPage (props) {
    const params = useParams()
    const userId = params.id

    const allUsers = useSelector(usersSelectors.getUsers)
    const user = allUsers.find(user => user.login.uuid === userId)
    console.log(user);

    return(
        <div>
            <UserEditor data = {user}/>
        </div>
    )
}