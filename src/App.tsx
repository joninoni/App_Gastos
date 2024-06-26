import { useEffect, useMemo} from "react";
import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget"
import ExpenseList from "./components/ExpenseList";
import FilterByCategories from "./components/FilterByCategories";

function App() {
  
    const {state} = useBudget()

    const isValidBudget = useMemo( ()=> state.budget > 0,[state.budget])

    
    useEffect( () => {
        //guardo el arreglo de los gastos en localStorage y el presupuesto
        localStorage.setItem("budget",state.budget.toString())
        localStorage.setItem("expenses",JSON.stringify(state.expenses))
    },[state])

    return (
        <>
        
            <header className="bg-blue-600 py-8 max-h-72">
                <h1 className=" uppercase text-center font-black text-3xl text-white">
                    Planificador de Gastos
                </h1>
            </header>

            <div className=" mx-auto max-w-3xl bg-white mt-10 p-10">
                {isValidBudget ? <BudgetTracker/> :<BudgetForm/>}
            </div>
        
            {isValidBudget && (
                <main className="max-w-3xl mx-auto py-10">
                    <ExpenseModal/>
                    {state.expenses.length > 0 && <FilterByCategories/>}
                    <ExpenseList/>
                </main>
            )}
        </>
    )
}

export default App
