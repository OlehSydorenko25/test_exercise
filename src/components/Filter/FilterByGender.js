import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as filterActions from '../../redux/filter/filter-actions'



export default function FilterByName () {
    const dispatch = useDispatch()
    const [filterGender, setFilterGender] = useState('')

    useEffect(() => {
        dispatch(filterActions.filterByGender(filterGender))
    }, [dispatch, filterGender])

    const handleChandeGender = (e) => {
        const value = e.target.value
        if(filterGender === value) {
            setFilterGender('')
            return
        }
        setFilterGender(value)
    }

    return (
        <div>
            <label>
                <input
                    value={"Male"}
                    type="button"
                    onClick={handleChandeGender}
                />

                <input
                    value={"Female"}
                    type="button"
                    onClick={handleChandeGender}
                />
                
            </label>
        </div>
    )
}