import {createContext, useReducer,useMemo, Dispatch, ReactNode } from "react"
import {BudgetActions, BudgetState, budgetReducer,initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state : BudgetState
    dispatch : Dispatch<BudgetActions>
    totalExpenses : number
    remainingBudget : number
}

type BudgetProviderProps = {
    children : ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state,dispatch] = useReducer(budgetReducer,initialState)

    const totalExpenses = useMemo( ()=> state.expenses.reduce( (acc,el) => el.amount + acc ,0),[state.expenses])

    const remainingBudget =  state.budget - totalExpenses 

    return(
        <BudgetContext.Provider value={{
            state,
            dispatch,
            totalExpenses,
            remainingBudget,
        }}>
            {children}
        </BudgetContext.Provider>
    )
}