## Trabalho UNOPAR 30/05/2016

<h4>Alunos</h4>
<ul>  
    <li>Lucas Messias <strong>lucasmessias.pg@outlook.com</strong></li>
    <li>Jonas Tortato <strong>tortato.jonas@gmail.com</strong></li>
</ul>  

## Ferramentas

<ul>
    <li>Laravel 5.2</li>
    <li>AngularJS 2 (RC1)</li>
    <li>PostgreSQL 9.5.1 <small>(Poder ser usado tambem mysql ou sqlite)</small</li>
</ul>

## Instalação

<ol>
    <li><p>Faça donwload do projeto clicando <a href="https://github.com/LucasMessiasPG/trabalho_rss/archive/master.zip">aqui</a></p></li>
    <li><p>Dentro de 'api' renomeie o aquivo .env.example para .env (caso seja em linux este aquivo pode estar oculto)</p></li>
    <li>
    <p>Abra o aquivo .env e altere as conifgurações do banco para o seu banco de prefrencia</p>
    <pre>
        // Escolha um dos 3 bancos
        DB_CONNECTION= pgsql | mysql | sqllite
        DB_PORT= *****
        DB_HOST= *****
        DB_DATABASE= *****
        DB_USERNAME= *****
        DB_PASSWORD= *****
    </pre>
    </li>
    <li>
    <p>Eexecute este comando (caso nao possua composer <a href="https://getcomposer.org/">click aqui</a>)</p>
    <pre>
        $cd /path/to/api
        $composer install
        // após a instalação
        $php artisan migrate // isso criará as tabelas nescessarias
    </pre>
   </li>
   <li>
   <p>Dentro da pasta 'client' execute os seguintes comandos (é necessario ter o node instalado. Para instalar <a href="https://nodejs.org/en/">click aqui</a>)</p>
   <pre>
        $cd /path/to/client
        $npm install
   </pre>
   </li>
   <li>
   <p>Por ultimo para iniciar</p>
   <pre>
        // para iniciar o server
        $cd /path/to/api
        $php artisan server
        
        // para iniciar o cliente
        $cd /path/to/client
        $npm start
   </pre>
   </li>
</ol>

## WebService

<ol>
    <li>Após o iniciar o server</li>
    <pre>
        http://localhost:8000
    </pre>
</ol>

## Licence

<a href='https://opensource.org/licenses/MIT'>MIT licenses</a>