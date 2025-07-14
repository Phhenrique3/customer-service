const conexao = require('../infraestrutura/conexao');

class loginCliente{ 

    async loginCliente(email){
        const sql = 'SELECT * FROM clinetes WHERE email = ? '
        const [rows] = await conexao.query(sql,[email])
        return rows[0]
    }
}

module.exports = new loginCliente