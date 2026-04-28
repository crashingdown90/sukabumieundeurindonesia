"use client";
import dynamic from "next/dynamic";
import { useRef, useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";

// Use dynamic import to prevent SSR (Server Side Rendering) issues because Quill uses 'document'
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill-new");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function ReactQuillWrapper({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false, loading: () => <p>Loading editor...</p> }
);

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const formats = [
  "header",
  "bold", "italic", "underline", "strike", "blockquote",
  "list", "bullet",
  "link", "image",
];

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const quillRef = useRef<any>(null);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const token = localStorage.getItem("admin_token");
        // Upload image to our Supabase API Route
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
          headers: { "Authorization": `Bearer ${token}` }
        });
        
        const data = await res.json();
        
        if (data.url && quillRef.current) {
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range ? range.index : 0, "image", data.url);
        } else {
          alert("Gagal mengunggah gambar: " + (data.error || "Unknown error"));
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("Terjadi kesalahan saat mengunggah gambar.");
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), []);

  return (
    <div className="quill-dark-theme">
      <ReactQuill
        forwardedRef={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
