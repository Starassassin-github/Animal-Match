import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


import { validation, formValues } from "./validationSchema";

import { errorHelper, Loader } from "../../../utils/tools";

// MUI
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import { visuallyHidden } from "@mui/utils";



const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "purple",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#FF31E9",
        },
        "&:hover fieldset": {
            borderColor: "yellow",
        },
        "&.Mui-focused fieldset": {
            borderColor: "purple",
        },
    },
});

const CreatePost = () => {


    const formikProps = {
        enableReinitialize: true,
        initialValues: formValues,
        validationSchema: validation,
        onSubmit: values => {
            console.log(values)
        }
    }


    return (
        <div className="flex flex-nowrap text-center bg-[#EBC8F1] ">
            <div className="h-screen w-screen bg-[#EBC8F1]">
                <h2>Create Post</h2>
                <Formik {...formikProps}>
                    {formik => (
                        <Form>
                            <div className="mt-3">
                                <CssTextField
                                    type="text"
                                    size="small"
                                    inputProps={{ style: { color: "blue" } }}
                                    style={{ width: "40%", backgroundColor: "#f2abed" }}
                                    name="title"
                                    color="secondary"
                                    label="Enter a Name"
                                    variant="outlined"
                                    {...formik.getFieldProps("title")}
                                    {...errorHelper(formik, "title")}
                                />
                            </div>

                            <div className="mt-3">
                                <CssTextField
                                    type="text"
                                    size="small"
                                    inputProps={{ style: { color: "blue" } }}
                                    style={{ width: "40%", backgroundColor: "#f2abed" }}
                                    name="age"
                                    color="secondary"
                                    label="Enter a Age"
                                    variant="outlined"
                                    {...formik.getFieldProps("age")}
                                    {...errorHelper(formik, "age")}
                                />
                            </div>

                            <div className="mt-3">
                                <CssTextField
                                    inputProps={{ style: { color: "blue" } }}
                                    style={{ width: "40%", backgroundColor: "#f2abed" }}
                                    name="description"
                                    size="small"
                                    color="secondary"
                                    label="Enter a Description"
                                    variant="outlined"
                                    {...formik.getFieldProps("description")}
                                    {...errorHelper(formik, "description")}
                                    multiline
                                    rows={2}
                                />
                            </div>

                            <div className="mt-3">
                                <CssTextField
                                    inputProps={{ style: { color: "blue" } }}
                                    style={{ width: "40%", backgroundColor: "#f2abed" }}
                                    name="rich_description"
                                    color="secondary"
                                    label="Enter a Rich Description"
                                    variant="outlined"
                                    {...formik.getFieldProps("rich_description")}
                                    {...errorHelper(formik, "rich_description")}
                                    helperText="*Optional if you need explain description more max 500"
                                    multiline
                                    rows={4}
                                />
                            </div>

                            <div>
                                <FormControl style={{ marginTop: 12, width: "40%" }}>
                                    <InputLabel>Select a type</InputLabel>
                                    <Select
                                        inputProps={{ style: { color: "blue" } }}
                                        style={{ backgroundColor: "#f2abed" }}
                                        name="type"
                                        variant="filled"
                                        label="Select a type"
                                        {...formik.getFieldProps("type")}
                                        error={formik.errors.type && formik.touched.type ? true : false}
                                    >
                                        <MenuItem value="cat">Cat</MenuItem>
                                        <MenuItem value="dog">Dog</MenuItem>
                                    </Select>
                                    {formik.errors.type && formik.touched.type ? (
                                        <FormHelperText error={true}>
                                            {formik.errors.type}
                                        </FormHelperText>
                                    ) : null}
                                </FormControl>
                            </div>

                            <div className="mt-3">
                                <CssTextField
                                    type="text"
                                    inputProps={{ style: { color: "blue" } }}
                                    style={{ width: "40%", backgroundColor: "#f2abed" }}
                                    name="location"
                                    label="Enter a Location"
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                    {...formik.getFieldProps('location')}
                                    {...errorHelper(formik, 'location')}
                                />
                            </div>

                            <button className="bg-[#EBC8F1]" type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    )
}

export default CreatePost;