import { React, useState } from "react";
import AxiosInstance from "./axios";

const Create = () => {
    const [country, setCountry] = useState({})
    const GetData = () => {
        AxiosInstance.get('country/').then((res) => {
            setCountry(res.data)
        })
    }
    return (
        <div>
            This is the create page
        </div>
    )
}

export default Create