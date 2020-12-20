# Countdown

![GitHub repo size](https://img.shields.io/github/repo-size/phedrakeson/countdown?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/phedrakeson/countdown?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/phedrakeson/countdown?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/phedrakeson/countdown?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/phedrakeson/countdown?style=for-the-badge)

![](https://i.gyazo.com/759d222ced3e894ac790e168cef37bf5.gif)

> Este repositório contém uma função construtora (class) javascript que vai fazer a contagem regressiva para uma data em específico. Como exemplo eu fiz uma contagem até o Natal.


## ☕ Usando Countdown

Para utilizar, basta fazer um clone deste repositório ou copiar apenas o module countdown.js e adicioná-lo ao seu projeto.

Para adicionar uma data, basta criar uma nova função countdown, preenchendo com uma data-limite completa, assim como por exemplo:

```javascript
const daysToChristmas = new Countdown('24 December 2020 23:59:59 GMT-0300');

```

Seguindo o exemplo em que fiz neste repositório, você pode criar um setInterval desta nova function de 1 segundo e jogar para o DOM os valores respectivos, como por exemplo:

```javascript
setInterval(() => {
  document.querySelector('[data-day]').innerText = daysToChristmas.totalTimeLeft.days;
  document.querySelector('[data-hours]').innerText = daysToChristmas.totalTimeLeft.hours;
  document.querySelector('[data-minutes]').innerText = daysToChristmas.totalTimeLeft.minutes;
  document.querySelector('[data-seconds]').innerText = daysToChristmas.totalTimeLeft.seconds;
}, 1000)

```

Os valores de dias, horas, minutos e segundos restantes para a data-limite estão dentro de um objeto chamado totalTimeLeft na Class.

Lembrando que só irá funcionar no arquivo javascript que você for fazer o import desta module!

## 📫 Contribuindo para Countdown
Para contribuir com Countdown, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#nome-do-projeto)<br>
