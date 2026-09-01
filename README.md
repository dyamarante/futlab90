# FutLab 90

**Futebol visto pelo tempo.**

Projeto hobby e independente para explorar jogadores de futebol por estatística, contexto e **tempo efetivamente jogado**.

## Site

A página inicial funciona como um catálogo de atletas. Cada jogador possui sua própria área de análise.

### Estudo 01 — Lorran

Monitoramento Estatístico Pós-Copa 2026, com recorte de 216 minutos, gols, assistências, G+A, comparações por tempo, valências, mercado, formação e fontes.

### Estudo 02 — Daniel Thuram

Estudo do zagueiro de 17 anos com foco em **visão de jogo, construção e saída de bola**:

- recorte profissional pós-Copa: 13 minutos contra o Lausanne;
- separação rigorosa entre dado publicado e dado não disponível;
- passes certos, passes verticais, quebras de linha e progressivos marcados como `N/D` quando não há tracking individual verificável do amistoso;
- amostras complementares do Sub-20 e Sub-17;
- evidências publicadas sobre leitura de jogo e saída de bola;
- referências de construção de Léo Pereira, Vitão e Léo Ortiz;
- checklist de métricas a acompanhar nas próximas aparições;
- material audiovisual público para scouting;
- fontes clicáveis e metodologia.

## Estrutura

```text
futlab90/
├── index.html                  # Home / seletor de jogadores
├── marca.html                  # Prancha visual da marca
├── vercel.json                 # Configuração de publicação
├── assets/
│   ├── futlab90-logo.svg
│   ├── futlab90-mark.svg
│   ├── lorran.png
│   ├── joaquin.png
│   ├── daniel-thuram.webp
│   └── daniel-thuram.svg      # Fallback local
└── jogadores/
    ├── lorran/
    │   └── ...
    └── daniel-thuram/
        ├── index.html
        ├── style.css
        └── app.js
```

## Publicação no Vercel

O projeto é estático e não exige build ou instalação de dependências. Basta importar este repositório no Vercel e publicar usando a raiz do projeto.

## Próximos jogadores

Para adicionar outro atleta, crie uma pasta em `jogadores/<slug-do-atleta>/` e adicione o card correspondente na home.

## Nota

FutLab 90 é um projeto hobby, independente e sem vínculo com clubes, atletas ou plataformas estatísticas. Dados e fontes são identificados em cada estudo.
