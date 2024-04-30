import { useState } from "react"

const BudgetForm = () => {

    const [budget,setBudget] = useState(0)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value)        
    }

    return (
        <form className=" space-y-5">
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
                className=" uppercase text-white bg-blue-600 p-2 rounded w-full"
            />
        </form>
    )
}

export default BudgetForm