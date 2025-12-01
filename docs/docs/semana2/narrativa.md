---
sidebar_position: 3
title: Síntese da Narrativa
---

# Síntese da Narrativa

Para detalhar o fluxo de navegação do usuário e as interações disponíveis em cada etapa da aplicação, foi criada uma síntese narrativa, utilizando uma árvore de decisões para ilustrar o percurso. O fluxo da aplicação centra-se na criação e interação de ambientes em Realidade Virtual, permitindo ao usuário desde o mapeamento do espaço físico até a inserção e configuração de objetos 3D.

![Narrativa](/img/narrativa.png)


## Página Inicial
A **Página Inicial** é o ponto de partida e hub central da navegação. Nela, o usuário encontra as opções principais para iniciar sua jornada:
*   **Novo Design**: Inicia o processo de criação de um novo ambiente.
*   **Designs Salvos**: Acesso à galeria de projetos já criados para visualização ou edição.
*   **Importar Objetos**: Funcionalidade para expandir a biblioteca de assets do usuário.
*   **Configurações**: Ajustes gerais do sistema.

## Novo Design
Ao optar por criar um **Novo Design**, o usuário é levado a escolher como o ambiente virtual será gerado:

*   **Mapear o Ambiente**: O sistema guia o usuário através de instruções para realizar o mapeamento do espaço físico em tempo real, criando uma representação digital.
*   **Importar um Ambiente**: O usuário pode selecionar um arquivo de modelo 3D existente para usar como base.

Ambos os caminhos convergem para a tela de **Desenvolvimento do Novo Design**.

## Desenvolvimento do Novo Design
Esta é a interface principal de interação, onde é possível desenvolver o novo design:
*   **Visualização**: O ambiente é exibido com uma malha quadriculada (grid) sobre as superfícies, indicando claramente as áreas disponíveis para a colocação de objetos.
*   **Menu de Objetos**: Uma interface (footer vazado) na parte inferior permite navegar por categorias e selecionar itens para a cena.

### Interação com Objetos
*   **Selecionar um Objeto**: Ao escolher um item (novo ou já posicionado), o usuário pode visualizar e interagir com o objeto.
*   **Posicionamento e Personalização**: O objeto pode ser posicionado onde a malha indica disponibilidade. Um menu lateral oferece opções adicionais, como a alteração de cores do objeto selecionado.

### Finalização
*   **Salvar Design**: Quando o usuário estiver satisfeito, ele pode salvar o projeto, e retornar a Página Inicial com o novo design armazenado em "Designs Salvos".

