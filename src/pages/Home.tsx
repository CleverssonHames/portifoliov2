import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import {motion} from "framer-motion";

import CardProjeto from "../components/CardProjetos";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaWhatsapp  } from "react-icons/fa";





const Home = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  // atualizar as dimensões da tela
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
  }, [])


  return (
    <main className=" bg-black">
      <section id="home" className="flex justify-center relative w-full">
        <motion.img initial={{opacity: 0}} animate={{opacity: 2}} transition={{duration: 1}} src="perfil 1.png" alt="Imagem com um rosto" className="mix-blend-hard-light h-screen  max-w-full"/>
        <div className="absolute top-0 w-full h-full ">
          <div className="flex flex-col items-center justify-between  text-white w-full h-full">
            <h1 className="text-5xl tracking-[.18em] mt-10 text-center">CLEV<span className="text-bluetec">DEV</span></h1>
            <div className="mb-10">
              <h2 className="text-4xl text-center">CLEVERSSON A. HAMES</h2>
              <h5 className="text-2xl text-center">Desenvolvedor de <span className="text-bluetec">software</span></h5>
              <div className="flex justify-center gap-4 items-center mt-5">
                <Link to="" className="hover:scale-105 text-center"><BsLinkedin size={40} color="white"/></Link>
                <Link to="" className="hover:scale-105 text-center" ><BsGithub size={40} color="white"/></Link>
                <Link to="" className="hover:scale-105 text-center" ><FaWhatsapp size={40} color="white"/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className="flex flex-col w-full items-center">
        <div className="flex justify-center bg-white">
          <div className="flex items-center w-3/4 ">
            <motion.div initial={{x: -200}} animate={{x: 0}} transition={{duration: 1}} className="flex flex-col bg-white w-full items-center p-4 ">
              <h2 className="text-4xl">OBJETIVO</h2>
              <p className="w-full text-3xl mt-4 text-center"><em className="text-bluetec text-4xl">R</em>ealizar projetos incríveis, aproveitando o melhor que a tecnologia pode oferecer para o usuário.</p>
            </motion.div>
            <motion.div initial={{x: -200}} animate={{x: 0}} transition={{duration: 1}} className="flex flex-col justify-between w-full items-center p-4 bg-white">
              <h2 className="text-4xl">SOBRE</h2>
              <p className="w-full text-3xl mt-4 text-center">Figma ipsum component variant main layer. Horizontal main scale export content. Layer bullet inspect duplicate content rotate.</p>
            </motion.div>
          </div>
        </div>  
        <div className="flex flex-col justify-between w-full  items-center mt-5 px-6 py-5 text-white projetos">
          <h2 className="text-4xl mb-5">PROJETOS</h2>
          <motion.div ref={carousel} className="flex gap-x-5 w-2/3 overflow-hidden p-5 cursor-grab" whileTap={{cursor: "grabbing"}}>
            <motion.div className="flex gap-x-5" drag="x" dragConstraints={{right: 0, left: -width}}>
              <CardProjeto />
              <CardProjeto />
              <CardProjeto />
              <CardProjeto />
              <CardProjeto />
            </motion.div>
          </motion.div> 
        </div>
        <div className="flex flex-col  justify-between  bg-white w-full items-center px-4 py-14 contatos">
          <div className="flex justify-center gap-4 items-center mt-5">
            <Link to="" className="hover:scale-105 text-center"><BsLinkedin size={40} color="white"/></Link>
            <Link to="" className="hover:scale-105 text-center" ><BsGithub size={40} color="white"/></Link>
            <Link to="" className="hover:scale-105 text-center" ><FaWhatsapp size={40} color="white"/></Link>
          </div>
          <h2 className="text-4xl">CONTATO</h2>
          <form className="w-3/4 mt-5">
            <div className="flex flex-col w-full">
              <label className="w-full">Nome:</label>
              <input type="text"  className="border-2 border-black w-full p-2" placeholder="Informe seu nome ou como gostaria que eu chamasse você :D"/>
              <label>Descrição do motivo do contato:</label>
              <textarea name="" id="" cols={15} rows={10} className="border-2 border-black p-2" placeholder="descreva o motivo do contato e lembrebe-se de deixar seu contato para retorno"></textarea>
            </div>
            <button type="submit" className="float-right mt-4 border-2 p-2 border-black rounded hover:bg-bluetec hover:text-white hover:border-bluetec">ENVIAR</button>
          </form>
        </div>
        <div className="flex flex-col h-9 w-full justify-center items-center mt-5 py-14 text-white ">
          <p className="text-center">copyrigth 2023 - Todos os diretios reservados CLEVDEV</p>
        </div>
      </section>

    </main>
  )
}

export default Home;