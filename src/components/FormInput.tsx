import { useState } from "react";
import "../style/formInput.css";

interface FormInputProps {
    label: string;
    errorMessage: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: number;
    type?: string;
    placeholder?: string;
    pattern?: string;
    required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    errorMessage,
    value,
    onChange,
    required = false,
    pattern,
    ...inputProps
}) => {
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const validateInput = () => {
        if (required && value.trim() === "") {
            setError(true);
            return;
        }

        if (pattern && value !== "" && !new RegExp(pattern).test(value)) {
            setError(true);
            return;
        }

        setError(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        validateInput();
    };

    return (
        <div className={`formInput ${focused && "focused"}`}>
            <label>{label}</label>
            <input
                {...inputProps}
                value={value}
                onChange={handleChange}
                onBlur={handleFocus}
                onFocus={() => setFocused(true)}
                className={error ? "error" : ""}
                id={inputProps.id?.toString()}
            />
            {error && <span className="error-message">{errorMessage}</span>}
        </div>
    );
};

export default FormInput;
