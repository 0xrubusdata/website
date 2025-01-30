import { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";

interface FormAIProps {
  onSave: (data: { aiProvider: string; apiKey: string }) => void;
}

const FormAI: React.FC<FormAIProps> = ({ onSave }) => {
  const [aiProvider, setAiProvider] = useState("");
  const [apiKey, setApiKey] = useState("");

  return (
    <div>
      <h2>Configuration AI</h2>

      <FormField
        label="AI Provider"
        name="aiProvider"
        type="select"
        value={aiProvider}
        onChange={(e) => setAiProvider(e.target.value)}
        options={[
          { value: "openai", label: "OpenAI" },
          { value: "anthropic", label: "Anthropic Claude" }
        ]}
      />

      <FormField
        label="API Key"
        name="apiKey"
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      <Button onClick={() => onSave({ aiProvider, apiKey })}>Enregistrer</Button>
    </div>
  );
};

export default FormAI;
