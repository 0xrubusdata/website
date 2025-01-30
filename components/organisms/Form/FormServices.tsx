import { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";

interface FormServiceProps {
  onSave: (data: { serviceName: string; serviceContext: string }) => void;
}

const FormService: React.FC<FormServiceProps> = ({ onSave }) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceContext, setServiceContext] = useState("");

  return (
    <div>
      <h2>Configuration Service</h2>
      
      <FormField
        label="Service's Name"
        name="serviceName"
        type="text"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
      />

      <FormField
        label="Service's Context"
        name="serviceContext"
        type="text"
        value={serviceContext}
        onChange={(e) => setServiceContext(e.target.value)}
      />

      <Button onClick={() => onSave({ serviceName, serviceContext })}>Enregistrer</Button>
    </div>
  );
};

export default FormService;
