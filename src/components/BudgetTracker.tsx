import {CircularProgressbar,buildStyles} from "react-circular-progressbar"
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"
import "react-circular-progressbar/dist/styles.css"

const BudgetTracker = () => {

    const {state,dispatch,totalExpenses,remainingBudget} = useBudget()

    const porcentage =  +(( totalExpenses / state.budget)*100).toFixed(2)

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex justify-center">
                <CircularProgressbar
                    value={porcentage}
                    styles={buildStyles({
                        pathColor: porcentage === 100 ? "#DC2626" :"#3b82f6",
                        trailColor:"#F5F5F5",
                        textSize: 8,
                        textColor: "#3b82f6"
                    })}
                    text={`${porcentage}% Gastado`}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">

                <button
                    type="button"
                    className="rounded-lg font-bold text-white uppercase bg-pink-600 w-full p-2"
                    onClick={ () => dispatch({type:"reset-app"})}
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
                    amount={remainingBudget}
                />
                
            </div>
        </div>
    )
}

export default BudgetTracker