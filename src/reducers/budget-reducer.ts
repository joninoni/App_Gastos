import { Categories, DraftExpense,Expense } from "../types"

export type BudgetActions = 
    {type : "add-budget",payload:{ budget:number }} |
    {type : "show-modal"} |
    {type : "close-modal"} |
    {type : "add-expense",payload:{ expense:DraftExpense}} |
    {type : "remove-expense", payload:{ id : Expense["id"]}} |
    {type : "get-expense-by-id",payload:{id : Expense["id"]}} |
    {type : "edit-expense",payload:{expense : Expense}} |
    {type : "reset-app"} |
    {type : "filter-by-category",payload:{id : Categories["id"]}}

    const initialBudget = () : number => {
        const localStorageBudget = localStorage.getItem("budget")
        return localStorageBudget ? +localStorageBudget : 0
    }
    
    const localStorageExpenses = () : Expense[] => {    
        const localStorageExpenses = localStorage.getItem("expenses")
        return localStorageExpenses && localStorageExpenses !== "undefined" ? JSON.parse(localStorageExpenses) : []
    }

export  type BudgetState = {
    budget : number
    modal : boolean
    expenses : Expense[]
    editingId : Expense["id"]
    currentCategory : Categories["id"]
}

export const initialState : BudgetState= {
    budget : initialBudget(),
    modal : false,
    expenses : localStorageExpenses(),
    editingId : "",
    currentCategory : ""
}

const expense = (draftExpense : DraftExpense) :Expense => {
    return {
        ...draftExpense,
        id : crypto.randomUUID()
    }
}

export const budgetReducer = (
    state : BudgetState = initialState,
    action : BudgetActions
) =>{

    if(action.type === "add-budget"){
        return{
            ...state,
            budget : action.payload.budget
        }
    }

    if(action.type === "show-modal"){ 
        return{
            ...state,
            modal : true,
        }
    }

    if(action.type === "close-modal"){
        return{
            ...state,
            modal : false,
            editingId: "",
        }
    }

    if(action.type === "add-expense"){
        const createExpense= expense(action.payload.expense)
        return{
            ...state,
            expenses : [...state.expenses,createExpense],
            modal : false,
        }
    }

    if(action.type === "remove-expense"){
        return{
            ...state,
            expenses : state.expenses.filter( expense => expense.id !== action.payload.id)
        }
    }

    if(action.type === "get-expense-by-id"){
        return{
            ...state,
            editingId : action.payload.id,
            modal : true,
        }
    }

    if(action.type === "edit-expense"){
        const updeteExpense = state.expenses.map( expense => expense.id === action.payload.expense.id ? action.payload.expense : expense)
        return{
            ...state,
            expenses : updeteExpense,
            modal : false,
            editingId : ""
        }
    }

    if(action.type === "reset-app"){
        return{
            ...state,
            budget : 0,
            expenses : [],
            currentCategory : "",
        }
    }

    if(action.type === "filter-by-category"){   
        return{
            ...state,
           currentCategory : action.payload.id,
        }
    }

    return state
}

export default budgetReducer