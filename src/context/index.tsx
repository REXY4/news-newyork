'use client';
import { NYTArticleProps } from '@/app/state-type/news.state';
import React, { createContext, ReactNode, useContext, useState } from 'react';


interface ProfiderProps {
    children : ReactNode
}


interface StateProps {
    nytNews : Array<NYTArticleProps> | null
}

// Membuat Context
const MyContext = createContext<{
  state: StateProps;
  setState: React.Dispatch<React.SetStateAction<StateProps>>;
}>(undefined as any);

// Membuat Provider
export const MyProvider = ({ children }: ProfiderProps) => {
    const [state, setState] = useState<StateProps>({
        // Inisialisasi state Anda
        nytNews : null,
    });
    const value = { state, setState };
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

// Hook untuk menggunakan Context
export const useMyContext = () => {
    return useContext(MyContext);
};