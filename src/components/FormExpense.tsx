import { useState,ChangeEvent,FormEvent} from "react"
import { categories } from "../data/categories"
import { DraftExpense } from "../types"
import ErrorMesssage from "./ErrorMesssage"
import { useBudget } from "../hooks/useBudget"

const FormExpense = () => {

    const {dispatch} = useBudget()

    const [expense,setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: ""
    })

    const [error,setError] = useState("")

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const {value,name} = e.target
        const isFieldAmount = ["amount"].includes(name)
        setExpense({
            ...expense,
            [name] : isFieldAmount ? +value : value
        })
    }

    const handleChangeDate = (value : string) => {
        setExpense({
            ...expense,
            date:value
        })
    }

    //valida el formulario
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //validar los campos del formulario
        if(Object.values(expense).includes("") || Object.values(expense).includes(0) || Number(expense.expenseName)){
            setError("Hay campos vacios o el gasto es un numero")
            return
        }
        //agregamos el gasto
        dispatch({type:"add-expense",payload:{expense}})
        //reiniciamos el formulario
        setExpense(
            {
                expenseName: '',
                amount: 0,
                category: '',
                date: ""
            }
        )
    }

    return (
        <form
            className=" space-y-5"
            onSubmit={handleSubmit}
        >
            <legend className="uppercase text-center border-b-4 border-blue-500 text-2xl p-3">
                Nuevo Gasto
            </legend>

            {error && <ErrorMesssage>{error}</ErrorMesssage>}

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >
                        Nombre del gasto
                </label>
                <input
                    type="text"
                    id="expenseName"
                    className="bg-slate-100 p-2"
                    placeholder="Nombre del gasto"
                    name="expenseName"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >
                        Cantidad
                </label>
                <input
                    type="number"
                    id="amount"
                    className="bg-slate-100 p-2"
                    placeholder="Cantidad del gasto"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="category"
                    className="text-xl"
                >
                    Categoria       
                </label>
                <select
                    id="category"
                    className="bg-slate-100 p-2"
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option disabled>--Selecione</option>
                    {categories.map( category => (
                        <option 
                            value={category.id}
                            key={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="fecha"
                    className="text-xl"
                >
                        Fecha
                </label>
                <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    className="bg-slate-100 p-2"
                    value={expense.date}
                    onChange={e => handleChangeDate(e.target.value)}
                />
            </div>
            
            <input
                type="submit"
                className="bg-blue-600 w-full p-2 cursor-pointer text-white uppercase font-bold rounded-lg "
                value="Registrar gasto"
            />
        </form>
    )
}

export default FormExpense