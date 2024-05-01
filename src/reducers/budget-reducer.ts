type BudgetActions = 
    {type : "add-budget",payload:{ budget:number }}

type BudgetState = {
    budget : number
}

const initialState : BudgetState= {
    budget : 0
}

const budgetReducer = (
    state : BudgetState = initialState,
    action : BudgetActions
) =>{
    if(action.type === "add-budget"){
        return{
            ...state,
            budget : action.payload.budget
        }
    }
}

export default budgetReducer