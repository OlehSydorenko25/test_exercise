import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as filterActions from '../../redux/filter/filter-actions'



export default function FilterByName () {
    const dispatch = useDispatch()
    const [filterValue, setFilterValue] = useState('')

    useEffect(() => {
        dispatch(filterActions.searchByName(filterValue))
    }, [dispatch, filterValue])

    return (
        <div>
            <label>
                <input value={filterValue} onChange={(e) => setFilterValue(e.target.value)}/>
            </label>
        </div>
    )
}