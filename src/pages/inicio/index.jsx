import Carrossel from '../../components/carrossel';
import CardHistoria from '../../components/Historia/cardHistoria';
import Vantagens from '../../components/Vantagens/Vantagens';
import { CiDeliveryTruck } from 'react-icons/ci';
import { BiDonateHeart, BiCheckShield, BiHeart } from 'react-icons/bi';
import { TbUsers } from 'react-icons/tb';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import FormularioFaleConosco from '../../components/FaleConosco/FaleConoscoButtons/form';
import { Helmet } from 'react-helmet-async';

export default function Inicio() {
	const imagesMobile = [
		'./imgs/2.svg',
		'https://images.unsplash.com/photo-1554345795-1243a276630e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.webp',
		'https://images.unsplash.com/photo-1465471315544-f11525b8974c?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	const imagesDesktop = [
		'./imgs/2.svg',
		'https://images.unsplash.com/photo-1553267574-277716d448fb?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	const cardHistoria = [
		{
			caminhoImg:
				'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?w=800&h=600&q=80&fm=webp',
			altImg: 'foto lavanda em sua mais bela forma',
			textoHistoria:
				'A Agroervas começou sua jornada em 2024, movida pelo sonho de oferecer produtos naturais de alta qualidade para todos. Mesmo em pouco tempo de atuação, nos tornamos uma das empresas que mais cresce no setor, oferecendo mais de 1000 produtos em estoque que atendem às necessidades de saúde e bem-estar dos nossos clientes.',
		},
	];

	const cardContado = [
		{
			caminhoImg:
				'https://images.unsplash.com/photo-1631037958943-f6c220c4703a?w=800&h=600&q=80&fm=webp',
			altImg: 'foto de camomilas',
			textContado:
				'Tem alguma dúvida ou precisa de mais informações? Na Agroervas, estamos prontos para ajudar você. Entre em contato conosco por telefone, WhatsApp ou e-mail, e nossa equipe ficará feliz em atender suas necessidades. Queremos proporcionar o melhor atendimento para garantir que você tenha a melhor experiência com nossos produtos',
		},
	];

	return (
		<main className='w-full mb-6'>
			<Helmet>
				<title>Agroervas | Inicio</title>
				<meta
					name='description'
					content='Agroervas - Encontre produtos naturais e ervas medicinais de alta qualidade. Mais de 1000 produtos à sua disposição para promover saúde e bem-estar de forma natural. Descubra nossa linha completa e cuide de você com o melhor da natureza.'
				/>
			</Helmet>

			{/* carrosel de imgs */}
			<Carrossel imagesMobile={imagesMobile} imagesDesktop={imagesDesktop} />

			{/* nossa historia */}
			<section className='px-4 md:px-8  lg:px-16'>
				<div className='max-w-4xl mx-auto mt-2 '>
					{cardHistoria.map((item) => (
						<CardHistoria
							altImg={item.altImg}
							caminhoImg={item.caminhoImg}
							key={item.altImg}
							textHistoria={item.textoHistoria}
							titulo='História'
							to='historia'
						/>
					))}
				</div>
			</section>

			{/* diferenciais */}
			<article className='w-full my-8 px-4 md:px-8  lg:px-16'>
				<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
					<Vantagens
						iconVatagem={<CiDeliveryTruck size={50} />}
						textDeVantagens='Trabalhamos com as melhores transportadoras do mercado de logística'
					/>
					<Vantagens
						iconVatagem={<TbUsers size={50} />}
						textDeVantagens='Contamos com uma equipe de funcionários totalmente capacitada para atender você'
					/>
					<Vantagens
						iconVatagem={<BiDonateHeart size={50} />}
						textDeVantagens='Incentivamos os produtores locais, trabalhando de forma justa e honesta'
					/>
					<Vantagens
						iconVatagem={<BiCheckShield size={50} />}
						textDeVantagens='Preocupados com a saúde e o bem-estar, trabalhamos com produtos 100% naturais'
					/>
					<Vantagens
						iconVatagem={<BiHeart size={50} />}
						textDeVantagens='Selecionamos produtos sob demanda, garantindo sempre a melhor qualidade para atender às suas necessidades com excelência'
					/>
					<Vantagens
						iconVatagem={<HiOutlineOfficeBuilding size={50} />}
						textDeVantagens='Oferecemos oportunidades de emprego locais, conectando você a empresas comprometidas com o desenvolvimento da comunidade e o crescimento profissional'
					/>
				</ul>
			</article>

			{/* Fale conosco */}
			<FormularioFaleConosco />

			<section className='px-4 md:px-8  lg:px-16'>
				<div className='max-w-4xl mx-auto mt-2 '>
					{cardContado.map((item) => (
						<CardHistoria
							altImg={item.altImg}
							caminhoImg={item.caminhoImg}
							key={item.altImg}
							textHistoria={item.textContado}
							titulo='Contato'
							to='contato'
						/>
					))}
				</div>
			</section>
		</main>
	);
}
