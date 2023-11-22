/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { useForm } from "react-hook-form"; // Importa el hook para manejar el formulario
import { toast, ToastContainer } from "react-toastify"; // Importa los componentes para mostrar las notificaciones
import "react-toastify/dist/ReactToastify.css"; // Importa el estilo de las notificaciones
import validator from "validator"; // Importa la librería para validar el correo electrónico

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Crea el objeto form con el hook useForm

  const onSubmit = (data) => {
    // Recibe los datos del formulario como un objeto
    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor o servicio de formulario
    toast.success("Form submitted successfully!"); // Muestra un mensaje de éxito con react-toastify
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-5xl font-lato inline border-b-4 border-emerald-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 font-thin">
            Submit the form below or shoot me an email - sadiluisrueda.94@gmail.com
          </p>
        </div>
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`p-2 rounded ${errors.name && "border border-red-600"}`}
          type="text"
          placeholder="Name"
          name="name"
          {...register("name", { required: true })} // Registra el campo con el objeto form
        />
        {errors.name && <p className="text-red-600">Name is required</p>} 
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`my-4 p-2 rounded ${errors.email && "border border-red-600"}`}
          type="email"
          placeholder="Email"
          name="email"
          {...register("email", {
            required: true,
            validate: (value) => validator.isEmail(value), // Valida el formato del correo con la librería validator
          })}
        />
        {errors.email && (
          <p className="text-pink-600">
            {errors.email.type === "required"
              ? "Email is required"
              : "Email is not valid"}
          </p>
        )}
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`p-2 rounded ${errors.message && "border border-red-600"}`}
          name="message"
          rows="10"
          placeholder="Message"
          {...register("message", { required: true })}
        ></motion.textarea>
        {errors.message && <p className="text-red-600">Message is required</p>}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          type="submit"
          className="text-back bg-white font-thin text-center justify-center rounded-2xl group border-2 px-4 py-2 my-2 flex items-center shadow-lg hover:duration-[3000ms] shadow-black hover:shadow-2xl hover:shadow-white hover:bg-black hover:border-emerald-500 hover:text-white"
        >
          Let's do it together
        </motion.button>
      </form>
      <ToastContainer /> 
    </motion.div>
  );
};

export default Contact;
