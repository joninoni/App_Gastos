import { PropsWithChildren } from "react"

const ErrorMesssage = ({children} : PropsWithChildren) => {
    return (
        <p className="bg-red-600 p-2 text-white text-center font-bold">{children}</p>
    )
}

export default ErrorMesssage