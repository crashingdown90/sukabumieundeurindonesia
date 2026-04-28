import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/articles.json");

function readArticles() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeArticles(data: unknown[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

// GET all articles
export async function GET() {
  const articles = readArticles();
  return NextResponse.json(articles);
}

// POST new article
export async function POST(request: Request) {
  const body = await request.json();
  const articles = readArticles();

  const newArticle = {
    id: String(Date.now()),
    slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    title: body.title,
    category: body.category || "berita-utama",
    author: body.author || "REDAKSI",
    date: body.date || new Date().toISOString().split("T")[0],
    image: body.image || "",
    metaDescription: body.metaDescription || "",
    content: body.content || "",
    status: body.status || "draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  articles.unshift(newArticle);
  writeArticles(articles);

  return NextResponse.json(newArticle, { status: 201 });
}
