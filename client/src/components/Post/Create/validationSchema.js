import * as Yup from 'yup';

export const formValues = {
    title:'',
    age:'',
    description:'',
    rich_description:'',
    type:'',
    location:'',
    image:[],
}


export const validation = () => (
    Yup.object({
        title:Yup.string()
        .required('Sorry the name is required'),
        age:Yup.string()
        .required('Sorry the age is required'),
        description:Yup.string()
        .required('Sorry the description is required')
        .max(500,'Sorry its 500 max'),
        rich_description:Yup.string()
        .max(500,'Sorry its 500 max'),
        type:Yup.string()
        .required('Sorry the type is required'),
        location:Yup.string()
        .required('Sorry the location is required')
        .max(150,'Sorry its 150 max'),
        // image:Yup.array()
        // .required('Must have image')
        // .min(1,'Minimum is 1'),
    })
)
