class Atendimento {
  // Adiciona atendimento (versão ajustada)
  async adiciona(novoAtendimento, res) {
    // 1. Desestruturar os campos recebidos do front-end
    const { cliente_id, pet_id, data, observacoes, servico, status } = novoAtendimento;

    // 2. Validação dos campos obrigatórios
    if (!cliente_id || !pet_id || !data || !servico || !status) {
      return res.status(400).json({ erro: 'Campos obrigatórios não foram preenchidos.' });
    }

    // 3. Formatar a data recebida do front-end para o formato do MySQL
    // O front-end envia 'YYYY-MM-DDTHH:mm'. O MySQL aceita isso diretamente.
    // Se precisar de um formato específico, a conversão é mais simples.
    const dataAgendamentoFormatada = moment(data).format('YYYY-MM-DD HH:mm:ss');
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');

    // 4. Montar o objeto a ser inserido, garantindo os nomes corretos das colunas
    const atendimentoParaSalvar = {
      cliente_id: Number(cliente_id), // Garante que seja um número
      pet_id: Number(pet_id),         // Garante que seja um número
      data_agendamento: dataAgendamentoFormatada, // Use o nome da sua coluna
      servico,
      status,
      observacoes,
      dataCriacao, // Coluna para registrar quando o agendamento foi criado
    };

    try {
      // 5. Executar a query de inserção
      const [resultados] = await conexao.query(
        'INSERT INTO Atendimentos SET ?',
        [atendimentoParaSalvar]
      );

      // 6. Retornar uma resposta clara para o front-end
      res.status(201).json({
        mensagem: 'Agendamento criado com sucesso!',
        id: resultados.insertId,
        ...atendimentoParaSalvar,
      });
    } catch (erro) {
      console.error('ERRO AO SALVAR AGENDAMENTO:', erro); // Log detalhado no servidor
      res.status(400).json({ erro: 'Erro ao salvar agendamento no banco de dados.', detalhes: erro.sqlMessage || erro.message });
    }
  }

  // ... seus outros métodos (lista, buscaPorId, etc.) permanecem os mesmos
}
