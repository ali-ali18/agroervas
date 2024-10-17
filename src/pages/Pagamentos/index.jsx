// Componente FormasPagamento.jsx
export default function FormasPagamento() {
    return (
      <section className="bg-gray-100 text-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Formas de Pagamento</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 text-left font-bold">Forma de Pagamento</th>
                  <th className="py-4 px-6 text-left font-bold">Detalhes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b">Pagamento via Pix</td>
                  <td className="py-4 px-6 border-b">Desconto de 3% em compras realizadas com pagamento via Pix.</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b">Cartão de Crédito e Débito</td>
                  <td className="py-4 px-6 border-b">Aceitamos pagamento com cartões de crédito e débito para sua conveniência.</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b">Boleto Bancário</td>
                  <td className="py-4 px-6 border-b">Pagamento sujeito a análise de perfil.</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Dinheiro</td>
                  <td className="py-4 px-6">Desconto de 3% para pagamento em dinheiro.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  