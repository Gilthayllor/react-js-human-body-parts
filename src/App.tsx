import { useCallback, useState } from 'react';
import './App.css'
import { Body } from './components/body/Body'
import type { Slug } from './components/body/types/slug';

function App() {
  const [selectedParts, setSelectedParts] = useState<Slug[]>([]);

  const handlePartClick = useCallback((part: Slug) => {
    setSelectedParts((prevSelectedParts) => {
      if (prevSelectedParts.includes(part)) {
        return prevSelectedParts.filter((p) => p !== part);
      } else {
        return [...prevSelectedParts, part];
      }
    });
  }, []);

  const scale = 1.3;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        <Body side='front' selectedParts={selectedParts} scale={scale} onPartClick={handlePartClick} />
        <Body side='back' selectedParts={selectedParts} scale={scale} onPartClick={handlePartClick} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px", maxWidth: "400px" }}>
        <span>
          Partes selecionadas:
        </span>
        {selectedParts.map((part) => (
          <span key={part} style={{ padding: "4px", border: "1px solid black", borderRadius: "4px" }}>
            {part}
          </span>
        ))}
      </div>
    </div>
  )
}

export default App
