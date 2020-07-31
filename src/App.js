import React from 'react';
import dadosIniciais from './data/dados_iniciais.json'
import Menu from './components/Menu';
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        videoTitle="Inteligência Artificial destruindo no dinossauro da Google!"
        videoDescription="Neste vídeo você verá como a Inteligência Artificial aprendeu a jogar o dinossauro da Google! Machine Learning é um ramo da Inteligência Artificial que vem crescendo ano após ano, e junto do Deep Learning, tem realizado feitos incríveis!"
        url="https://www.youtube.com/watch?v=NZlIYr1slAk"
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

       <Carousel
        category={dadosIniciais.categorias[2]}
      />

       <Carousel
        category={dadosIniciais.categorias[3]}
      />

       <Carousel
        category={dadosIniciais.categorias[4]}
      />

       <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;