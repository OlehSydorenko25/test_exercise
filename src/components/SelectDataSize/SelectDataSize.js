import { useDispatch, useSelector } from "react-redux";
import * as pagActions from '../../redux/pagination/pagination-actions';
import * as pagSelectors from '../../redux/pagination/pagination-selectors';
import s from './SelectDataSize.module.css'

export default function SelectDataSize () {
    const dispatch = useDispatch()
    const defaultValue = useSelector(pagSelectors.getdataSize)

    const handleCahgeSelect = (e) => {
        dispatch(pagActions.dataSizeSuccess(e.target.value))
        dispatch(pagActions.currentPageSuccess(1))
    }
    
    return (
        <div className={s.blccangeSize}>
            <select
            className={s.select}
            onChange={handleCahgeSelect}
            defaultValue={defaultValue}
            >
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={500}>all</option>
            </select>
        </div>
    )
}