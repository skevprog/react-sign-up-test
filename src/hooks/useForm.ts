import { FormEvent, useEffect, useState } from 'react';

import { FormData, FormErrors } from '../types';

const useForm = (
  initFormData: FormData,
  successCb: () => void,
  validationCb: (data: FormData) => FormErrors,
) => {
  const [formData, setFormData] = useState<FormData>(initFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setFormErrors(validationCb(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      successCb();
    }
  }, [formErrors]);

  return { handleOnChange, handleSubmit, formData, formErrors };
};

export default useForm;
