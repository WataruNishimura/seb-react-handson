import { useEffect, useState } from "react";

export default function TodoInput({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (title.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  }, [title]);

  useEffect(() => {
    if (content.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  }, [content]);

  const handleClick = () => {
    if(title.length > 0 && content.length > 0) {
      onSubmit({ title, content, date: new Date() });
      setTitle('');
      setContent('');
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col justify-center gap-3 w-[400px]">
      <label className="flex flex-col gap-1">
        <span>タイトル</span>
        <input
          className="rounded-md text-slate-800 p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="flex flex-col gap-1">
        <span>詳細</span>
        <textarea
          className="rounded-md text-slate-800 resize-none p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      {error && <p className="text-red-100 text-center font-bold">入力に不備があります！</p>}
      <button
        className="font-bold bg-slate-700 py-1 px-2 rounded-md"
        onClick={() => {
          handleClick();
        }}
      >
        追加
      </button>
    </div>
  );
}
