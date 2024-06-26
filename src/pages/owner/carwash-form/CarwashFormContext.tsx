import React, { createContext, useContext, useState } from 'react';
import { Carwash, ContextProviderProps } from '../../../components/types';

export const defaultFormData: Carwash = { name: '', carwashStreet: '', boxAmount: 0, contactInfo: '' };

const FormContext = createContext<{ formData: Carwash; setFormData: React.Dispatch<React.SetStateAction<Carwash>> }>({
 formData: defaultFormData,
 setFormData: () => {},
});

export const useFormData = () => useContext(FormContext);

export const FormProvider: React.FC<ContextProviderProps> = ({ children}) => {
 const [formData, setFormData] = useState<Carwash>(defaultFormData);

 return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};

