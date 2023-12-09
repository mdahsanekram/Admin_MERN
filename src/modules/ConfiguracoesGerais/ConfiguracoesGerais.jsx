import React, { useContext, useEffect, useState } from "react";
import Context from "../../components/Context";
import { InputField, SubmitButton } from "../../components/FormElements";
import "../../style/style.scss";

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

            {page == 3 && (
                <div className="main_content">
                    <div className="main_content_box">
                        <div className="header_list">
                            <ul>
                                <li>Geral</li>
                                <li>Geral</li>
                                <li>Geral</li>
                                <li>Geral</li>
                                <li>Geral</li>
                                <li>Geral</li>
                                <li>Geral</li>
                                <li>Geral</li>
                            </ul>
                        </div>
                        <div className="body_box">
                            <div className="body_box_left">
                                <h4>Editor</h4>
                                <div className="">
                                    <ul>
                                        <li>Info</li>
                                        <li>Info</li>
                                        <li>Info</li>
                                        <li>Info</li>
                                        <li>Info</li>
                                        <li>Info</li>
                                        <li>Info</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="body_box_right">
                                <h4>Visuallis</h4>
                                <div className="body_box_right_inner">
                                    <p><strong>Voo de Balsoc</strong></p>
                                    <div className="inner_content_box">
                                        <div className="inner_content_imagebox">
                                            <img src="https://placehold.co/600x400"/>
                                        </div>
                                        <div className="inner_content_contentbox">
                                            <div className="rating_box">
                                                <div className="ratings_box">
                                                    <div className="">
                                                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-16-28621.png" width={40}/>
                                                    </div>
                                                    <div className="">
                                                        <h5>5.0</h5>
                                                        <span>(1217)</span>
                                                    </div>
                                                </div>
                                                <div className="social_infobox">
                                                    <div className="social_sharebox">
                                                        <ul>
                                                            <li><img src="https://w7.pngwing.com/pngs/639/449/png-transparent-computer-icons-website-icon-text-globe-symmetry-thumbnail.png" width={20}/></li>
                                                            <li><img src="https://w7.pngwing.com/pngs/639/449/png-transparent-computer-icons-website-icon-text-globe-symmetry-thumbnail.png" width={20}/></li>
                                                            <li><img src="https://w7.pngwing.com/pngs/639/449/png-transparent-computer-icons-website-icon-text-globe-symmetry-thumbnail.png" width={20}/></li>
                                                            <li><img src="https://w7.pngwing.com/pngs/639/449/png-transparent-computer-icons-website-icon-text-globe-symmetry-thumbnail.png" width={20}/></li>
                                                            <li><img src="https://w7.pngwing.com/pngs/639/449/png-transparent-computer-icons-website-icon-text-globe-symmetry-thumbnail.png" width={20}/></li>
                                                            <li><img src="https://w7.pngwing.com/pngs/639/449/png-transparent-computer-icons-website-icon-text-globe-symmetry-thumbnail.png" width={20}/></li>
                                                        </ul>
                                                    </div>
                                                    <div className="">
                                                        <div className="">
                                                            <img src="https://www.freeiconspng.com/thumbs/phone-png/phone-png-3.png" width={20}/>
                                                        </div>
                                                        <div className="">
                                                            <p>AirTripAdventuresSC</p>
                                                            <span>Voos de Baloes</span>
                                                            <span>Paria Grande - SC</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <ul>
                                                    <li>1 Hora</li>
                                                    <li>2 Horas</li>
                                                    <li>3 Horas</li>
                                                </ul>
                                            </div>
                                            <div className="">
                                                <p><strong>RS$ 299,90</strong> por pessoca. Consult valores especiala para</p>
                                            </div>
                                            <div className="">Voos dirarre. Consulte horuirarb jfsfsdbhjjhsadjk. Entre em</div>
                                            <div className="">
                                                <div className="">Quantity</div>
                                                <div className="">
                                                    <div className="">
                                                        
                                                    </div>
                                                    <div className="">RS$ 599,90</div>
                                                </div>    
                                            </div>
                                            <div className="">
                                                <div className="">Services Adicionos</div>
                                                <div className="">
                                                    <div className="">
                                                        <div className="">Base Jump de Balio - 600m</div>
                                                        <div className="">+RS$ 199,90</div>
                                                    </div>
                                                    <div className="">
                                                        <div className="">Base Jump de Balio - 1000m</div>
                                                        <div className="">+RS$ 249,90</div>
                                                    </div>   
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="">
                                                    <h5>Agender Data:</h5>
                                                    <span>(sjahdjasdsahjkdskjdajdasjdjskdkjadjkad)</span>
                                                </div>
                                                <div className="">
                                                    <img src="data:image/png;base64,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"/>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="">Subtotal</div>
                                                <div className="">RS$ 999,60</div>
                                            </div>
                                            <div className="">
                                                <button type="button">Addition to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p>Ver Desccicao Completa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfiguracoesGerais;
