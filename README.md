# FutLab 90

**Futebol visto pelo tempo.**

Projeto hobby e independente para explorar jogadores de futebol por estatística, contexto e **tempo efetivamente jogado**.

## Site

A página inicial funciona como um pequeno catálogo de atletas. Cada jogador possui sua própria área de análise.

### Estudo 01 — Lorran

Monitoramento Estatístico Pós-Copa 2026, com:

- recorte observado de 216 minutos;
- gols, assistências e G+A normalizados pelo tempo;
- comparação com o elenco do Flamengo;
- comparação com referências globais da mesma idade (20 anos);
- comparação com Anthony Valencia e Joaquín Freitas;
- valências ofensivas e defensivas públicas;
- valor de mercado e fontes;
- modelo estimativo de custo de formação;
- rastreabilidade das fontes utilizadas.

## Estrutura

```text
futlab90/
├── index.html                  # Home / seletor de jogadores
├── marca.html                  # Prancha visual da marca
├── vercel.json                 # Configuração de publicação
├── assets/
│   ├── futlab90-logo.svg
│   └── futlab90-mark.svg
└── jogadores/
    └── lorran/
        ├── index.html
        ├── fragment-1.html
        ├── fragment-2.html
        ├── fragment-3.html
        ├── fragment-4.html
        ├── style-1.css
        ├── style-2.css
        ├── style-3.css
        └── app.js
```

## Publicação no Vercel

O projeto é estático e não exige build ou instalação de dependências. Basta importar este repositório no Vercel e publicar usando a raiz do projeto.

## Próximos jogadores

Para adicionar outro atleta, crie uma pasta em `jogadores/<slug-do-atleta>/` e adicione o card correspondente na home.

## Nota

FutLab 90 é um projeto hobby, independente e sem vínculo com clubes, atletas ou plataformas estatísticas. Dados e fontes são identificados em cada estudo.
