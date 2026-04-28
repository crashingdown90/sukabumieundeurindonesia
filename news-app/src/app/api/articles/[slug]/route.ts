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

// GET single article by slug
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = readArticles();
  const article = articles.find((a: { slug: string }) => a.slug === slug);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }
  return NextResponse.json(article);
}

// PUT update article by slug
export async function PUT(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = await request.json();
  const articles = readArticles();
  const index = articles.findIndex((a: { slug: string }) => a.slug === slug);

  if (index === -1) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  articles[index] = {
    ...articles[index],
    ...body,
    updatedAt: new Date().toISOString(),
  };

  writeArticles(articles);
  return NextResponse.json(articles[index]);
}

// DELETE article by slug
export async function DELETE(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = readArticles();
  const filtered = articles.filter((a: { slug: string }) => a.slug !== slug);

  if (filtered.length === articles.length) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  writeArticles(filtered);
  return NextResponse.json({ success: true });
}
