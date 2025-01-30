import { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";

interface FormAgentProps {
    onSave: (data: { agentName: string; agentContext: string }) => void;
  }
  
const FormAgent: React.FC<FormAgentProps> = ({ onSave }) => {
  const [agentName, setAgentName] = useState("");
  const [agentContext, setAgentContext] = useState("");

  return (
    <div>
      <h2>Configuration Agent</h2>
      
      <FormField
        label="Agent's Name"
        name="agentName"
        type="text"
        value={agentName}
        onChange={(e) => setAgentName(e.target.value)}
      />

      <FormField
        label="Agent's Context"
        name="agentContext"
        type="text"
        value={agentContext}
        onChange={(e) => setAgentContext(e.target.value)}
      />

      <Button onClick={() => onSave({ agentName, agentContext })}>Enregistrer</Button>
    </div>
  );
};

export default FormAgent;
