# DEVinHouse_M1P2

Projeto 2 - Módulo 1 do curso DEVinHouse (SENAI)  
Última atualização: 05/02/2022

<details>
  <summary>log</summary>
  
- 02/02/2022: adicionado funcionalidade de adicionar novo usuário;
- 05/02/2022: adicionado _datepicker_ para selecionar mês de geração; ajustado layout do gráfico; colocado limitação para selecionar apenas meses do ano de 2022; ajustado animação do _angrySun_; adicionado informação de usuário em cima do menu.
</details>

<details>
  <summary>bugs/limitações</summary>
  
- Não é possível adicionar geração de outros anos (possível solução: ao adicionar geração, adicionar objeto com todos os meses daquele ano, verificar se ano já existe e apenas substituir/adicionar o mês selecionado. No gráfico colocar um _select_ para os anos e exibir);
</details>

Unidades e gerações registrados em (localhost:3333/unidades do servidor "db.json").
<br/>
Usuários registrados em (localhost:3333/usuarios do servidor "db.json"):

---

- login: usuario1@email.com
- senha: senha1

---

- login: usuario2@email.com
- senha: senha2

---

- login: usuario3@email.com
- senha: senha3

---

(Backup do servidor com exemplos de usuários e unidades em "db_exemplo.txt")

## Objetivos

Criação de uma aplicação em React para o gerenciamento de unidades geradoras de energia.

<details>
  <summary>Requisitos</summary>
  
- Tela de login;
- Menu lateral;
- Tela Dashboard;
- Tela com lista de Unidades;
- Tela para cadastro de Unidade;
- Tela para edição de Unidade;
- Botão de remover unidade na tela de listagem;
- Botão de editar unidade na tela de listagem;
- Tela de lançamento de geração mensal.
</details>

<details>
  <summary>Critérios para máxima avaliação</summary>
  
- Criação dos cards e gráfico na tela Dashboard, usando a API para a montagem de dados (_react-chartjs-2_);
- Tela de login conforme mockup com eventos de _onChange_ e _onSubmit_ para validação de dados;
- Menu lateral conforme mockup com roteamento para da aplicação utilizando _react-router-dom_;
- Tela de listagem de unidades utilizando os dados da rota /unidades e inserindo o botão de remover e editar em cada linha;
- Tela de cadastro de unidade com todos os campos, conforme mockup, e salvando valores na rota /unidades via _POST_ pelo evento _onSubmit_ do forms;
- Tela de lançamento de geração mensal com todos os campos, conforme mockup, e salvando valores na rota /geracoes via _POST_;
- Design agrádavel e intuitivo, com a estilização de todos os componentes;
- Botão de remover com evento _onClick_ para removação da unidade no servidor e refletir mudança na tela;
- Botão de editar que redireciona para tela de edição que realiza a atualização no servidor.
</details>
<br/>

## Etapas

- REACT
  - Separação de telas;
  - Separação de componente;
  - Uso de _styled-components_ para estilização;
  - Definição de rotas;
  - Variáveis do _useContext_;
  - Validação de dados;
  - Função dos componentes;
  - Uso do _react-chartjs-2_;
  - Uso do _react-toastify_;
  - Uso do _react-uuid_;
  - Remoção de bugs.
