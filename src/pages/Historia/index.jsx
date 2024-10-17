import SecaoImagemTexto from './componentes/SecaoImagemTexto';
import TituloHistoria from './componentes/TituloHistoria';

export default function Historia() {
	return (
		<section className='flex flex-col items-center px-4 md:px-8 lg:px-16 py-12 bg-gray-50'>
			{/* Título da Página */}
			<TituloHistoria texto='Nossa História' />

			{/* Primeira Seção com Imagem à Esquerda */}
			<SecaoImagemTexto
				imagem='https://images.unsplash.com/photo-1509727841791-40d09ad9b7fc?w=800&h=600&q=80&fm=webp'
				alt='Uma bela vista da fazenda Agroervas'
				texto='A Agroervas começou sua jornada em 2024, movida pelo sonho de oferecer produtos naturais de alta qualidade para todos. Mesmo em pouco tempo de atuação, nos tornamos uma das empresas que mais cresce no setor, oferecendo mais de 1000 produtos em estoque que atendem às necessidades de saúde e bem-estar dos nossos clientes.'
				invertido={false}
			/>

			{/* Segunda Seção com Imagem à Direita */}
			<SecaoImagemTexto
				imagem='https://images.unsplash.com/photo-1637541615402-5d2e49da5f1c?w=800&h=600&q=80&fm=webp'
				alt='Colheita de ervas da Agroervas'
				texto='Hoje, já somos uma comunidade com mais de 400 clientes satisfeitos, que confiam na qualidade e nos benefícios dos nossos produtos. Nossa missão é simples: promover o bem-estar através da natureza. Trabalhamos diretamente com produtores locais, garantindo um comércio justo e sustentável desde o início. Cada erva e cada produto que você encontra na Agroervas é o resultado de parcerias que valorizam a qualidade, a responsabilidade ambiental e o cuidado com o consumidor.'
				invertido={true}
			/>

			{/* Terceira Seção com Imagem à Esquerda */}
			<SecaoImagemTexto
				imagem='https://images.unsplash.com/photo-1507980062492-714282f31ee0?w=800&h=600&q=80&fm=webp'
				alt='Produtos naturais da Agroervas'
				texto='Em menos de um ano, nos tornamos uma referência no mercado, conquistando a confiança de nossos clientes e expandindo nossa linha de produtos para atender uma crescente demanda. Estamos apenas começando, mas já temos a certeza de que nossa história será marcada pela inovação, qualidade e respeito ao meio ambiente.'
				invertido={false}
			/>
		</section>
	);
}
