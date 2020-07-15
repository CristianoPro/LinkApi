# API RESTful NodeJS - Teste Backend LinkApi

- O objetivo da API, é realizar uma simples integração entre as plataformas PipeDrive e Bling.
- Salvar numa collection MongoDB as oportunidades de venda através de um filtro por dia e valor total.
- Disponibilizar um endpoint para trazer os dados consolidados da collection do MongoDB.

## Ferramentas utilizadas

- 💹 Express - JavaScript back-end Framework;
- 🔥 Axios - Para realizar as requisições
- ⚠️ Youch - (ferramenta responsável pelo error reporting no Express);

## Ferramenta de Lint

- 💖 - ESLInt, Prettier, Editor Config e utilizando a StyleGuide do AirBnB.

##  Instruções de instalação

```yarn & yarn install```

## Configuração
- Altere as variáveis de ambiente conforme a necessidade de acesso no arquivo ```.env```
- Foi utilizado o XML de exemplo do Bling na requisição POST para criar o pedido;