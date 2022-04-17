// import { useSelector } from "react-redux";
// import * as usersSelectors from '../redux/users/users-selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as pagSelectors from '../../redux/pagination/pagination-selectors';
import * as pagActions from '../../redux/pagination/pagination-actions'
import './Pagination.css';

const pages = [1, 2, 3, 4, 5]

function Pagination() {
  const dispatch = useDispatch()

  const currentPage = useSelector(pagSelectors.getCurrentPage)

    return (
      <div className='pagination'>
          {pages.map((page, index) => {
            return (<div 
              key={index} 
              onClick = {() => dispatch(pagActions.currentPageSuccess(page))}
              className={currentPage === page ? 'current__page' : 'page'}>
              {page}
            </div>)
          })}
      </div>
    );
}


export default Pagination;
