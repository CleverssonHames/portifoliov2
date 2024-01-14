import { Link } from "react-router-dom";
import jettnatal from "../assets/img/jett-natal.jpg"


const CardProjeto = () => {
  return (
    <div className="flex flex-col rounded-md">
        <img src={jettnatal} alt="Imagem do projeto" height={200} width={320} className="rounded-t-md"/>
        <div className="flex flex-col text-black bg-white p-3 items-center rounded-b-md w-80">
            <h5 className="text-xl">Nome do projeto</h5>
            <p className="mt-4">Descrição do projeto com um texto pequeno e bem descrito.</p>
            <Link to="/Projects" className="text-xs mt-4 border-2 p-2 border-black hover:bg-bluetec hover:text-white hover:border-bluetec rounded" >DETALHES DO PROJETO</Link>
        </div>
    </div>
  )
}

export default CardProjeto;