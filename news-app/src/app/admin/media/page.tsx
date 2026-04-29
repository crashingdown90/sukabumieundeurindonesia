"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface MediaFile {
  id: string;
  name: string;
  created_at: string;
  url: string;
}

export default function MediaLibrary() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const expiry = localStorage.getItem("admin_expiry");
    if (!token || !expiry || Date.now() > Number(expiry)) {
      router.push("/admin");
      return;
    }
    fetchMedia();
  }, [router]);

  const fetchMedia = () => {
    setLoading(true);
    fetch("/api/media")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setFiles(data);
        else console.error("Error fetching media:", data);
        setLoading(false);
      });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    setMessage("Mengunggah gambar...");
    
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch("/api/upload", { 
        method: "POST", 
        body: formData,
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      
      if (data.url) {
        setMessage("Gambar berhasil diunggah!");
        fetchMedia(); // Refresh list
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Gagal unggah: " + data.error);
      }
    } catch {
      setMessage("Error saat mengunggah gambar");
    }
    setUploading(false);
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setMessage("URL disalin ke clipboard!");
    setTimeout(() => setMessage(""), 2000);
  };

  if (loading) return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg-primary)" }}><p style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)" }}>LOADING MEDIA...</p></div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "120px 24px 80px" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>GALERI MEDIA</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", marginTop: "4px" }}>Kelola semua aset gambar Anda</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <Link href="/admin/dashboard" style={{ padding: "10px 20px", border: "1px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)", textDecoration: "none" }}>← DASHBOARD</Link>
            
            <input 
              type="file" 
              accept="image/*"
              id="library-upload"
              style={{ display: "none" }}
              onChange={handleUpload}
            />
            <button 
              onClick={() => document.getElementById('library-upload')?.click()}
              disabled={uploading}
              style={{ padding: "10px 20px", backgroundColor: "#22c55e", color: "#fff", border: "none", fontSize: "0.9rem", fontFamily: "var(--font-heading)", cursor: "pointer", fontWeight: "bold" }}
            >
              {uploading ? "UPLOADING..." : "+ UPLOAD GAMBAR"}
            </button>
          </div>
        </div>

        {message && (
          <div style={{ padding: "16px", marginBottom: "24px", backgroundColor: message.includes("berhasil") || message.includes("disalin") ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)", color: message.includes("berhasil") || message.includes("disalin") ? "#22c55e" : "#ef4444", border: `1px solid ${message.includes("berhasil") || message.includes("disalin") ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`, borderRadius: "4px", fontWeight: "bold" }}>
            {message}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
          {files.map((file) => (
            <div key={file.id} className="product-card" style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ height: "180px", position: "relative", backgroundColor: "#111" }}>
                <Image 
                  src={file.url} 
                  alt={file.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <p style={{ fontSize: "0.85rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: "8px", fontFamily: "var(--font-body)" }}>{file.name}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", marginBottom: "16px" }}>{new Date(file.created_at).toLocaleDateString('id-ID')}</p>
                <button 
                  onClick={() => copyToClipboard(file.url)}
                  style={{ width: "100%", padding: "8px", backgroundColor: "transparent", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", fontFamily: "var(--font-heading)", fontSize: "0.85rem", cursor: "pointer", letterSpacing: "1px", transition: "0.2s" }}
                >
                  COPY URL
                </button>
              </div>
            </div>
          ))}

          {files.length === 0 && !loading && (
            <div style={{ gridColumn: "1 / -1", padding: "60px 20px", textAlign: "center", border: "1px dashed var(--color-border)", color: "var(--color-text-secondary)", borderRadius: "8px" }}>
              Belum ada file media yang diunggah.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
