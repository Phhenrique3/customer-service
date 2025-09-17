const jwt = require("jsonwebtoken");

// Middleware para autenticar qualquer usuário logado
function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // formato: "Bearer token"

  if (!token) {
    return res.status(401).json({ erro: "Token não fornecido" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ erro: "Token inválido ou expirado" });
    }

    req.user = user; // salva os dados do payload { id, role }
    next();
  });
}

// Middleware para validar se é admin
function isAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      erro: "Acesso negado. Apenas administradores podem acessar esta rota.",
    });
  }
  next();
}

module.exports = { autenticarToken, isAdmin };
