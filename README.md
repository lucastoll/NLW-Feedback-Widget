# NLW-Feedback-Widget

OBS: Essa branch é uma abstração da main, leia o readme da main caso queira entender o projeto.

Nesta branch ao invés de enviar o e-mail somente em ambiente de testes, foi utilizado a smtp do gmail para realmente enviar o email, de forma que o nodemailer loga na sua conta e envia o e-mail, conforme visto no vídeo abaixo:

https://user-images.githubusercontent.com/86172649/167921813-52e2ac66-207f-4aec-9ce1-b1ed5bda4d2a.mp4

Eu só consegui fazer isso funcionar em ambiente de DESENVOLVIMENTO, pois com a página em produção, a ideia de logar no gmail para realmente mandar o email é barrada pelo CORS, reproduzindo um erro no deploy do back-end, que diz que é necessário logar atráves de um web client, caso alguem saiba alguma solução para isso, por favor me contate. 

## ⚙ Configuração

O transporter é configurado da seguinte maneira para o GMAIL:<br> 
![image](https://user-images.githubusercontent.com/86172649/167947188-5f6f27b7-c02d-4f18-9aeb-81639bebb8bd.png)

Foram utilizadas variáveis locais para proteger os dados do meu email no ghub, troque as variáveis locais vistas na imagem acima ou faça um arquivo .env da seguinte maneira: 

![image](https://user-images.githubusercontent.com/86172649/167947742-41ef235c-f9c8-49cf-9fcf-090c8c22b6a2.png)



