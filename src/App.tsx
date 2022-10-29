import './App.css';

import { useState } from 'react';
import InputMask from 'react-input-mask';

import image from './assets/Image.png';
import Input from './components/input';
import useForm from './hooks/useForm';
import { FormData } from './types';
import { validate } from './utils/form';

const initFormDataState: FormData = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirmation: '',
};

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [success, setSuccess] = useState<boolean>(false);

  const onSuccess = () => {
    // sendDataToTheServer
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true); // Displays the message
      // const normalizedPhoneNumber = formData?.phone?.replace(/\D+/g, '');
    }, 2000);
  };

  const { handleOnChange, handleSubmit, formData, formErrors } = useForm(
    initFormDataState,
    onSuccess,
    validate,
  );

  const renderFormStatus = (): JSX.Element => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (!isLoading && success) {
      return <h1>Success! Welcome to allBirds!</h1>;
    }

    return (
      <form onSubmit={handleSubmit}>
        <Input
          id="firstName"
          labelId="firstName"
          type="text"
          placeholder="First Name"
          name="name"
          onChange={handleOnChange}
          value={formData.name}
          errorData={formErrors.name}
        />

        <Input
          id="lastName"
          labelId="lastName"
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={handleOnChange}
          value={formData.lastName}
          errorData={formErrors.lastName}
        />

        <div className="form-input-container">
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <InputMask
            id="phone"
            className="input"
            placeholder="Phone Number"
            name="phone"
            mask="(999) 999-9999"
            onChange={handleOnChange}
            value={formData.phone}
          />
        </div>

        <Input
          id="email"
          labelId="email"
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleOnChange}
          value={formData.email}
          errorData={formErrors.email}
        />

        <Input
          id="password"
          labelId="password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          value={formData.password}
          errorData={formErrors.password}
        />

        <Input
          id="passwordConfirmation"
          labelId="passwordConfirmation"
          type="password"
          placeholder="Password confirmation"
          name="passwordConfirmation"
          onChange={handleOnChange}
          value={formData.passwordConfirmation}
          errorData={formErrors.passwordConfirmation}
        />

        <button disabled={isLoading} type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    );
  };

  return (
    <div className="App">
      <div>
        <h1>Hello!</h1>
        <img src={image} alt="formImage" className="image" />
      </div>
      <div className="form-container">{renderFormStatus()}</div>
    </div>
  );
}

export default App;
