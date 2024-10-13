// InputText.jsx
import React from 'react';

export function InputText({ label, type, placeholder, id, onChange, value }) {
	return (
		<div className='flex flex-col gap-1'>
			<label htmlFor={id} className='font-semibold'>
				{label}
			</label>
			<input
				value={value}
				onChange={onChange}
				id={id} // Adicionando id ao input
				type={type}
				placeholder={placeholder}
				className='p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500'
			/>
		</div>
	);
}
