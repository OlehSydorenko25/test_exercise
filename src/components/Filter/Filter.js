import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import RangeSlider from './RangeSlider';
import Sort from './Sort'



export default function Filter () {

    return (
        <div>
            <FilterByName />
            <RangeSlider />
            <FilterByGender />
            <Sort />
        </div>
    )
}