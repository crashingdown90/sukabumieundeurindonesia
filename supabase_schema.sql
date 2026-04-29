-- SKEMA DATABASE SUKABUMI EUNDEUR
-- Silakan jalankan script ini di SQL Editor Supabase Anda

-- 1. TABEL ARTIKEL (News App)
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL,
    author TEXT DEFAULT 'REDAKSI',
    image TEXT,
    meta_description TEXT,
    content TEXT NOT NULL,
    status TEXT DEFAULT 'draft',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. TABEL EVENTS & TICKETS (Ticket App)
CREATE TABLE IF NOT EXISTS public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    date TIMESTAMP WITH TIME ZONE,
    location TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    description TEXT,
    poster_url TEXT,
    status TEXT DEFAULT 'upcoming',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.ticket_orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    buyer_name TEXT NOT NULL,
    buyer_email TEXT NOT NULL,
    buyer_phone TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    payment_status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. TABEL MERCHANDISE (Shop App)
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    description TEXT,
    image_url TEXT,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.shop_orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    buyer_name TEXT NOT NULL,
    buyer_email TEXT NOT NULL,
    buyer_phone TEXT NOT NULL,
    shipping_address TEXT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    payment_status TEXT DEFAULT 'pending',
    shipping_status TEXT DEFAULT 'processing',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- TABEL PENGHUBUNG ORDER-PRODUCT (Many-to-Many untuk detail order)
CREATE TABLE IF NOT EXISTS public.shop_order_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID REFERENCES public.shop_orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE RESTRICT,
    quantity INTEGER NOT NULL,
    price_at_time DECIMAL(10, 2) NOT NULL
);

-- SETUP SUPABASE STORAGE (BUCKET UNTUK UPLOAD GAMBAR)
-- Catatan: Bucket bernama 'media' harus dibuat manual di Storage Dashboard jika script ini gagal
insert into storage.buckets (id, name, public) values ('media', 'media', true) on conflict do nothing;

-- Set Security Policies (Rls) untuk public access ke Storage
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "Auth Uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media');

-- ==========================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Mengaktifkan RLS untuk semua tabel
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shop_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shop_order_items ENABLE ROW LEVEL SECURITY;

-- A. Kebijakan "BACA" (SELECT) untuk Publik (Semua Orang)
-- Semua orang boleh membaca artikel, daftar event, dan daftar produk
CREATE POLICY "Public can view articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Public can view events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Public can view products" ON public.products FOR SELECT USING (true);

-- B. Kebijakan "TULIS" (INSERT) untuk Publik (Hanya untuk Checkout)
-- Publik HANYA boleh melakukan transaksi / membuat order tiket & produk.
-- Mereka TIDAK BOLEH mengubah harga atau menghapus order.
CREATE POLICY "Public can insert ticket orders" ON public.ticket_orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert shop orders" ON public.shop_orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert shop order items" ON public.shop_order_items FOR INSERT WITH CHECK (true);

-- C. Kebijakan ADMIN (INSERT, UPDATE, DELETE)
-- Dalam aplikasi ini, aksi Admin (tambah berita, edit produk) dilakukan melalui
-- API Route Next.js yang menggunakan Supabase Service Role Key (jika disetting)
-- ATAU melalui proses bypass yang ada di backend. 
-- Namun untuk berjaga-jaga agar aman dari koneksi klien Anonim:
-- TIDAK ADA kebijakan UPDATE/DELETE untuk anon. Hanya Admin yang memegang kunci SERVICE_ROLE yang bisa bypass RLS ini.
