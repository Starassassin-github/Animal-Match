// import
import { useState, useRef, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";

// helper
import { validation, formValues } from './validationSchema';
import { errorHelper, Loader } from '../../../utils/tools';

// MUI
import {  styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';


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

export default function CreatePost() {

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formValues,
        validationSchema: validation,
        onSubmit: (values) => {
            console.log(values);
            console.log(images);
        },
    });

    return (
        <div>
            <div className="flex flex-nowrap text-center bg-[#EBC8F1] ">
                <div className="h-screen w-screen bg-[#EBC8F1]">
                    <h1 className="text-2xl text-[#Ee3cea] my-2">Create Post</h1>
                    <form className="mt-[3px] bg-[#EBC8F1]" onSubmit={formik.handleSubmit}>

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
                                helperText="*You need explain description more max 200"
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
                                <MenuItem value="other">อื่นๆ</MenuItem>
                            </Select>
                            {formik.errors.type && formik.touched.type ? (
                                <FormHelperText error={true}>
                                    {formik.errors.type}
                                </FormHelperText>
                            ) : null}
                        </FormControl>

                        <div className="mt-3">
                            <CssTextField
                                className="border-none"
                                type="text"
                                inputProps={{ style: { color: "blue" } }}
                                style={{ width: "40%", backgroundColor: "#f2abed" }}
                                name="location"
                                label="Enter a Location"
                                variant="outlined"
                                multiline
                                rows={2}
                                helperText="*You need explain location more max 150"
                                {...formik.getFieldProps("location")}
                                {...errorHelper(formik, "location")}
                            />
                        </div>

                        <div className="mt-5">
                            <div className="flex flex-row flex-wrap justify-around grid-cols-3">
                                {
                                    Array.from(images).map(item => {
                                        return (
                                            <div>
                                                <img
                                                    key={item + Date.now()}
                                                    className="p-[10px] w-[300px] h-fit sm:[300px]"
                                                    src={item ? URL.createObjectURL(item) : null} />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <input
                                    size="60"
                                    // className="border-4 border-solid bg-gray-50 rounded-lg border-purple-600 overflow-hidden cursor-pointer text-fuchsia-500 inline-block dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    className="text-sm text-grey-500
                                    file:mr-5 file:py-3 file:px-10
                                    file:rounded-full file:border-0
                                    file:text-md file:font-semibold  file:text-white
                                    file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                                    hover:file:cursor-pointer hover:file:opacity-80 p-2 border-solid border-4 border-blue-500 rounded-lg"
                                    onChange={(e) => {
                                        setImages(e.target.files)
                                    }}
                                    multiple
                                    type="file"
                                />
                            </div>


                        </div>

                        <div className="mt-8">
                            <button
                                className="transition ease-in-out delay-150 bg-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                variant='contained'
                                type="submit"
                            >
                                Add Post
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}