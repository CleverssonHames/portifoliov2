import { useState } from "react";
import NavBar from "../components/NavBar";

const Home = () => {

  const [showMedias, setShowMedias] = useState(false)

  const HandleShowMedias = () => {
    setShowMedias(true);
  };


  return (
    <div className="flex  w-full ">
      <div className="w-auto">
        <img src="perfil 1.png" alt="Imagem com um rosto" className="w-full h-screen"/>
      </div>
      <div className="flex flex-col grow">
        <div className="flex flex-col w-full">
          <NavBar />
          <div className="flex flex-col w-full relative">
            <div className="flex flex-col bg-darkgray p-10 mt-5 absolute top-16 -left-32 rounded-full">
              <h2 className="text-7xl text-bluetec font-extrabold tracking-wide">Hames,</h2>
              <h3 className="text-6xl text-white ml-7 font-semibold tracking-wide">Cleversson</h3>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center">
          <p className="max-w-2xl text-white mt-96 text-justify tracking-wide">Atualmente trabalho como analista de sistemas em uma empresa da área de saúde. Agora estou em busca de uma vaga como desenvolvedor front-end. Tenho poucos projetos em meu portifólio, mas em breve quero ter vários projetos bons para preencher e mostrar ainda mais o meu trabalho.</p>
        </div>
        <div className="flex justify-around mt-36 w-full">
          <span className={`text-white border-2 border-white p-3 rounded-full duration-700 hover:text-bluetec  hover:border-bluetec`}>Mídias sociais</span>
          <span className="text-white border-2 border-white p-3 rounded-full duration-700 hover:text-bluetec hover:border-bluetec">Habilidades</span>
        </div>
      </div>
    </div>
  )
}

export default Home;