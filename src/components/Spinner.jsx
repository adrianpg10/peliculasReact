import { FaSpinner } from "react-icons/fa";
import estilo from "./Spinner.module.css";
export function Spinner() {
    return (
        <div className={estilo.spinner}>
            <FaSpinner className={estilo.spinning} size={60}/>
        </div>
    )
}
