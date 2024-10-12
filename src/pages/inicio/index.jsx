import Carrossel from '../../components/carrossel';
import CardHistoria from '../../components/Historia/cardHistoria';
import Vantagens from '../../components/Vantagens/Vantagens';
import { CiDeliveryTruck } from 'react-icons/ci';

export default function Inicio() {
	const imagesCarrosel = [
		'https://plus.unsplash.com/premium_photo-1728510320088-0b89856e726e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 1920 x 1080
		'https://images.unsplash.com/photo-1727950183920-654c2feee258?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 1920 x 1080
		'https://plus.unsplash.com/premium_photo-1728566648330-7ba0d675f3c6?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 1920 x 1080
		'https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	const cardHistoria = [
		{
			caminhoImg:
				'https://plus.unsplash.com/premium_photo-1688045685821-4958c1e28322?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			altImg: 'foto lavanda em sua mais bela forma',
			textoHistoria:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla possimus atque recusandae quia ab velit expedita id! Qui autem beatae consequuntur voluptate pariatur nulla doloremque, sequi quisquam excepturi illum dicta!',
		},
	];
	return (
		<main className='w-full'>
			<Carrossel images={imagesCarrosel} />
			<section className='px-4 md:px-8  lg:px-16'>
				<div className='max-w-4xl mx-auto mt-2'>
					<h1 className='text-3xl font-bold text-center'>Nossa história</h1>
					{cardHistoria.map((item) => (
						<CardHistoria
							altImg={item.altImg}
							caminhoImg={item.caminhoImg}
							key={item.altImg}
							textHistoria={item.textoHistoria}
							to='historia'
						/>
					))}
				</div>
			</section>
			<article className='w-full'>
				<ul className='grid grid-cols-4 gap-4'>
					<Vantagens
						iconVatagem={<CiDeliveryTruck size={50} />}
						textDeVantagens='Trabalhamos com as melhores transportadoras do mercado de logística'
					/>
					<Vantagens
						iconVatagem={<CiDeliveryTruck size={50} />}
						textDeVantagens='Trabalhamos com as melhores transportadoras do mercado de logística'
					/>
					<Vantagens
						iconVatagem={<CiDeliveryTruck size={50} />}
						textDeVantagens='Trabalhamos com as melhores transportadoras do mercado de logística'
					/>
					<Vantagens
						iconVatagem={<CiDeliveryTruck size={50} />}
						textDeVantagens='Trabalhamos com as melhores transportadoras do mercado de logística'
					/>
				</ul>
			</article>
		</main>
	);
}
