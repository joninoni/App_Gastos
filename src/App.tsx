import BudgetForm from "./components/BudgetForm"

function App() {
  
    return (
        <>
        
        <header className="bg-blue-600 py-8 max-h-72">
            <h1 className=" uppercase text-center font-black text-3xl text-white">
                Planificador de Gastos
            </h1>
        </header>

        <div className=" mx-auto max-w-3xl bg-white mt-10 p-10">
            <BudgetForm/>
        </div>
        
        </>
    )
}

export default App
