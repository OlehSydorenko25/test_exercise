import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as pagActions from '../../redux/pagination/pagination-actions';

export default function SelectDataSize () {
    const dispatch = useDispatch()
    const [value, setValue] = useState(10)

    useEffect(() => {
        dispatch(pagActions.dataSizeSuccess(value))
        dispatch(pagActions.currentPageSuccess(1))
    }, [dispatch, value])
    
    return (
        <div>
            <select
            onChange={(e) => setValue(e.target.value)}
            defaultValue={value}
            >
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={500}>all</option>
            </select>
        </div>
    )
}