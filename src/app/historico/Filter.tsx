import React from 'react';
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Tipagem para as funções de callback das props
interface FiltroProps {
  onSearchChange: (searchTerm: string) => void;
  onSortChange: (sortOption: string) => void;
}

const Filtro: React.FC<FiltroProps> = ({ onSearchChange, onSortChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
      <Input
        type="text"
        placeholder="Pesquisar"
        className="w-full sm:max-w-xs"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Select onValueChange={onSortChange} defaultValue="dataRecente">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dataRecente">Mais recente</SelectItem>
          <SelectItem value="dataAntiga">Mais antigo</SelectItem>
          <SelectItem value="precoHigher">Preço mais alto</SelectItem>
          <SelectItem value="precoLower">Preço mais baixo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filtro;

