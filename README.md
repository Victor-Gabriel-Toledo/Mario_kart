<h1>🏎️ Simulador de Mario Kart.JS</h1>

<table>
  <tr>
    <td>
      <img src="./docs/header.gif" alt="Mario Kart" width="200">
    </td>
    <td>
      <b>Objetivo:</b>
      <p>
        Projeto desenvolvido em JavaScript com foco em lógica de programação.
        O simulador reproduz uma corrida inspirada em Mario Kart, utilizando
        sorteio de dados, atributos dos personagens e diferentes tipos de pista.
      </p>
    </td>
  </tr>
</table>

<h2>👥 Personagens</h2>

<p>
Os personagens abaixo possuem atributos distintos e podem ser utilizados
em disputas. No estado atual do projeto, a corrida ocorre entre dois jogadores,
mas a estrutura permite futuras expansões.
</p>

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p><b>Mario</b></p>
      <img src="./docs/mario.gif" width="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 4</p>
      <p>Manobrabilidade: 3</p>
      <p>Poder: 3</p>
    </td>

   <td style="border: 1px solid black; text-align: center;">
      <p><b>Peach</b></p>
      <img src="./docs/peach.gif" width="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 2</p>
    </td>

   <td style="border: 1px solid black; text-align: center;">
      <p><b>Yoshi</b></p>
      <img src="./docs/yoshi.gif" width="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 3</p>
    </td>
  </tr>

  <tr>
    <td style="border: 1px solid black; text-align: center;">
      <p><b>Bowser</b></p>
      <img src="./docs/bowser.gif" width="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 5</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>

   <td style="border: 1px solid black; text-align: center;">
      <p><b>Luigi</b></p>
      <img src="./docs/luigi.gif" width="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 3</p>
      <p>Manobrabilidade: 4</p>
      <p>Poder: 4</p>
    </td>

   <td style="border: 1px solid black; text-align: center;">
      <p><b>Donkey Kong</b></p>
      <img src="./docs/dk.gif" width="60">
    </td>
    <td style="border: 1px solid black; text-align: center;">
      <p>Velocidade: 2</p>
      <p>Manobrabilidade: 2</p>
      <p>Poder: 5</p>
    </td>
  </tr>
</table>

<h3>🕹️ Regras & Mecânicas</h3>

<b>Jogadores:</b>
<ul>
  <li>Dois personagens são selecionados para disputar a corrida</li>
  <li>Cada personagem possui atributos de velocidade, manobrabilidade e poder</li>
</ul>

<b>Pista:</b>
<ul>
  <li>A corrida possui 5 rodadas</li>
  <li>A cada rodada é sorteado um tipo de pista:</li>
  <ul>
    <li><b>RETA:</b> dado + VELOCIDADE → vencedor ganha 1 ponto</li>
    <li><b>CURVA:</b> dado + MANOBRABILIDADE → vencedor ganha 1 ponto</li>
    <li><b>CONFRONTO:</b> dado + PODER → perdedor sofre penalidades</li>
  </ul>
</ul>

<b>Confrontos:</b>
<ul>
  <li>O perdedor pode ser atingido por um <b>casco (-1 ponto)</b> ou <b>bomba (-2 pontos)</b></li>
  <li>A pontuação nunca pode ser negativa</li>
  <li>O vencedor pode ganhar um <b>turbo</b> e receber +1 ponto extra</li>
</ul>

<b>Condição de Vitória:</b>
<ul>
  <li>Após 5 rodadas, vence quem acumular mais pontos</li>
  <li>Em caso de empate, a corrida termina empatada</li>
</ul>

<h3>🚀 Tecnologias Utilizadas</h3>
<ul>
  <li>JavaScript (Node.js)</li>
  <li>Lógica de programação</li>
</ul>
