"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("admin_token", data.token);
        // Valid for 2 hours
        localStorage.setItem("admin_expiry", (Date.now() + 2 * 60 * 60 * 1000).toString());
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Login gagal");
      }
    } catch {
      setError("Terjadi kesalahan server");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg-primary)" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "40px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)" }}>
        <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", textAlign: "center", marginBottom: "32px", letterSpacing: "2px" }}>
          TICKET ADMIN
        </h1>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px", fontSize: "0.9rem" }}>ADMIN PIN</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              style={{
                width: "100%", padding: "16px", fontSize: "1.2rem", textAlign: "center", letterSpacing: "8px",
                border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-primary)",
                color: "var(--color-text-primary)", outline: "none", fontFamily: "monospace"
              }}
              autoFocus
            />
          </div>

          {error && <p style={{ color: "#ef4444", fontWeight: "bold", textAlign: "center", fontSize: "0.9rem" }}>{error}</p>}

          <button type="submit" style={{ padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", cursor: "pointer", border: "none", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontWeight: "bold", marginTop: "12px" }}>
            MASUK
          </button>
        </form>
      </div>
    </div>
  );
}
