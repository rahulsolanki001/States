import Navbar from "@/Components/Navbar";
import axios from "axios";
import styles from "../../styles/State.module.css";
import Chart from "@/Components/Chart";
import Link from "next/link";
import { connect } from "react-redux";
const State = ({state,theme})=>{
    const populationLabels=state[0].population.map((item)=> item.year)
    const populationDataset=state[0].population.map((item)=>item.population)
    const gdpLabels=state[0].gdp.map((item)=>item.year)
    console.log(state[0])
    const gdpDataset=state[0].gdp.map((item)=>item.gdp)
    return (
        <div className={theme}>
        <Navbar/>
        <Link href="/"><button className={styles.backButton}>Back</button></Link>
        <div className={styles.container}>
            <div className={styles.image}><img src={state[0].image} alt={`${state[0].name} image`}/></div>
            <div className={styles.content}>
                <em><h1>{state[0].name}</h1></em>
                <div>
                    <p><strong>Capital :</strong>  {state[0].capital}</p>
                    <p><strong>Chief Minister :</strong>  {state[0].cheif_minister}</p>
                    <p><strong>Home Minister :</strong>  {state[0].home_minister}</p>
                    <p><strong> Region : </strong>  {state[0].region}</p>
                    <p><strong>Area : </strong>  {state[0].area} KM <sup>2</sup></p>
                    <p><strong>Literacy :</strong>  {state[0].litreacy}%</p>
                    <p><strong>Ruling Party : </strong>  {state[0].ruling_party}</p>
                    <p><strong>Coastal : </strong>{state[0].coastal ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
        <div id={styles.chart} className={theme}>
            {state[0].population.length>1 ? <Chart labels={populationLabels} dataset={populationDataset} title={"Population (Millions)"} /> : null }
            {state[0].gdp.length>1 ? <Chart labels={gdpLabels} dataset={gdpDataset} title="GDP (Lakh Crores)" /> : null }
        </div>
        </div>
    )
};


export const getServerSideProps=async(context)=>{
    const res=await axios.get(`https://rahul0405.pythonanywhere.com/api/states?search=${context.params.name}`);
    const state=await res.data;
    return {
        props:{state}
    }
}

const mapStateToProps=(state)=>({
    theme:state.theme.theme
})


export default connect(mapStateToProps,{})(State);