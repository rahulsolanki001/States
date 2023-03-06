import ShowStates from "@/Components/ShowStates";
import Navbar from "@/Components/Navbar";
import Dropdown from "@/Components/Dropdown";
import "@/styles/Home.module.css"
import { connect } from "react-redux";


 function Home({theme}) {
  return (
    <div className={theme}>
      <Navbar/>
      <Dropdown/>
      <ShowStates/>

    </div>
  )
}

const mapStateToProps=(state)=>({
  theme:state.theme.theme
})

export default connect(mapStateToProps,{})(Home)