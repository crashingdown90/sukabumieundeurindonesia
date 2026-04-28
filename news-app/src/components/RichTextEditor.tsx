"use client";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Use dynamic import to prevent SSR (Server Side Rendering) issues because Quill uses 'document'
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false, loading: () => <p>Loading editor...</p> });

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const modules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold", "italic", "underline", "strike", "blockquote",
  "list", "bullet",
  "link", "image",
];

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="quill-dark-theme">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
