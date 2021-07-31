import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
  };
  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ... "
            />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What is your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FormGroup>
              <Label for="categoryId">Category</Label>
              <div>
                <Button type="button" color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLORFUL_BG}
                  alt="colorful"
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
