import React from 'react';


interface ButtonProps {
    label:string;
    onClick?:( e:React.MouseEvent<HTMLButtonElement>) => void;
    disabled?:boolean;
    outline?:boolean;
    small?:boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
}) => {
    return (
        <button
          type='submit'
          disabled={disabled}
          onClick={onClick}
          className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            ${outline ? 'bg-indigo-500' : 'bg-rose-500'}
            ${outline ? 'border-indigo-500' : 'border-rose-500'}
            ${outline ? 'text-white' : 'text-white'}
            ${small ? 'text-sm' : 'text-md'}          
            ${small ? 'py-1' : 'py-3'}          
            ${small ? 'font-lignt' : 'font-semibold'}          
            ${small ? 'border-[1px]' : 'border-2'}          
          `}
        >
            {label}
        </button>
    )
}

export default Button;
