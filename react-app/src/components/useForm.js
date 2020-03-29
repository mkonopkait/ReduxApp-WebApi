import React, {useState, useEffect} from "react"

const useForm = (initailFieldValues) => {
    const {values, setValues} = useState(initailFieldValues)

    const habdleInputChange = e => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values,
        setValues,
        habdleInputChange
    };
}

export default useForm;