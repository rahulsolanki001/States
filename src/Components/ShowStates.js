import { connect } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";
import { fetchStates } from "@/actions/stateAction";
import styles from "@/styles/ShowStates.module.css";

const ShowStates=({fetchStates,states,theme})=>{

    useEffect(()=>{

        const getStates=async()=>{
           await fetchStates();
        }
        getStates();
    },[])
    return (
        <div className={styles.statesContainer}>
            {states ? states.map((state,id)=>(
                <div key={id} className={`${theme}`}>
                   <Link href={"/[name]"} as={`/${state.name}`}> <img src={state.image} alt={`${state.name} image`}/></Link>
                    <h2>{state.name}</h2>
                    <p>Population : {state.population.length>1 ? state.population[state.population.length-1].population + "M" : "No data yet"}</p>
                    <p>Capital : {state.capital}</p>
                    <p>Region : {state.region}</p>
                </div>
            )): <h1>Loading...</h1>}
        </div>
    )
};

const mapStateToProps=(state)=>({
    states:state.states.states,
    theme:state.theme.theme
})
export default connect(mapStateToProps,{fetchStates})(ShowStates);