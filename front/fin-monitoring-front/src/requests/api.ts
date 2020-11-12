import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import {IFund, IFundAPI} from "../redux/fund-reduser";


const dev = 'https://localhost:5005'

const instance = axios.create({
    baseURL: dev,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Request-Method': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    }
})


export const fundsAPI = {
    getFunds() {
        return instance.get<Array<IFund>>(`api/Funds`)
            .then(res => {
                    console.log(res.data)
                    return res.data
                }
            )
    },
    addFund(fund: IFundAPI) {
        return instance.post("api/Funds", fund
        ).then(res => {
            console.log(res.data)
            return res.data
        })
    },
    deleteFund(id: string) {
        return instance.delete(`api/Funds/${id}`
        ).then(res => {
            console.log(res)
            return res
        })
    }
}

export interface IFundLocal {
    Id: string,
    fundName: string,
    amount: number,
    goal: number

}
