# 🎮 Pedra, Papel e Tesoura - Explicação do CSS

Este arquivo explica o funcionamento do **CSS utilizado no jogo Pedra, Papel e Tesoura**.
O objetivo desse CSS é **estilizar a interface do jogo**, posicionar os elementos na tela e criar algumas **animações visuais**.

---

# 1️⃣ Reset do CSS

```css
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
```

Este trecho aplica um **reset global** em todos os elementos da página.

### O que cada propriedade faz:

| Propriedade              | Função                                             |
| ------------------------ | -------------------------------------------------- |
| `*`                      | Seleciona **todos os elementos da página**         |
| `margin: 0`              | Remove margens padrão do navegador                 |
| `padding: 0`             | Remove espaçamento interno padrão                  |
| `box-sizing: border-box` | Faz largura e altura incluírem **padding e borda** |

Isso ajuda a evitar problemas de layout.

---

# 2️⃣ Estilo do Body

```css
body {
  background: #630268;
}
```

Define o estilo do **corpo da página**.

| Propriedade  | Função                          |
| ------------ | ------------------------------- |
| `background` | Define a cor de fundo da página |

Nesse caso, foi escolhida uma **cor roxa escura**.

---

# 3️⃣ Seção de Introdução

```css
.introducao {
  margin-top: 40px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  border: solid 2px white;
  height: 200px;
}
```

Essa classe estiliza o **container superior do jogo**, onde geralmente fica:

* Logo
* Nome do jogo
* Placar

### Explicação das propriedades

| Propriedade                      | Função                   |
| -------------------------------- | ------------------------ |
| `margin-top`                     | Espaço acima do elemento |
| `border-radius`                  | Arredonda os cantos      |
| `margin-left/right: auto`        | Centraliza o elemento    |
| `display: flex`                  | Ativa **Flexbox**        |
| `justify-content: space-between` | Espaça os elementos      |
| `align-items: center`            | Alinha verticalmente     |
| `max-width`                      | Limita largura máxima    |
| `border`                         | Cria uma borda branca    |
| `height`                         | Altura do container      |

---

# 4️⃣ Imagem da Introdução

```css
.introducao img {
  padding: 20px;
  width: 30%;
  min-width: 150px;
}
```

Controla o tamanho da **imagem dentro da introdução**.

| Propriedade | Função            |
| ----------- | ----------------- |
| `padding`   | Espaço interno    |
| `width`     | Largura da imagem |
| `min-width` | Largura mínima    |

---

# 5️⃣ Placar do Jogo

```css
.placar {
  background-color: white;
  font-family: sans-serif;
  width: 200px;
  height: 150px;
  margin-right: 20px;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

Essa classe estiliza o **placar do jogo**.

O placar mostra a **pontuação do jogador**.

### Flexbox utilizado

| Propriedade               | Função                |
| ------------------------- | --------------------- |
| `display: flex`           | ativa flexbox         |
| `flex-direction: column`  | elementos em coluna   |
| `align-items: center`     | centraliza horizontal |
| `justify-content: center` | centraliza vertical   |

---

# 6️⃣ Texto do Score

```css
.score {
  color: blue;
  font-size: 15px;
  margin-top: 5px;
}
```

Define o estilo do texto **"Score"**.

---

# 7️⃣ Pontuação

```css
.pontuacao {
  font-size: 50px;
  font-weight: bolder;
  color: #534f65;
}
```

Estiliza o **número da pontuação**.

---

# 8️⃣ Área Principal do Jogo

```css
.jogo {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  justify-content: center;
  display: flex;
  margin-top: 150px;
  width: 100%;
  max-width: 600px;
  height: 30%;
}
```

Esse container contém:

* Pedra
* Papel
* Tesoura
* Triângulo de fundo

`position: relative` permite posicionar elementos filhos com `position: absolute`.

---

# 9️⃣ Imagem do Triângulo

```css
.triangulo {
  width: 70%;
  opacity: 2.5;
}
```

Define o triângulo que aparece atrás das opções.

⚠️ Observação:
`opacity` normalmente vai de **0 a 1**, então `2.5` não tem efeito real.

---

# 🔟 Botões de Escolha

```css
.opcao {
  padding: 20px;
  background-color: white;
  border-radius: 50%;
  border: 35px solid;
  width: 250px;
  height: 250px;
  animation: opacidade 2s linear;
  animation: rotatez 1s linear;
}
```

Essa classe cria os **botões do jogo**.

Eles representam:

* Pedra
* Papel
* Tesoura

### Destaques

| Propriedade          | Função                |
| -------------------- | --------------------- |
| `border-radius: 50%` | transforma em círculo |
| `border`             | cria borda colorida   |
| `animation`          | aplica animações      |

---

# Hover nos Botões

```css
.opcao:hover {
  animation: luzDeFundo 2s ease infinite;
}
```

Quando o mouse passa sobre o botão:

✨ uma animação de **brilho aparece**.

---

# Imagens dos Botões

```css
.opcao img {
  width: 100px;
  transition: 0.5s;
}
```

Define o tamanho das imagens dentro dos botões.

---

# Animação ao Passar o Mouse

```css
.opcao :hover {
  transform: rotatey(360deg);
}
```

Quando o mouse passa sobre a imagem:

🔄 a imagem gira **360 graus**.

---

# Cores das Opções

### Papel

```css
.papel {
  border-color: #07d99d;
  box-shadow: 0px 7px 0px #71e89a, inset 0px 7px #d6d6d6;
}
```

### Tesoura

```css
.tesoura {
  border-color: #dd04ae;
  box-shadow: 0px 7px 0px #eb31c3, inset 0px 7px #d6d6d6;
}
```

### Pedra

```css
.pedra {
  border-color: #f7f316;
  box-shadow: 0px 7px 0px #e5f369, inset 0px 7px #d6d6d6;
}
```

Cada opção tem:

* cor de borda diferente
* sombra diferente

---

# Posicionamento das Opções

```css
.conteiner-papel {
  position: absolute;
  top: -130px;
  left: -60px;
}
```

```css
.conteiner-tesoura {
  position: absolute;
  top: -130px;
  right: -60px;
}
```

```css
.conteiner-pedra {
  position: absolute;
  bottom: -70px;
}
```

Essas classes posicionam os botões formando um **triângulo**.

---

# Modal de Regras

```css
.regras {
  width: 500px;
  height: 500px;
  background-color: white;
  display: none;
}
```

Esse elemento mostra **as regras do jogo**.

`display: none` significa que ele começa **escondido**.

---

# Animações

## Fade (aparecer)

```css
@keyframes opacidade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

Usado para fazer elementos **aparecerem suavemente**.

---

## Rotação

```css
@keyframes rotatez {
  from {
    transform: rotatez(0deg);
  }
  to {
    transform: rotatez(360deg);
  }
}
```

Faz um elemento **girar completamente**.

---

## Luz de Fundo

```css
@keyframes luzDeFundo {
  0% {
    box-shadow: 0px 0px 0px 0px;
  }
  50% {
    box-shadow: 0px 0px 700px 10px rgb(59, 142, 250);
  }
}
```

Cria um efeito de **brilho animado** ao redor do botão.

---
