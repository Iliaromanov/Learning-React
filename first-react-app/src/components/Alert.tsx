import { ReactNode } from "react"


interface Props {
    children: ReactNode // must name the attribute 'children'
}

const Alert = ({ children }: Props) => {

    return (
        <div className="alert alert-primary">
            {children}
        </div>
    )
}

export default Alert;
