/**
 * Complete the 'validate' function below. Dont rename it.
 *
 * The function is expected to return an string.
 * The function accepts following parameters:
 * 1. string rows
 *
 * @returns {string} The expected output as specified in the problem statement.
 */

function validate(rows) {
  rows = rows.replace(/\s+/g, "");

  if (rows.length !== 81 || !/^\d+$/.test(rows)) {
    return "entrada invalida";
  }

  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push(
      rows
        .slice(i * 9, (i + 1) * 9)
        .split("")
        .map(Number)
    );
  }

  const grupoValido = (numeros) => {
    const set = new Set(numeros);
    return set.size === 9 && [...set].every((n) => n >= 1 && n <= 9);
  };

  for (let i = 0; i < 9; i++) {
    if (!grupoValido(grid[i])) return "Sudoku invalido";
  }

  for (let j = 0; j < 9; j++) {
    const coluna = [];
    for (let i = 0; i < 9; i++) {
      coluna.push(grid[i][j]);
    }
    if (!grupoValido(coluna)) return "Sudoku invalido";
  }

  for (let linha = 0; linha < 9; linha += 3) {
    for (let coluna = 0; coluna < 9; coluna += 3) {
      const bloco = [];
      for (let i = linha; i < linha + 3; i++) {
        for (let j = coluna; j < coluna + 3; j++) {
          bloco.push(grid[i][j]);
        }
      }
      if (!grupoValido(bloco)) return "Sudoku invalido";
    }
  }

  return "Sudoku valido";

  const sudoku = `
295743861
431865927
876192543
387459216
612387495
549216738
763524189
928671354
154938672
`;

  console.log(validate(sudoku));
}
