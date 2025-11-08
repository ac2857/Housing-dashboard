
import { InputHTMLAttributes } from 'react';
export default function Input(props: InputHTMLAttributes<HTMLInputElement>){
  const { className='', ...rest } = props;
  return <input className={'border rounded p-2 w-full ' + className} {...rest} />;
}
