import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET single article by slug
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  const formattedArticle = {
    id: article.id,
    slug: article.slug,
    title: article.title,
    category: article.category,
    author: article.author,
    date: new Date(article.created_at).toISOString().split("T")[0],
    image: article.image || "",
    metaDescription: article.meta_description || "",
    content: article.content,
    status: article.status,
  };

  return NextResponse.json(formattedArticle);
}

// PUT update article by slug
export async function PUT(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = await request.json();

  const updateData = {
    title: body.title,
    category: body.category,
    author: body.author,
    image: body.image,
    meta_description: body.metaDescription,
    content: body.content,
    status: body.status,
  };

  const { data, error } = await supabase
    .from("articles")
    .update(updateData)
    .eq("slug", slug)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

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

  return NextResponse.json(formattedArticle);
}

// DELETE article by slug
export async function DELETE(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("slug", slug);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
