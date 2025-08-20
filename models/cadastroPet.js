const conexao = require('../infraestrutura/conexao.js')

const Pet  = require('../models/Pet.js')


class CadastroPet{
    adiciona(CadastroPet){
        return new Promise((resolve, reject)=>{
            const pet = new Pet(CadastroPet)
            const sql = 'INSERT INTO Pets SET ?'

            conexao.query(sql, pet,(erro, resultado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve({id: resultado.insertId, ...pet})
                }
            })
        
        })
    }
}

module.exports = new CadastroPet()