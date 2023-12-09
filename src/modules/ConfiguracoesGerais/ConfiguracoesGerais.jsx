import React, { useContext, useEffect, useState } from "react";
import Context from "../../components/Context";
import { InputField, SubmitButton } from "../../components/FormElements";

const ConfiguracoesGerais = () => {
    const [page, setPage] = useState(0);
    const [context, setContext] = useContext(Context)
    const onCLick = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        setContext(prevState => ({
            ...prevState,
            pageTitle: "Configuracoes Gerais"
        }))
    }, [])
    return (
        <>

            {page == 0 && (
                <div className="card" style={{ width: "33rem" }}>
                    <h3
                        className="card-header"
                        style={{
                            textAlign: "center",
                            marginTop: "12px",
                            marginBottom: "5px",
                            color: "black",
                        }}
                    >
                        <i
                            className="fa fa-chevron-left"
                            aria-hidden="true"
                            style={{ float: "left" }}
                            onClick={()=>setPage(0)}
                        ></i>
                        Membrosss
                    </h3>
                    <div className="card-body" style={{ borderTop: "1px solid" }}>
                        <h6
                            className="card-title"
                            style={{ textAlign: "center", color: "black" }}
                        >
                            AtriBuir Membros
                        </h6>
                        <br />
                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"Email do novo membro"}
                                    required={"Na"}
                                />
                            </div>
                        </center>
                        <div></div>
                        <fieldset style={{ paddingLeft: "72px" }}>
                            <legend
                                style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}
                            >
                                Tipo de permissao
                            </legend>
                            <input
                                type="radio"
                                id="html"
                                style={{ accentColor: "#12d76c" }}
                                name="fav_language"
                                value="Validador de cupons"
                            />
                            <label htmlFor="html">Validador de cupons</label> {" "}
                            <input
                                type="radio"
                                style={{ accentColor: "#12d76c" }}
                                id="css"
                                name="fav_language"
                                value="Administrador"
                            />
                            <label for="css">Administrador</label>
                            <br></br>
                        </fieldset>
                        <br />
                        <p style={{ textAlign: "center" }}>
                            <i className="fa fa-plus"></i>
                            <strong style={{ color: "black" }}>Adicionar outro</strong>{" "}
                        </p>
                        <center>
                            <div style={{ width: "21rem", textAlign: "center" }}>
                                <SubmitButton
                                    type={"button"}
                                    action={() => onCLick()}
                                    title={"SALVER"}
                                />
                            </div>
                        </center>
                    </div>
                </div>
            )}
            {page == 1 && (
                <div className="card" style={{ width: "33rem" }}>
                    <h3
                        className="card-header"
                        style={{
                            textAlign: "center",
                            marginTop: "12px",
                            marginBottom: "5px",
                            color: "black",
                        }}
                    >
                        <i
                            className="fa fa-chevron-left"
                            aria-hidden="true"
                            style={{ float: "left" }}
                            onClick={()=>setPage(page-1)}
                        ></i>
                        Dados Bancarios
                    </h3>
                    <div className="card-body" style={{ borderTop: "1px solid" }}>
                        <h3
                            className="card-title"
                            style={{ textAlign: "center", color: "black" }}
                        >
                            Dados para repasse das vendas
                        </h3>
                        <br />
                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <select
                                    name="cars"
                                    id="cars"
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                >
                                    <option value="Banco">Banco</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </center>
                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"Agencia"}
                                    required={"Na"}
                                />
                            </div>
                        </center>

                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"Conta"}
                                    required={"Na"}
                                />
                            </div>
                        </center>
                        <br />
                        <center>
                            <div style={{ width: "21rem", textAlign: "center" }}>
                                <SubmitButton
                                    type={"button"}
                                    action={onCLick}
                                    title={"SALVER"}
                                />
                            </div>
                        </center>
                    </div>
                </div>
            )}

            {page == 2 && (
                <div className="card" style={{ width: "33rem" }}>
                    <h3
                        className="card-header"
                        style={{
                            textAlign: "center",
                            marginTop: "12px",
                            marginBottom: "5px",
                            color: "black",
                        }}
                    >
                        <i
                            className="fa fa-chevron-left"
                            aria-hidden="true"
                            style={{ float: "left" }}
                            onClick={()=>setPage(page-1)}
                        ></i>
                        COmplemento
                    </h3>
                    <div className="card-body" style={{ borderTop: "1px solid" }}>
                        <h3
                            className="card-title"
                            style={{ textAlign: "center", color: "black" }}
                        >
                            Outras Informaccoes
                        </h3>
                        <br />
                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"Nome do Proprietario"}
                                    required={"Na"}
                                />
                            </div>
                        </center>

                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"Telefone do Proprietario"}
                                    required={"Na"}
                                />
                            </div>
                        </center>

                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"Email do Proprietario"}
                                    required={"Na"}
                                />
                            </div>
                        </center>

                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"CPF"}
                                    required={"Na"}
                                />
                            </div>
                        </center>

                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"CNPJ"}
                                    required={"Na"}
                                />
                            </div>
                        </center>

                        <center>
                            <div
                                className="card-text"
                                style={{
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <InputField
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "22rem",
                                        height: "2.3rem",
                                        border: "1px solid black",
                                        paddingLeft: "20px",
                                    }}
                                    size="card-text"
                                    type={"text"}
                                    name={"ctext"}
                                    id={"ctext"}
                                    placeholder={"Codigo CADASTUR"}
                                />
                            </div>
                        </center>

                        <center>
                            <div
                                className="card-text"
                                style={{
                                    width: "60rem",
                                    textAlign: "center",
                                    display: "inline-flex",
                                    paddingBottom: "10px",
                                }}
                            >
                                <input
                                    style={{
                                        borderRadius: "5px",
                                        paddingLeft: "15px",
                                        width: "1.5rem",
                                        border: "1px solid black",
                                    }}
                                    type="checkbox" id="vehicle1" name="vehicle1" value="Bike"
                                />
                                <label for="vehicle1"> Concoradar com Termos de Usee Politicas de Privacidade </label><br />
                            </div>
                        </center>

                        <br />
                        <center>
                            <div style={{ width: "21rem", textAlign: "center" }}>
                                <SubmitButton
                                    type={"button"}
                                    action={onCLick}
                                    title={"SALVER"}
                                />
                            </div>
                        </center>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfiguracoesGerais;
