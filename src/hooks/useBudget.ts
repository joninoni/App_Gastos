import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

export const useBudget = () => {
    //BudgetContext es donde se crea el context
    const context = useContext(BudgetContext)
    
    if (!context) {
        throw new Error('useBudget must be used inside a BudgetContextProvider')
    }

    return (
        //retornamos el context para usarlo
        context
    )
}

