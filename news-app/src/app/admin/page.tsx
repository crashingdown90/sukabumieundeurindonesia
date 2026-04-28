"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("admin_token", data.token);
        localStorage.setItem("admin_expiry", String(Date.now() + 24 * 60 * 60 * 1000));
        router.push("/admin/dashboard");
      } else {
        setError("PIN salah. Coba lagi.");
      }
    } catch {
      setError("Server error.");
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg-primary)", padding: "24px" }}>
      <div style={{ maxWidth: "400px", width: "100%", border: "1px solid var(--color-border)", padding: "48px 32px", backgroundColor: "var(--color-bg-secondary)", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "8px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>ADMIN PORTAL</h1>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "40px", fontSize: "0.95rem" }}>Masukkan PIN untuk mengakses dashboard redaksi.</p>

        <input
          type="password"
          maxLength={6}
          placeholder="● ● ● ● ● ●"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          style={{ 
            width: "100%", padding: "20px", fontSize: "2rem", textAlign: "center", letterSpacing: "16px",
            border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)",
            fontFamily: "monospace", outline: "none", marginBottom: "24px"
          }}
        />

        {error && <p style={{ color: "#ef4444", marginBottom: "16px", fontWeight: "bold" }}>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading || pin.length < 6}
          style={{
            width: "100%", padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px",
            backgroundColor: pin.length === 6 ? "var(--color-text-primary)" : "var(--color-metal-grey)",
            color: "var(--color-bg-primary)", border: "none", cursor: pin.length === 6 ? "pointer" : "not-allowed",
            transition: "all 0.3s"
          }}
        >
          {loading ? "VERIFYING..." : "ENTER DASHBOARD"}
        </button>

        <a href="/" style={{ display: "block", marginTop: "24px", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>← Kembali ke News</a>
      </div>
    </div>
  );
}
