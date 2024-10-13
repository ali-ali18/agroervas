import ButtonFooter from './FooterButton';

export default function Footer() {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-800 text-white py-8 px-4 mt-6'>
      {/* Navegação */}
      <ul className='space-y-2'>
        <h3 className='text-lg font-semibold border-b-2 border-green-500 pb-2'>Navegação</h3>
        <ButtonFooter to='/'>Início</ButtonFooter>
        <ButtonFooter to='/contato'>Contato</ButtonFooter>
        <ButtonFooter to='/historia'>História</ButtonFooter>
        <ButtonFooter to='/seja-nosso-cliente'>Seja nosso cliente</ButtonFooter>
      </ul>

      {/* Direitos Autorais */}
      <ul className='space-y-2'>
        <h3 className='text-lg font-semibold border-b-2 border-green-500 pb-2'>Direitos autorais</h3>
        <ButtonFooter to='/imagens'>Imagens</ButtonFooter>
        <ButtonFooter to='/informacoes'>Informações</ButtonFooter>
      </ul>

      {/* Logo como texto */}
      <div className='flex flex-col items-center md:items-start'>
        <h3 className='text-lg font-semibold border-b-2 border-green-500 pb-2 mb-4'>Logo</h3>
        <h1 className='text-4xl font-bold text-green-500'>
          Agroervas
        </h1>
      </div>

      {/* Direitos Autorais - Footer */}
      <div className='text-center text-sm text-gray-500 mt-8 col-span-full'>
        &copy; {new Date().getFullYear()} Agroervas. Todos os direitos reservados.
      </div>
    </footer>
  );
}
