import { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";

interface FormNetworkProps {
  onSave: (data: { networkName: string; networkContext: string }) => void;
}

const FormNetwork: React.FC<FormNetworkProps> = ({ onSave }) => {
  const [networkName, setNetworkName] = useState("");
  const [networkContext, setNetworkContext] = useState("");

  return (
    <div>
      <h2>Configuration Network</h2>
      
      <FormField
        label="Network's Name"
        name="networkName"
        type="text"
        value={networkName}
        onChange={(e) => setNetworkName(e.target.value)}
      />

      <FormField
        label="Network's Context"
        name="networkContext"
        type="text"
        value={networkContext}
        onChange={(e) => setNetworkContext(e.target.value)}
      />

      <Button onClick={() => onSave({ networkName, networkContext })}>Enregistrer</Button>
    </div>
  );
};

export default FormNetwork;
