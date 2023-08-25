import React from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

import user from "../images/user.png";
import mail from "../images/mail.svg";
import msg from "../images/Vector.svg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section id="contact">
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          width: "37.5%",
          margin: "3rem auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                textAlign: "center",
              }}
            >
              Fale Comigo!
            </h2>
            <p
              style={{
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              Alguma duvida? Entre em contato comigo!
            </p>
          </div>
        </div>
      </div>
      <div className="app-container">
        <div className="form-group">
          <label htmlFor="Input1">
            <img alt="usuario" src={user}></img>
            Nome
          </label>
          <input
            id="Input1"
            className={errors?.name && "input-error"}
            type="text"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <p className="error-message">Nome é nescessário.</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="Input2">
            <img alt="mail" src={mail}></img>
            E-mail
          </label>
          <input
            id="Input2"
            className={errors?.email && "input-error"}
            type="email"
            {...register("email", {
              required: true,
              validate: (value) => isEmail(value),
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error-message">Email é nescessário.</p>
          )}

          {errors?.email?.type === "validate" && (
            <p className="error-message">Email não é válido.</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="TextArea">
            <img alt="msg" src={msg}></img>
            Mensagem
          </label>
          <textarea
            id="TextArea"
            className={errors?.msg && "input-error"}
            type="text"
            {...register("name", { required: true })}
          />
          {errors?.msg?.type === "required" && (
            <p className="error-message">Mensagem é necessária.</p>
          )}
        </div>

        <div
          className="form-group"
          style={{
            alignItems: "end",
            marginBottom: "70px",
          }}
        >
          <button
            onClick={() => handleSubmit(onSubmit)()}
            style={{
              width: "287px",
              height: "82px",
              borderRadius: "40px",
              backgroundColor: "black",
              color: "white",
              fontSize: "19px",
              fontWeight: "500",
            }}
          >
            ENVIAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
