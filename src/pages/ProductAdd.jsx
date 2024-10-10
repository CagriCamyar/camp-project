import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import { FormField , Button, Label} from "semantic-ui-react";
import * as Yup from "yup";
import CagriCamyarTextInput from "../utilities/customFormControls/CagriCamyarTextInput";

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
            <CagriCamyarTextInput name="productName" placeholder="Urun Adi" />
            <CagriCamyarTextInput name="unitPrice" placeholder="Urun Fiyati"/>
            <Button color="green" type="submit" ></Button>
        </Form>
      </Formik>
  );
}
