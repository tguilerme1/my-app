import { useFormik } from "formik";
import * as Yup from "yup";
import "./contacto.scss";

const Contacto = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", mensaje: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("El campo nombre es requerido.")
        .max(30, "El campo nombre tiene como máximo 20 caracteres"),
      email: Yup.string()
        .required("El campo email es requerido.")
        .email("El formato del email es incorrecto."),
      telefono: Yup.number()
        .typeError("Eso no parece un numero de teléfono.")
        .required("El campo teléfono es requerido.")
        .integer("El número de teléfono no puede tener una coma.")
        .min(1000000000, "El número de teléfono debe tener 10 caracteres.")
        .max(9999999999, "El número de teléfono debe tener 10 caracteres."),
      mensaje: Yup.string()
        .required("El campo email es requerido.")
        .max(500, "El campo mensaje tiene un máximo de 500 caracteres."),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Sus datos fueron enviados correctamente");
    },
  });

  return (
    <div className="contacto-content" id="contacto">
      <div className="titulos">
        <h1 className="titulo-arriba">¡Contactanos hoy!</h1>
        <h2 className="titulo-abajo">Solicita información con nosotros.</h2>
      </div>
      <form onSubmit={formik.handleSubmit} className="formulario">
        <div className="campos-form">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            className="datos-form"
            placeholder="ej: Juan Pérez"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="errors">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="campos-form">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="datos"
            placeholder="persona@ejemplo.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="errors">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="campos-form">
          <label>Teléfono (sin el 0 ni el prefijo 15) </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="datos"
            placeholder="ej: 1122334455"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telefono}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="errors">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="campos-form">
          <label>Mensaje</label>
          <input
            type="text"
            name="mensaje"
            id="mensaje"
            className="datos"
            placeholder="Su mensaje..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mensaje}
          />
          {formik.touched.mensaje && formik.errors.mensaje ? (
            <div className="errors">{formik.errors.mensaje}</div>
          ) : null}
        </div>
        <input type="submit" value="Enviar" id="boton-enviar" />
      </form>
    </div>
  );
};

export default Contacto;
