// import

import { useState, useRef, useEffect } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";

// helper
import { validation, formValues } from './validationSchema';
import { errorHelper, Loader } from '../../../utils/tools';

// image
import ImageTestPost from '../../../images/ImageTestPost.jpg';
import LikePostButton from '../../../images/LikePostButton.png';
import DislikeButton from '../../../images/DislikeButton.png';

// MUI
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import SelectUnstyled from '@mui/base/SelectUnstyled';
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

import InputLabel from '@mui/material/InputLabel';
import AddIcon from '@mui/icons-material/Add';
import { visuallyHidden } from '@mui/utils';



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
                    <h2>Create Post</h2>
                    <form className="mt-[3px]" onSubmit={formik.handleSubmit}>

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
                            </Select>
                            {formik.errors.type && formik.touched.type ? (
                                <FormHelperText error={true}>
                                    {formik.errors.type}
                                </FormHelperText>
                            ) : null}
                        </FormControl>

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
                                {...formik.getFieldProps("location")}
                                {...errorHelper(formik, "location")}
                            />
                        </div>

                        <div>
                            <div className="flex flex-row flex-wrap justify-around grid-cols-3">
                                {
                                    Array.from(images).map(item => {
                                        return (
                                            <span>
                                                <img
                                                    key={item + Date.now()}
                                                    className="p-[10px] w-[150px] h-fit"
                                                    src={item ? URL.createObjectURL(item) : null} />
                                            </span>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <input
                                    onChange={(e) => {
                                        setImages(e.target.files)
                                    }}
                                    multiple
                                    type="file"
                                />
                            </div>


                        </div>

                        <Button
                            variant='contained'
                            color="primary"
                            type="submit"
                        >
                            Add Post
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    );
}