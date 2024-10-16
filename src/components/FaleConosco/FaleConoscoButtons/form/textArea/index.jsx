// InputTextArea.jsx
import React from 'react';

export function InputTextArea({ label, placeholder, id, onChange, value }) {
	return (
		<div className='flex flex-col gap-1'>
			<label htmlFor={id} className='font-semibold'>
				{label}
			</label>
			<textarea
				value={value}
				onChange={onChange}
				id={id} // Adicionando id ao textarea
				placeholder={placeholder}
				className='p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 h-32 resize-none'
			></textarea>
		</div>
	);
}
