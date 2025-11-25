---
sidebar_position: 1
title: Requisitos
---

# Especificação Técnica: Sistema de Visualização e Layout 3D

---

## 1. Introdução

O presente documento tem por objetivo definir as especificações técnicas, funcionais e de qualidade para o desenvolvimento do projeto. Este software visa oferecer uma ferramenta interativa que permita a usuários importar, visualizar e manipular modelos tridimensionais dentro de um espaço virtual ou de realidade aumentada.

O foco central da aplicação reside na experiência do usuário (UX) ao planejar layouts, garantindo que objetos possam ser posicionados de forma intuitiva através de interações de "arrastar e soltar", com validações visuais e sonoras imediatas sobre a viabilidade física do posicionamento (colisões e limites de espaço). O sistema deve equilibrar alta fidelidade visual com performance otimizada, garantindo tempos de resposta curtos e fluidez na renderização.

---

## 2. Matriz de Requisitos do Sistema

A tabela abaixo detalha os Requisitos Funcionais (RF) — o que o sistema deve fazer — e os Requisitos Não Funcionais (RNF) — como o sistema deve se comportar — expandindo seus conceitos para garantir clareza no desenvolvimento.

| ID | Tipo | Requisito | Detalhamento Técnico e Critérios de Aceite |
| :--- | :--- | :--- | :--- |
| **RF-01** | Funcional | **Importar modelo 3D** | O sistema deve processar arquivos externos para integrá-los à biblioteca local. Deve suportar a leitura da malha, texturas e metadados do objeto. |
| **RF-02** | Funcional | **Visualizar modelos importados** | Exibição de lista ou galeria de ativos (assets) disponíveis após a importação, permitindo pré-visualização antes da inserção na cena. |
| **RF-03** | Funcional | **Drag and Drop ("Puxar" objeto)** | Implementação de input que converte as coordenadas 2D da interface (mouse/toque) em um vetor de posição no mundo 3D, instanciando o objeto na cena. |
| **RF-04** | Funcional | **Alterar objeto no espaço** | Ferramentas de transformação que permitem translação (mudança de lugar) e rotação do objeto em seus eixos locais ou globais. |
| **RF-05** | Funcional | **Visualizar erro de posicionamento** | O sistema deve detectar colisões ou limites de fronteira e comunicar visualmente que o objeto "não cabe" na coordenada atual. |
| **RF-06** | Funcional | **Modelagem de espaço para edição** | Módulo editor que permite ao usuário definir as dimensões e limites do ambiente (sala/cenário) onde os objetos serão distribuídos. |
| **RNF-01** | Não Funcional | **Visualização com resolução suficiente** | Os modelos devem manter fidelidade de textura e polígonos adequados para identificação clara, sem distorções visuais severas. |
| **RNF-02** | Não Funcional | **Fluidez no controle** | A taxa de atualização (framerate) deve se manter estável durante a manipulação para evitar "stuttering" ou sensação de peso no controle. |
| **RNF-03** | Não Funcional | **Tempo máximo de resposta (150ms)** | A latência entre o input do usuário e a reação visual na tela não deve exceder 150 milissegundos para garantir imersão. |
| **RNF-04** | Não Funcional | **Feedback sensorial completo** | Uso obrigatório de código de cores (ex: vermelho para erro), avisos de UI e efeitos sonoros para confirmar ações ou alertar sobre colisões. |
| **RNF-05** | Não Funcional | **Performance de importação (menor que 30s)** | O processamento de novos ativos não deve bloquear a aplicação por mais de 30 segundos, garantindo agilidade no fluxo de trabalho. |

---

## 3. Estimativa de Esforço e Complexidade Técnica

Nesta seção, correlacionamos os requisitos listados acima com as tarefas técnicas necessárias para implementá-los, atribuindo o nível de dificuldade e a disciplina envolvida.

| Requisitos Associados | Tarefa / Função Necessária | Disciplina | Dificuldade (0-10) | Observações Técnicas |
| :--- | :--- | :--- | :---: | :--- |
| **RF-05, RNF-04** | **Feedbacks das ações** | Programação e UX | **10** | Complexidade máxima devido à necessidade de sincronizar áudio, animação de UI e troca de materiais (shaders) em tempo real sem onerar a performance. |
| **RF-05** | **Verificação de espaço do objeto** | Programação | **8** | Envolve matemática vetorial e algoritmos de detecção de colisão (bounding box/mesh collider) contínuos para determinar se o objeto cabe no local. |
| **RF-03, RNF-03** | **Drag and drop** | Programação | **7** | Requer Raycasting preciso da câmera para o plano de chão e lógica de "ancoragem" do objeto ao cursor/dedo com resposta imediata. |
| **RF-04** | **Rotação do objeto** | Programação | **5** | Manipulação de Quaternions ou Euler Angles. Complexidade média para garantir que a rotação seja intuitiva em relação à visão do usuário. |
| **RF-06** | **Modelagem do espaço** | Programação | **7** | Criação de malhas procedurais simples ou instanciamento de paredes baseadas em medidas inseridas. |
| **RF-01, RF-02** | **Modelagem dos modelos 3D** | Modelagem 3D | **2** ou **9** | **Nível 2:** Se utilizar assets prontos (importação simples).<br></br>**Nível 9:** Se a tarefa exigir modelagem, texturização e rigging manual de cada objeto. |

---

Será feito primeiro o mapeamento do lugar e o sistema de drag and drop. Caso não tenha tempo, será feito testes 100% no mundo virtual, sem a união do virtual com o real. 

Precisa ser destacado que como o projeto é focado na experiência do usuário, deverá ser reservado um tempo para testes.

## 4. Conclusão

A análise dos requisitos funcionais e não funcionais, cruzada com a estimativa de dificuldade das tarefas, indica que o núcleo crítico do desenvolvimento (o "Core Loop") reside na interatividade e no feedback do sistema.

As tarefas de maior complexidade (**Dificuldade 10 e 8**) estão diretamente ligadas à experiência sensorial do usuário: a **Verificação de Espaço** e os **Feedbacks das Ações**. Isso demonstra que, embora a manipulação 3D (rotação, modelagem do espaço) seja tecnicamente desafiadora, o maior risco do projeto encontra-se na "sensação" de uso — garantir que o usuário saiba exatamente quando e por que um objeto não pode ser colocado em determinado lugar, através de avisos sonoros e visuais imediatos.

Recomenda-se, portanto, priorizar o desenvolvimento do sistema de feedbacks e colisão nas primeiras sprints, dado que estes elementos impactam diretamente os requisitos não funcionais de tempo de resposta e usabilidade, definindo o sucesso da aplicação.