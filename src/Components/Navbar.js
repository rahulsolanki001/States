import styles from "@/styles/Navbar.module.css";
import { connect } from "react-redux";
import { changeTheme } from "@/actions/themeAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faCloudMoon,faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar=({theme,changeTheme})=>{

    const updateTheme=()=>{
        let themeUpdated;
        if(theme==="light")
            {themeUpdated="dark"}
        else{
            themeUpdated="light"
        }
        changeTheme(themeUpdated);
    }
    return (
        <nav className={styles.navbar}>
            <h1>Where in India ?</h1>
            <p onClick={()=>updateTheme()}><FontAwesomeIcon icon={theme==="light" ? faLightbulb : faMoon}/> {theme[0].toUpperCase()+theme.slice(1)} Mode</p>
        </nav>
    )
}

const mapStateToProps=(state)=>({
    theme:state.theme.theme
})

export default connect(mapStateToProps,{changeTheme})(Navbar);