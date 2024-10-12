import { InputText } from "./inputs";
import { InputTextArea } from "./textArea";

export default function FormularioFaleConosco() {
  return (
    <section className='flex flex-col px-4 md:px-8 lg:px-16 w-full gap-8 items-center py-12 bg-gray-100'>
      <h3 className='text-4xl font-semibold text-center mb-8'>Fale conosco</h3>
      
      <div className='flex flex-col w-full max-w-4xl bg-white rounded-lg p-6 gap-4 shadow-lg'>
        <InputText id='nome' label='Nome' type='text' placeholder='Digite seu nome' />
        <InputText id='whatsapp' label='WhatsApp' type='tel' placeholder='Digite seu WhatsApp' />
        <InputText id='email' label='Email' type='email' placeholder='Digite seu email' />
        <InputTextArea id='mensagem' label='Mensagem' placeholder='Digite sua mensagem' />
        
        <button type='submit' className='bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-500 transition-colors'>
          Enviar Mensagem
        </button>
      </div>
    </section>
  );
}
