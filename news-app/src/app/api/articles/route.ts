import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET all articles
export async function GET() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Map database format to frontend format
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formattedArticles = articles.map((a: any) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    category: a.category,
    author: a.author,
    date: new Date(a.created_at).toISOString().split("T")[0],
    image: a.image || "",
    metaDescription: a.meta_description || "",
    content: a.content,
    status: a.status,
  }));

  return NextResponse.json(formattedArticles);
}

// POST new article
export async function POST(request: Request) {
  const body = await request.json();

  const newArticle = {
    title: body.title,
    slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    category: body.category || "berita-utama",
    author: body.author || "REDAKSI",
    image: body.image || "",
    meta_description: body.metaDescription || "",
    content: body.content || "",
    status: body.status || "draft",
  };

  const { data, error } = await supabase
    .from("articles")
    .insert([newArticle])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Format to return
  const formattedArticle = {
    id: data.id,
    slug: data.slug,
    title: data.title,
    category: data.category,
    author: data.author,
    date: new Date(data.created_at).toISOString().split("T")[0],
    image: data.image || "",
    metaDescription: data.meta_description || "",
    content: data.content,
    status: data.status,
  };

  return NextResponse.json(formattedArticle, { status: 201 });
}
