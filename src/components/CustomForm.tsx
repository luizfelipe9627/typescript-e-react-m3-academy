// Para usar o react temos que importar ele.

import React from "react";

// Importando o formik e tudo necessário nele para fazer a validação e criação do formulário.
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

// Criado uma interface definindo os tipos dos valores iniciais.
interface FormikValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Um objeto responsável por listar todos os campos iniciais presentes no formulário.
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const CustomForm = () => {
  // Criado uma função que está recebendo todos os valores como parâmetro tendo seus tipos definidos pela interface FormikValues.
  const handleFormSubmit = (values: FormikValues) => {};

  // No formik precisa ser passado a variável que contém um objeto com os valores iniciais e também o onSubmit que é quando o formulário for enviado executar a função definida.
  // Para associar o Field as propriedades do initialValues usamos a propriedade name.
  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
      <Form>
        <div>
          <label htmlFor="">Digite seu nome</label>
          <Field name="name" id="name" />
        </div>
      </Form>
    </Formik>
  );
};

export { CustomForm };
