import { useSelector } from "react-redux";
import * as usersSelectors from '../../redux/users/users-selectors';
import * as filterSelectors from '../../redux/filter/filter-selectors'
import Pagination from "../pagination/Pagination";
import SelectDataSize from "../SelectDataSize/SelectDataSize";
import UserItem from '../UserItem/UserItem';
import s from './UsersList.module.css'


function UsersList() {
  const users = useSelector(usersSelectors.getUsers)
  const filterName = useSelector(filterSelectors.search)
  const filterGender = useSelector(filterSelectors.genderMale)
  const rangeSlider = useSelector(filterSelectors.rangeSlider)
  const sortBy = useSelector(filterSelectors.getSort)

  const visibleUsers = users.filter(user => user.name.first.toLowerCase().includes(filterName.toLowerCase()))

  const visibleByGander = visibleUsers.filter((user) => {
    if(filterGender === '') {
      return user
    }
    return user.gender.toLowerCase() === filterGender.toLowerCase()
  })

  const visibleByRange = visibleByGander.filter(user => user.dob.age >= rangeSlider[0] && user.dob.age <= rangeSlider[1]) 
  console.log(visibleByRange);

  if(sortBy !== '') {
    switch (sortBy) {
      case "date of birth 0-9":
        visibleByRange.sort((a, b) => {
          const dateA = new Date(a.dob.date)
          const dateB = new Date(b.dob.date)
          return dateA - dateB;
        })
        break;
      
      case "date of birth 9-0":
        visibleByRange.sort((a, b) => {
          const dateA = new Date(a.dob.date)
          const dateB = new Date(b.dob.date)
          return dateB - dateA;
        })
        break;

      case "nameAZ":
        // eslint-disable-next-line array-callback-return
        visibleByRange.sort((a, b) => {
          const nameA=a.name.first.toLowerCase()
          const nameB=b.name.first.toLowerCase()
          if(nameA < nameB) {
            return -1
          }
        })
        
        break;

      case "nameZA":
        // eslint-disable-next-line array-callback-return
        visibleByRange.sort((a, b) => {
          const nameA=a.name.first.toLowerCase()
          const nameB=b.name.first.toLowerCase()
          if (nameA < nameB) {
            return -1
          }
        })
        visibleByRange.reverse()
        break;
  
      case "cityAZ":
        // eslint-disable-next-line array-callback-return
        visibleByRange.sort((a, b) => {
          const nameA=a.location.city.toLowerCase()
          const nameB=b.location.city.toLowerCase()
          if(nameA < nameB) {
            return -1
          }
        })
        break;

      case "cityZA":
        // eslint-disable-next-line array-callback-return
        visibleByRange.sort((a, b) => {
          const nameA=a.location.city.toLowerCase()
          const nameB=b.location.city.toLowerCase()
          if(nameA < nameB) {
            return -1
          }
        })
        visibleByRange.reverse()
        break;
    
      default:
        break;
    }
    
  }

  return (
    <>
      <ul>
        {visibleByRange.map(user =>
        <UserItem
          key={user.login.uuid}
          img={user.picture.large}
          id = {user.login.uuid}
          date={user.dob.date}
          city={user.location.city}
          streetName={user.location.street.name}
          streetNumber={user.location.street.number}
          email = {user.email}
          firstName = {user.name.first}
          lastName = {user.name.last}/>
        )}
      </ul>
      <div className={s.bottomBlc}>
        <Pagination />
        <SelectDataSize />
      </div>
    </>
  );
}


export default UsersList;
