"use client"
import { useState } from 'react';
import React from 'react';
export default function AccordionGroup({ children }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full h-[480px]  mx-auto flex">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onClick: () => setOpenIndex(index),
        })
      )}
    </div>
  );
}
