import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {
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
                    amount={300}
                />
                <AmountDisplay
                    label="Gastado"
                    amount={200}
                />
                <AmountDisplay
                    label="Restante"
                    amount={100}
                />
                
            </div>
        </div>
    )
}

export default BudgetTracker