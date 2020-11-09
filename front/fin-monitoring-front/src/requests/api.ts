import axios from "axios";
import {Simulate} from "react-dom/test-utils";


const dev = 'https://localhost:44361'

const instance = axios.create({
    baseURL: dev,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Request-Method': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin':'*'
    }
})


export const fundsAPI = {
    getFunds() {
        return instance.get<IFund>(`api/Funds`
        )
            .then(res => {
                    return res.data
                    console.log(res.data)
                }
            )
            .catch(res => console.log(res))
    },
}

interface IFund {
    id: string,
    fundName: string,
    amount: number,
    goal: number

}
