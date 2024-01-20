import { Link } from "react-router-dom";
import jettnatal from "../assets/img/jett-natal.jpg"

type Projetos = {
  id: number,
  nome: string,
  Descricao: string,
  linkImagem: string
} 


const CardProjeto = ({proj}) => {
  return (
    <div className="flex flex-col rounded-md">
        <img src={proj.linkImagem} alt="Imagem do projeto" height={200} width={320} className="rounded-t-md"/>
        <div className="flex flex-col text-black bg-white p-3 items-center rounded-b-md w-80">
            <h5 className="text-xl">{proj.nome}</h5>
            <p className="mt-4">{proj.Descricao}</p>
            <Link to="/Projects" className="text-xs mt-4 border-2 p-2 border-black hover:bg-bluetec hover:text-white hover:border-bluetec rounded" >DETALHES DO PROJETO</Link>
        </div>
    </div>
  )
}

export default CardProjeto;