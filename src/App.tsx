import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget"

function App() {
  
    const {state} = useBudget()

    const isValidBudget = useMemo( ()=> state.budget > 0,[state.budget])
    
    return (
        <>
        
        <header className="bg-blue-600 py-8 max-h-72">
            <h1 className=" uppercase text-center font-black text-3xl text-white">
                Planificador de Gastos
            </h1>
        </header>

        <div className=" mx-auto max-w-3xl bg-white mt-10 p-10">

            {isValidBudget ? <BudgetTracker/> :<BudgetForm/>}
            {isValidBudget && <ExpenseModal/>}

        </div>
        
        </>
    )
}

export default App
