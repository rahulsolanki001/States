import { fetchStatesByRegion } from "@/actions/stateAction";
import { connect } from "react-redux";
import styles from "../styles/Dropdown.module.css";
const Dropdown=({fetchStatesByRegion,theme})=>{
    return (
        <div className={styles.regionDropdown}>
           
            <select name="regions" onChange={(e)=>fetchStatesByRegion(e.currentTarget.value)}>
                <option value="All">All</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="Center">Center</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North-East">North-East</option>
            </select>
        </div>
    )
};

const mapStateToProps=(state)=>({
    theme:state.theme.theme
}
)

export default connect(mapStateToProps,{fetchStatesByRegion})(Dropdown);