import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

const BudgetForm = () => {

    const {dispatch} = useBudget()

    const [budget,setBudget] = useState(0)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value)        
    }

    const isValid = useMemo( ()=>{
        //verifico que sea un numero y que sea mayor a cero
        return isNaN(budget) || budget <=0
    },[budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //guardo el budget que es el estado en el reducer
        dispatch({type:"add-budget",payload:{budget}})
    }

    return (
        <form
            className=" space-y-5"
            onSubmit={handleSubmit}
        >
            <div className=" space-y-5 flex flex-col">

                <label
                    htmlFor="budget"
                    className="text-center text-4xl font-bold text-blue-600">
                        Definir presupuesto
                </label>

                <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                    placeholder="Define el presupuesto"
                    className=" w-full bg-white border border-gray-200 p-2 rounded-lg"
                />

            </div>

            <input type="submit"
                value="Enviar presupuesto"
                className=" uppercase text-white bg-blue-600 p-2 rounded w-full disabled:opacity-40"
                disabled={isValid}
            />
        </form>
    )
}

export default BudgetForm