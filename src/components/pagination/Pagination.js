import { useDispatch, useSelector } from 'react-redux';
import * as pagSelectors from '../../redux/pagination/pagination-selectors';
import * as pagActions from '../../redux/pagination/pagination-actions';
import createPages from '../../utils/pagesCreator'
import './Pagination.css';


function Pagination() {
  const dispatch = useDispatch()

  const currentPage = useSelector(pagSelectors.getCurrentPage)
  const totalNumberUsers =useSelector(pagSelectors.getTotalNumberUsers)
  const dataSize =useSelector(pagSelectors.getdataSize)
  const pagesCount = Math.ceil(totalNumberUsers/dataSize)

  const pages = []
  createPages(pages, pagesCount, currentPage)

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
          {currentPage !== pagesCount
          &&
          <button
          onClick = {() => dispatch(pagActions.currentPageSuccess(currentPage + 1))}
          >NEXT PAGE &gt;</button>}
          
      </div>
    );
}


export default Pagination;
