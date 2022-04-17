import { useSelector } from "react-redux";
import * as usersSelectors from '../../redux/users/users-selectors';
import * as filterSelectors from '../../redux/filter/filter-selectors'
import Pagination from "../pagination/Pagination";
import SelectDataSize from "../SelectDataSize/SelectDataSize";


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
      case "date of birth":
        visibleByRange.sort((a, b) => {
          const dateA = new Date(a.dob.date)
          const dateB = new Date(b.dob.date)
          return dateA - dateB;
        })
        break;
      case "name":
        // eslint-disable-next-line array-callback-return
        visibleByRange.sort((a, b) => {
          const nameA=a.name.first.toLowerCase()
          const nameB=b.name.first.toLowerCase()
          if(nameA < nameB) {
            return -1
          }
        })
        break;
        case "city":
          // eslint-disable-next-line array-callback-return
          visibleByRange.sort((a, b) => {
            const nameA=a.location.city.toLowerCase()
            const nameB=b.location.city.toLowerCase()
            if(nameA < nameB) {
              return -1
            }
          })
          break;
      
      default:
        break;
    }
    
  }

  // visibleByRange.sort((a, b) => )

  return (
    <>
      <ul>
        {visibleByRange.map(user => <li key={user.login.uuid}>
          <p>{user.email}</p>
          <span>{user.name.first}</span>
          <span> {user.name.last}</span>
        </li>)}
      </ul>
      <Pagination />
      <div>
        <SelectDataSize />
      </div>
    </>
  );
}


export default UsersList;
