import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

// Tipagem para as funções de callback das props
interface FiltroProps {
  onSearchChange: (searchTerm: string) => void;
  onSortChange: (sortOption: string) => void;
}

const Filtro: React.FC<FiltroProps> = ({ onSearchChange, onSortChange }) => {
  return (
    <div className="mx-6 flex justify-between">
      {/* Campo de busca */}
      <form className="w-1/3 flex items-center ml-5">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search"
            className="bg-blue-900 border border-gray-600 focus:outline-none text-white text-sm rounded-lg block w-full pl-10 p-2"
            placeholder="Pesquisar"
            required
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </form>

      {/* Filtro de ordenação */}
      <div className="grid grid-cols-1 w-1/6 mr-6">
        <select
          id="filtro"
          onChange={(e) => onSortChange(e.target.value)}
          className="col-start-1 row-start-1 w-full flex items-center justify-center py-2 px-4 text-sm font-medium appearance-none text-gray-300 focus:outline-none bg-blue-900 rounded-lg border border-gray-600"
        >
          <option value="dataRecente">Mais recente</option>
          <option value="dataAntiga">Mais antigo</option>
          <option value="precoHigher">Preço mais alto</option>
          <option value="precoLower">Preço mais baixo</option>
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </div>
  );
};

export default Filtro;
