import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
} from "chart.js";


ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

 const options={
    responsive:true,
    plugins:{
        legend:{
            position:'top',
        },
        title:{
            display:true,
            text:""
        },
    },
};



 

const Chart=({labels,dataset,title})=>{
    const data={
        labels,
        datasets:[
            {
                label:title,
                data:dataset,
                borderColor:'rgb(255,99,132)',
                backgroundColor:'rgba(255,99,132,0.5)'
    
            }
        ]
    }
    return (
        <Line options={options} data={data} />
    )
};

export default Chart;