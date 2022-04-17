import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as filterActions from '../../redux/filter/filter-actions';

export default function SelectDataSize () {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    useEffect(() => {
        dispatch(filterActions.sortBy(value))
        dispatch(filterActions.searchByName(""))
        dispatch(filterActions.filterByGender(""))
        dispatch(filterActions.filterbyRange([0, 100]))
    }, [dispatch, value])
    
    return (
        <div>
            <select
            onChange={(e) => setValue(e.target.value)}
            >
                <option value={""}></option>
                <option value={"name"}>Name</option>
                <option value={"date of birth"}>Date of birth</option>
                <option value={"city"}>city</option>
                <option value={"custom sort"}>custom sort</option>
            </select>
        </div>
    )
}