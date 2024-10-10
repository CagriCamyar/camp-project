import { Form, Formik, Field } from "formik";
import React from "react";
import { FormField , Button} from "semantic-ui-react";
import * as Yup from "yup";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Urun Adi Zorunlu"),
    unitPrice: Yup.number().required("Urun Fiyati Zorunludur"),
  });

  return (
      <Formik
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>(
        console.log(values)
      )}
      >
        <Form className="ui form">
          <FormField>
            <Field name="productName" placeholder="Urun Adi"></Field>
          </FormField>
          <FormField>
          <Field name="unitPrice" placeholder="Urun Fiyati"></Field>
          </FormField>
          <Button color="green" type="submit">Submit</Button>
        </Form>
      </Formik>
  );
}
