import { TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, ChangeEventHandler } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "select";
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement> | SelectChangeEvent) => void;
  options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type = "text", value, onChange, options }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
    onChange(event);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      {type === "select" ? (
        <Select value={value} onChange={handleChange} name={name}>
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField label={label} value={value} onChange={handleChange as ChangeEventHandler<HTMLInputElement>} name={name} fullWidth />
      )}
    </FormControl>
  );
};

export default FormField;
