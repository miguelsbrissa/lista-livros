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

  if (method === "DELETE") {
    const nome = req.query.id;
    const newLivros = livros.filter((livro) => livro.nome !== nome)

    fs.writeFileSync(filePath, JSON.stringify({ livros: newLivros }));

    res.status(200).json({
      message: `Livro ${nome} removido com sucesso!`,
    });
  }
}
