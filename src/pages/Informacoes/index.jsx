import { Helmet } from 'react-helmet-async';

export default function Informacoes() {
	return (
		<section className='bg-gray-100 text-gray-800 py-12 px-4'>
			<Helmet>
				<title>Agroervas | Informações</title>
				<meta
					name='description'
					content='Saiba tudo sobre a Agroervas. Conheça nossa missão, os produtos naturais que oferecemos, nosso compromisso com a qualidade e sustentabilidade, e as formas de compra e atendimento disponíveis.'
				/>
			</Helmet>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl font-semibold mb-8 text-center'>
					Informações sobre a Agroervas
				</h2>

				<div className='mb-8'>
					<h3 className='text-xl font-bold mb-4'>Sobre a Agroervas</h3>
					<p className='text-md'>
						A Agroervas nasceu em 2024 com o objetivo de oferecer produtos
						naturais de alta qualidade para promover saúde e bem-estar. Nossa
						missão é levar os benefícios da natureza até você, garantindo um
						compromisso com qualidade e sustentabilidade.
					</p>
				</div>

				<div className='mb-8'>
					<h3 className='text-xl font-bold mb-4'>Nossos Produtos</h3>
					<p className='text-md'>
						Oferecemos uma ampla gama de produtos naturais, incluindo ervas,
						chás, plantas desidratadas, insumos. Cada produto é cuidadosamente
						selecionado para garantir que você receba apenas o melhor.
					</p>
				</div>

				<div className='mb-8'>
					<h3 className='text-xl font-bold mb-4'>Produção Sustentável</h3>
					<p className='text-md'>
						Trabalhamos diretamente com pequenos produtores locais para garantir
						que todos os nossos produtos sejam cultivados e colhidos de maneira
						sustentável. Acreditamos no comércio justo e na responsabilidade
						ambiental como pilares da nossa produção.
					</p>
				</div>

				<div className='mb-8'>
					<h3 className='text-xl font-bold mb-4'>
						Compromisso com a Qualidade
					</h3>
					<p className='text-md'>
						Todos os nossos produtos passam por um rigoroso controle de
						qualidade para garantir que você receba produtos seguros, eficazes e
						de alta qualidade. Estamos sempre em busca da excelência para melhor
						atender nossos clientes.
					</p>
				</div>

				<div>
					<h3 className='text-xl font-bold mb-4'>
						Formas de Compra e Atendimento
					</h3>
					<p className='text-md'>
						Você pode adquirir nossos produtos entrando em contato com nossa
						equipe para mais informações. Estamos disponíveis via WhatsApp,
						telefone e email para atender todas as suas dúvidas e necessidades.
					</p>
				</div>
			</div>
		</section>
	);
}
