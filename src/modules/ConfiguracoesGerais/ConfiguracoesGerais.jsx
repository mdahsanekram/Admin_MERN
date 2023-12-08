import { useContext, useEffect } from "react";
import Context from "../../components/Context";

const ConfiguracoesGerais = () => {

    const [context, setContext] = useContext(Context)

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Pagina Inicial"
        }))
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center text-center text-dark h-auto py-5">
                    <i className="bi bi-emoji-smile fs-1"></i>
                    <h1>Work in progress</h1>
                </div>
            </div>
        </>
    )
}

export default ConfiguracoesGerais;