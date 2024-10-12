export default function Vantagens ({iconVatagem, textDeVantagens}) {
    return (
        <li>
            <figure className="flex flex-col items-center justify-center ">
                {iconVatagem}
                <figcaption className="text-center">
                    {textDeVantagens}
                </figcaption>
            </figure>
        </li>
    )
}