import React, { useState, useRef } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(to right, #fceabb,rgb(248, 0, 207));
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
`;

const Pergunta = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color:rgb(0, 0, 0);
`;

const SimBtn = styled.button`
  background-color:rgb(255, 0, 128);
  color: white;
  padding: 1rem 2rem;
  margin: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff1493;
  }
`;

const NaoBtn = styled.button`
  background-color: #ccc;
  color: black;
  padding: 1rem 2rem;
  margin: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
`;

const Mensagem = styled.div`
  margin-top: 2rem;
  animation: fadeIn 1s ease;

  h2 {
    font-size: 1.8rem;
    color: #d10068;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    max-width: 600px;
    margin: auto;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function App() {
  const [aceitou, setAceitou] = useState(false);
  const [naoCount, setNaoCount] = useState(0);
  const naoBtn = useRef(null);

  const handleNaoClick = () => {
    setNaoCount(prev => prev + 1);
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    if (naoBtn.current) {
      naoBtn.current.style.left = `${x}px`;
      naoBtn.current.style.top = `${y}px`;
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Pergunta>Você, Heidy, aceita namorar comigo? 💖</Pergunta>

      {!aceitou ? (
        <>
          {naoCount >= 5 && (
            <SimBtn onClick={() => setAceitou(true)}>Sim 💘</SimBtn>
          )}
          <NaoBtn ref={naoBtn} onClick={handleNaoClick}>Não 😢</NaoBtn>
        </>
      ) : (
        <Mensagem>
          <h2>Você acabou de fazer o Diogo mais feliz do mundo! 💍✨</h2>
          <p>
            Prometo te encher de amor, carinho, memes engraçados e cafuné eterno.  
            Essa história só está começando, e ela vai ser linda com você ao meu lado.  
            Te amo, Heidy! 💗
          </p>
        </Mensagem>
      )}
    </Container>
  );
}

export default App;
