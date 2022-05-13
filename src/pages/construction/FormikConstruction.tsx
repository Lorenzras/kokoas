import { Formik } from 'formik';

import { validationSchema, initialValues } from './form';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ConstructionForm } from './ConstructionForm';
import FormSnack, { SnackState } from '../../components/ui/snacks/FormSnack';
import { getFormDataById } from './api/getFormDataById';
import { saveFormData } from './api/saveFormData';
import { pages } from '../Router';


export const FormikConstruction  = () => {
  const [snackState, setSnackState] = useState<SnackState>({ open:false });
  const [initialState, setInitialState] = useState(initialValues);
  const recordId  = useParams().recordId;
  const navigate = useNavigate();

  useEffect(()=>{
    /** If edit mode */
    console.log(recordId, 'recordId');

    if (recordId){
      getFormDataById(recordId)
        .then((resp) => {
          setInitialState(resp);
        });
    } else {
      setInitialState(initialValues);
    }
  }, [recordId]);



  return (
    <>
      <Formik
      validateOnMount
      enableReinitialize
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {

        saveFormData({ ...values, recordId })
          .then((resp)=>{
            setSnackState({ open: true, message: '保存出来ました。' });
            setSubmitting(false);
            navigate(`${pages.projEdit}${resp.id}`);
          });
      }}
    >
        <ConstructionForm handleSnack={(snackParam) => setSnackState(snackParam)}/>

      </Formik>
      <FormSnack snackState={snackState} handleClose={()=> setSnackState(prev => ({ ...prev, open: false }))}/>
    </>
  );
};