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
    small
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
            ${outline ? 'bg-[#E57C65]' : 'bg-white'}
            ${outline ? 'text-white' : 'text-black'}
            ${small ? 'text-sm' : 'text-md'}          
            ${small ? 'py-1' : 'py-3'}          
            ${small ? 'font-lignt' : 'font-semibold'}          
            ${small ? 'border-[1px]' : ''}          
          `}
        >
            {label}
        </button>
    )
}

export default Button;
