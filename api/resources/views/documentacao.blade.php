<div>
    <h4>Documentação WS</h4>
    <hr>
    <h5>Importar</h5>
    <p>path: <strong>'rss/import'</strong></p>
    <p>method: <strong>'POST'</strong></p>
    <p>paramentos:</p>
    <table>
        <tr>
            <th>Campo</th>
            <th>tipo</th>
            <th>obs</th>
        </tr>
        <tr>
            <td>file</td>
            <td>file</td>
            <td>Aqruivo XML com padrões RSS</td>
        </tr>
    </table>
    <p>retorno: <strong>status | mensagem | json(opcional)</strong>: Array</p>
    <hr>
    <h5>Exportar</h5>
    <p>path: <strong>'rss/exportar/{?}'</strong> ({?} = termo para filtrar rss)</p>
    <p>method: <strong>'GET'</strong></p>
    <p>retorno: <strong>status | mensagem | json(opcional)</strong>: Array</p>
</div>