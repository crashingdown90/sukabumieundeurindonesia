/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  console.log("Reading articles.json...");
  const rawData = fs.readFileSync('src/data/articles.json', 'utf-8');
  const articles = JSON.parse(rawData);

  console.log(`Found ${articles.length} articles to migrate.`);

  for (const article of articles) {
    const newArticle = {
      title: article.title,
      slug: article.slug,
      category: article.category,
      author: article.author,
      image: article.image || "",
      meta_description: article.metaDescription || "",
      content: article.content || "",
      status: article.status || "draft",
    };

    const { error } = await supabase
      .from('articles')
      .upsert(newArticle, { onConflict: 'slug' })
      .select();

    if (error) {
      console.error(`Failed to migrate: ${article.title}`, error);
    } else {
      console.log(`Migrated: ${article.title}`);
    }
  }
  
  console.log("Migration complete!");
}

migrate();
