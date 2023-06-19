import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { livros } = extractData(filePath);

  if (!livros)
    return res.status(404).json({ message: "Livros não encontrados!" });

  if (method === "POST") {
    const { nome, autor, descricao } = req.body;
    livros.push({ nome: nome, autor: autor, descricao: descricao });

    fs.writeFileSync(filePath, JSON.stringify({ livros: livros }));

    res.status(200).json({
      message: `Livro ${nome} adicionado com sucesso!`,
    });
  }
}
