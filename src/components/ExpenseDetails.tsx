import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"
import { Expense } from "../types"
type ExpenseDetailsProps = {
    expense : Expense
}


const ExpenseDetails = ({expense} : ExpenseDetailsProps) => {

    const categoryInfo = categories.filter( cat => cat.id === expense.category)[0]
   
    return (
        <div className="bg-white shadow-lg p-10 w-full border border-gray-200 flex gap-5 items-center">
            <div>
                <img className=" w-20" src={`../../public/img/icono_${categoryInfo.icon}.svg`} alt="icono de categoria"/>
            </div>
            <div className="flex-1 space-y-2">
                <p className="text-sm font-bold uppercase text-slate-500">
                    <span className="font-bold text-black">Categoria: {""}</span>
                    {categoryInfo.name}
                </p>
                <p className="text-sm font-bold uppercase text-slate-500 ">
                    <span className="font-bold text-black">Nombre: {""}</span>
                    {expense.expenseName}
                </p>
                <p className="text-slate-600 text-sm">
                    <span className="font-bold text-black">Fecha: {""}</span>
                    {expense.date}
                </p>
            </div>

            <AmountDisplay
                amount={expense.amount}
            />
        </div>
    )
}

export default ExpenseDetails 