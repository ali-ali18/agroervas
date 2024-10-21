import { Helmet } from 'react-helmet-async';

export default function Entrega() {
	return (
		<section className='bg-gray-100 text-gray-800 py-12 px-4'>
			<Helmet>
				<title>Agroervas | Entrega</title>
				<meta
					name='description'
					content='Conheça as formas de entrega da Agroervas. Oferecemos opções via Correios, transportadoras parceiras, entregas locais e retirada na loja física.'
				/>
			</Helmet>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl font-semibold mb-8 text-center'>
					Formas de Entrega
				</h2>

				<div className='overflow-x-auto'>
					<table className='w-full bg-white rounded-lg shadow-lg'>
						<thead>
							<tr className='bg-gray-200'>
								<th className='py-4 px-6 text-left font-bold'>
									Método de Entrega
								</th>
								<th className='py-4 px-6 text-left font-bold'>Detalhes</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='py-4 px-6 border-b'>Correios</td>
								<td className='py-4 px-6 border-b'>
									Entrega sujeita à análise de perfil e disponibilidade dos
									Correios.
								</td>
							</tr>
							<tr>
								<td className='py-4 px-6 border-b'>
									Transportadoras Parceiras
								</td>
								<td className='py-4 px-6 border-b'>
									Entrega realizada por várias transportadoras parceiras, com
									cobertura nacional.
								</td>
							</tr>
							<tr>
								<td className='py-4 px-6 border-b'>Entregas Locais</td>
								<td className='py-4 px-6 border-b'>
									Disponível para entregas locais mediante valor mínimo e
									combinação prévia.
								</td>
							</tr>
							<tr>
								<td className='py-4 px-6'>Retirada na Loja</td>
								<td className='py-4 px-6'>
									Disponível para retirada em nossa loja física após a
									confirmação do pedido.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
