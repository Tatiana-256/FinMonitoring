import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import {ICategory} from "../Fin-Redux/Category/category-reduser";


const dev = 'https://localhost:5005'

const instance = axios.create({
    baseURL: dev,
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    }
})


export const categoryAPI = {
    getCategory() {
        return instance.get<Array<ICategory>>(`api/Category`)
            .then(res => {
                    console.log(res.data)
                    return res.data
                }
            )
    }
    // ,
    // addFund(fund: IFundAPI) {
    //     return instance.post("api/Funds", fund
    //     ).then(res => {
    //         console.log(res.data)
    //         return res.data
    //     })
    // },
    // editFund(id: string, fund: IFundAPI) {
    //     return instance.put(`api/Funds/${id}`, fund).then(res => {
    //         console.log(res.data)
    //         return res.data
    //     })
    // },
    // deleteFund(id: string) {
    //     return instance.delete(`api/Funds/${id}`
    //     ).then(res => {
    //         console.log(res)
    //         return res
    //     })
    // }
}


