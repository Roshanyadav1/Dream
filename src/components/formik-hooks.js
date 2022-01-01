import { useFormikContext } from 'formik';

export const useInput = id => {
    const formik = useFormikContext();
    return {
        value: formik.value[id],
        status: formik.errors[id] && formik.values[id] && 'danger',
        caption: formik.values[id] && formik.errors[id],
        onChangeText: nextValue => {
            formik.setFieldValue(id, nextValue);
        }
    };
};

export const useCheckbox = id => {
    const formikContext = useFormikContext();

    return {
        checked: formikContext.values[id],
        onChange: nextValue => {
            formikContext.setFieldValue(id, nextValue);
        }
    }
}