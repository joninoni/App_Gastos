import { useMemo } from "react"
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"

const BudgetTracker = () => {

    const {state} = useBudget()

    const totalExpenses = useMemo( ()=> state.expenses.reduce( (acc,el) => el.amount + acc ,0),[state.expenses])

    const restante =  state.budget - totalExpenses 
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex justify-center">
                <img src="../public/img/grafico.jpg" alt="imagen de grafico" />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">

                <button
                    type="button"
                    className="rounded-lg font-bold text-white uppercase bg-pink-600 w-full p-2"
                >
                    Resetear App
                </button>

                <AmountDisplay
                    label="Presupuesto"
                    amount={state.budget}
                />
                <AmountDisplay
                    label="Gastado"
                    amount={totalExpenses}
                />
                <AmountDisplay
                    label="Restante"
                    amount={restante}
                />
                
            </div>
        </div>
    )
}

export default BudgetTracker