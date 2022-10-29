import './styles.css';

interface InputProps {
  id: string;
  labelId: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  errorData?: string;
}

function Input({
  id,
  labelId,
  type,
  placeholder,
  name,
  onChange,
  value,
  errorData,
}: InputProps): JSX.Element {
  return (
    <div className="form-input-container">
      <label htmlFor={labelId} className="label">
        {placeholder}
      </label>
      <input
        id={id}
        className="input"
        type={type}
        placeholder={`Enter ${placeholder}`}
        name={name}
        onChange={onChange}
        value={value}
      />
      {errorData && <p className="error">{errorData}</p>}
    </div>
  );
}

export default Input;
