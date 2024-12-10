"use client"

import React from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Chat-1' },
  { id: 2, name: 'Chat-2' },
  { id: 3, name: 'Chat-3' },
  { id: 4, name: 'Chat-4' },
  { id: 5, name: 'Chat-5' },
]

const CardConfigCanal = () => {
  const [selected, setSelected] = useState(people[1])

  return (
    <Card className='mt-10'>
      <div className="relative -ml-4 mr-10 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <CardHeader>
        <CardTitle>Notificação de Vendas</CardTitle>
        <CardDescription>Todas as notificações de vendas realizadas serão enviadas para este chat.</CardDescription>
      </CardHeader>
      <CardContent>
      <Listbox value={selected} onChange={setSelected}>
          <Label className="block text-sm font-medium text-white">Chat definido:</Label>
          <div className='relative mt-2'>
            <ListboxButton
              className={clsx(
                'relative block w-full rounded-lg bg-blue-900 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/10'
                )}
                >
              {selected.name}
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
                />
            </ListboxButton>
          </div>
          <ListboxOptions
            anchor="bottom"
            transition
            className={clsx(
              'w-[var(--button-width)] rounded-xl border border-white/5 bg-blue-900/90 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
              'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            )}
          >
            {people.map((person) => (
              <ListboxOption
                key={person.name}
                value={person}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-blue-600"
              >
                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-white">{person.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </CardContent>
    </Card>
  );
}

export default CardConfigCanal;
