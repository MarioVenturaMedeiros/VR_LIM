---
sidebar_position: 4
title:  Level Design
---

# Level Design

Este documento apresenta de forma clara o level design definido para o projeto, explicando suas escolhas e justificativas.

O projeto contará inicialmente com apenas um "level": a tela de organização de interiores. Nesse ambiente, o usuário poderá selecionar objetos previamente importados e utilizá-los para montar o espaço interno desejado.

Essa decisão foi tomada devido à limitação de tempo disponível para desenvolvimento. Considerou-se inviável criar uma tela de criação de objetos modelados em 3D, portanto optou-se por concentrar todos os esforços no elemento central do MVP: o design de interiores em si.

Assim, o level principal do sistema é a área de montagem de ambientes como quartos e salas. Por isso, é essencial que a experiência seja fluida, intuitiva e agradável, transmitindo ao usuário que a aplicação é útil, funcional e adequada à realidade — mesmo em ambiente VR.

Um dos primeiros pontos analisados foi a forma ideal de exibir os objetos disponíveis. Foram pesquisadas referências, padrões de interface e aplicações similares para avaliar pontos positivos e negativos de diferentes abordagens.

## Primeira opção: Barra lateral

A barra lateral foi inicialmente considerada como uma forma simples e tradicional de listar os objetos utilizáveis. Embora seja eficiente em muitos contextos, não se mostrou adequada para este projeto.

A barra lateral funciona bem quando o foco principal está no centro da tela e a visão periférica não é essencial. No design de interiores, porém, visualizar todo o ambiente é fundamental. A presença de uma barra lateral comprometeria parte da visão periférica e prejudicaria o processo criativo. Por esse motivo, essa opção foi descartada.

## Segunda opção: Barra horizontal

A barra horizontal apresentou o melhor equilíbrio entre visibilidade e usabilidade. Assim como a barra lateral, permite acesso fácil aos objetos, mas oferece vantagens importantes: por estar posicionada na parte inferior, não interfere na visão periférica, preservando a visualização completa do ambiente.

Além disso, sua largura maior facilita a organização de filtros, categorias e subdivisões (sofás, mesas, camas, cadeiras etc.), acomodando textos e miniaturas de forma mais natural. Por esses motivos, a barra horizontal foi considerada a solução mais adequada para o projeto.

## Terceira opção: Submenu em pop-up

Outra alternativa avaliada foi um submenu que abriria em formato de pop-up, exibindo uma grande quantidade de itens simultaneamente. Embora ofereça boa capacidade de navegação, essa abordagem reduz completamente a visualização do ambiente, obrigando o usuário a abrir e fechar o menu repetidamente para verificar combinações de estilo, cor e proporção.

Esse fluxo interromperia a imersão e tornaria o processo de criação mais lento. Assim, essa opção foi descartada.

## Quarta opção: Roda de objetos (menu radial)

Também foi considerada a implementação de uma roda de objetos, semelhante a menus radiais comuns em jogos. Embora ocupe menos espaço que um pop-up, essa abordagem apresenta limitações significativas quando o catálogo aumenta: a visualização se torna saturada, a navegação perde precisão e o espaço disponível deixa de ser suficiente.

Devido aos problemas de escalabilidade e usabilidade, essa opção também foi descartada.

Abaixo segue uma tabela com uma análise mais detalhada de cada opção.

| Opção                       | Vantagens                                                                                     | Desvantagens                                                                                   |
|-----------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Barra lateral**           | - Familiar para usuários de ferramentas 2D<br>- Escalável verticalmente                       | - Prejudica a visão periférica<br>- Reduz imersão em VR<br>- Ocupa área lateral significativa  |
| **Barra horizontal**        | - Não compromete a visão periférica<br>- Fácil visualização de itens<br>- Ótima para filtros<br>- Boa para VR e navegação por gestos<br>- Mantém a visão completa do ambiente | - Pode exigir rolagem horizontal com muitos itens<br>- Pode competir com elementos próximos ao "chão" em VR |
| **Submenu pop-up**          | - Permite visualizar muitos itens de uma vez<br>- Suporta filtros complexos                   | - Oculta completamente o ambiente<br>- Quebra a imersão<br>- Exige abrir/fechar repetidamente  |
| **Roda de objetos (radial)**| - Seleção rápida quando o catálogo é pequeno<br>- Ocupa pouco espaço                          | - Escalabilidade limitada<br>- Pode saturar visualmente<br>- Fica confuso com muitas categorias |


mesmo que a barra horizontal seja a mais adequada, ela não é perfeita. Como dito na tabela, ela pode competir com elementos próximos ao chão. Para reduzir ao máximo essa desvantagem, foi decidido que essa barra horizontal será vazada, ou seja, transparente, só para dar forma para o usuário para identificar a HUD, porém afetando menor possível a sua experiência.

![select](/img/select.png)

# Tela de Posicionamento de Objetos

Ao selecionar um objeto, o usuário será redirecionado para a tela de posicionamento do objeto. O design foi inspirado em interfaces amplamente utilizadas em jogos, especialmente aquelas que apresentam pequenos tutoriais nos cantos da tela para orientar o jogador sobre suas ações possíveis.

A escolha desse formato tem dois objetivos principais:

1. **Informar usuários iniciantes** sobre as ações disponíveis e o mapeamento dos botões.
2. **Evitar incomodar usuários experientes**, mantendo as instruções discretas e parcialmente ocultas, sem interferir no fluxo de uso.

Esse equilíbrio entre orientação e minimalismo visual permite que a interface seja acolhedora para quem está começando, ao mesmo tempo em que se mantém eficiente para quem já domina o sistema.

---

## Indicadores de Ação e Mini-Tutoriais

Os ícones presentes no canto inferior da tela exibem o mapeamento dos botões e as ações correspondentes, como mover, girar, voltar ou confirmar a colocação do objeto. A inspiração em jogos se justifica pela familiaridade: boa parte dos usuários já está acostumada a esse padrão.

Esses indicadores cumprem dois papéis fundamentais:

- **Ajudar novos usuários a entender rapidamente como interagir com o objeto**.  
- **Minimizar a distração de usuários avançados**, pois a interface não ocupa espaço significativo nem impõe pop-ups ou sobreposições intrusivas.

Assim, a experiência de uso se mantém fluida para todos os perfis.

---

## Troca de Cores — Padrão Inspirado em E-commerce

A paleta vertical de cores foi projetada inspirando-se em plataformas amplamente conhecidas, como a Amazon, onde a troca de cor de produtos é algo comum. Esse padrão facilita a familiarização dos usuários, reduzindo o tempo de aprendizado.

A similaridade com interfaces já populares gera os seguintes benefícios:

- **Redução de esforço cognitivo**, pois o usuário já entende intuitivamente como o sistema funciona.
- **Maior clareza visual**, com opções de cor sempre visíveis.
- **Consistência com o comportamento esperado**, reforçando a sensação de controle.

---

## Feedback Visual — Objetos Colocáveis ou Não Colocáveis

O objeto muda de cor para indicar se pode ou não ser colocado na posição atual. Esse feedback direto é essencial no design de interiores virtual, pois evita erros e frustração.

- **Cor indicando estado válido** → objeto pode ser colocado.  
- **Cor indicando estado inválido** → objeto não pode ser colocado na grade atual.

Esse sistema de cor deixa o processo intuitivo, reduz hesitações e melhora a precisão do posicionamento.

---

## Uso da Grade (Grid)

Foi planejada uma grade simples no espaço inferior como um primeiro passo para auxiliar no posicionamento dos objetos. Embora ainda seja uma ideia inicial e provavelmente não corresponda à versão final, ela serve como experimento de navegação e precisão.

A grade tem como propósito:

- **Ajudar o usuário a alinhar os objetos**, oferecendo referência espacial.  
- **Facilitar o entendimento da profundidade e proporções**, especialmente em ambientes com múltiplos níveis.  
- **Servir como base conceitual** para desenvolver um sistema de encaixe mais polido nas próximas iterações.

A equipe já prevê que o sistema de grid será refinado, adaptado ou até substituído conforme os testes de usabilidade avançarem.

---

## Justificativa Geral das Escolhas

Ao projetar essa tela, buscou-se um equilíbrio entre:

- **Familiaridade** (inspirada em jogos e em e-commerce).  
- **Clareza funcional** (indicadores de cor e mini-tutoriais).  
- **Baixa intrusividade** (informações auxiliares visíveis, mas discretas).  
- **Intuição no posicionamento** (feedback visual e grid experimental).

Essas decisões fortalecem a experiência do usuário, tornam o processo de montagem mais natural e contribuem para um MVP sólido, funcional e agradável de utilizar.

![object_placement](/img/object_placement.png)