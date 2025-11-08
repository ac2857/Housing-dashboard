
import { SelectHTMLAttributes } from 'react';
export default function Select(props: SelectHTMLAttributes<HTMLSelectElement>){
  const { className='', children, ...rest } = props;
  return <select className={'border rounded p-2 w-full ' + className} {...rest}>{children}</select>;
}
