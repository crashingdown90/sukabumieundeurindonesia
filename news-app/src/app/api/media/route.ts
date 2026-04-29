import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .storage
    .from('media')
    .list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' }
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Generate public URLs for each file
  const filesWithUrl = data
    .filter(file => file.name !== '.emptyFolderPlaceholder')
    .map(file => {
      const { data: urlData } = supabase.storage.from('media').getPublicUrl(file.name);
      return {
        id: file.id,
        name: file.name,
        created_at: file.created_at,
        url: urlData.publicUrl
      };
    });

  return NextResponse.json(filesWithUrl);
}
