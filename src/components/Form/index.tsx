import { useState } from "react";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import {
  Formik,
  Form as FormikForm,
  ErrorMessage,
  Field,
  FieldProps,
} from "formik";
import { FiArrowDownRight } from "react-icons/fi";
import styles from "./index.module.scss";

interface Data {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Form: React.FC = () => {
  const [dataError, setDataError] = useState();
  const [data, setData] = useState<Data>();
  const [isSuccess, setIsSuccess] = useState(false);

  const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  const handleSubmit = async (data: Data, resetForm: any) => {
    console.log(data);
    try {
      setData(data);
      resetForm();
      setIsSuccess(true);
    } catch (err: any) {
      setDataError(err);
    }
  };

  const formSchema = Yup.object({
    name: Yup.string()
      .min(3, "Nome deve conter pelo menos 3 caracteres")
      .required("Nome é obrigatório"),
    email: Yup.string().email(" ").required("E-mail é obrigatório"),
    phone: Yup.string().required("Telefone é obrigatório"),
    message: Yup.string()
      .min(10, "Mínimo 10 caracteres")
      .max(500, "Limite máximo de 500 caracteres")
      .required("Mensagem é obrigatória"),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={formSchema}
        onSubmit={(data, { resetForm }) => {
          handleSubmit(data, resetForm);
        }}
      >
        {({ errors, touched, isSubmitting, handleSubmit, isValid }) => (
          <FormikForm
            className={styles.form}
            name="contact"
            method="post"
            onSubmit={handleSubmit}
          >
            <label htmlFor="reachout">Nome:</label>
            <Field
              className={styles.nameInput}
              type="text"
              name="name"
              autoCorrect="off"
              autoComplete="name"
              placeholder="Your name*"
              valid={touched.name && !errors.name}
              error={touched.name && errors.name}
            />
            {errors.name && touched.name && <p>{errors.name}</p>}
            <div className={styles.wrapper}>
              <div className={styles.emailContainer}>
                <label htmlFor="">E-mail:</label>
                <Field
                  className={styles.emailInput}
                  type="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="email"
                  placeholder="Your email*"
                  valid={touched.email && !errors.email}
                  error={touched.email && errors.email}
                />
                <ErrorMessage name="email">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className={styles.phoneContainer}>
                <label htmlFor="">Telefone:</label>
                <Field
                  class={styles.phoneInput}
                  name="phone"
                  valid={touched.phone && !errors.phone}
                  error={touched.phone && errors.phone}
                  render={({ field }: FieldProps) => (
                    <MaskedInput
                      {...field}
                      mask={phoneNumberMask}
                      placeholder="Enter your phone number"
                      type="text"
                    />
                  )}
                />
                <ErrorMessage name="phone">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
              </div>
            </div>
            <label htmlFor="">Mensagem:</label>
            <Field
              className={styles.textAreaInput}
              component="textarea"
              name="message"
              autoCapitalize="on"
              autoCorrect="off"
              autoComplete="off"
              placeholder="Your message*"
              valid={touched.message && !errors.message}
              error={touched.message && errors.message}
            />
            <ErrorMessage name="message">{(msg) => <p>{msg}</p>}</ErrorMessage>
            <button type="submit" disabled={!isValid}>
              <span>
                ENVIAR
                <FiArrowDownRight size={20} />
              </span>
            </button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
