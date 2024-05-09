import { categories } from "../data/categories"

const FormExpense = () => {
    return (
        <form className=" space-y-5">
            <label className="uppercase text-center border-b-4 border-blue-500 text-2xl p-3 block">
                Nuevo Gasto
            </label>

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
                />
            </div>
            
            <input
                type="submit"
                className="bg-blue-600 w-full p-2 cursor-pointer text-white uppercase font-bold rounded-lg"
                value="Registrar gasto"
            />
        </form>
    )
}

export default FormExpense