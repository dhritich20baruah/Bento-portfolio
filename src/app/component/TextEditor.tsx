"use client";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const TextEditor = () => {
  const DynamicEditor = useMemo(() => {
    return dynamic(() => import("react-quill"), {
      ssr: false,
      loading: () => <p>Loading...</p>,
    });
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const postObj = {
      title: title,
      content: content,
    };

    try {
      await axios.post("/api/posts", postObj);
      alert("Post added");
      window.location.reload();
    } catch (error) {
      console.error("Error adding article", error);
    }
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={submitHandler} className="space-y-3">
      <label htmlFor="title">Title</label>
      <br />
      <input
        className="w-[100%] p-2 border-2 border-gray-400 outline-none"
        type="text"
        value={title}
        name="title"
        placeholder="Enter a title"
        onChange={handleTitleChange}
        required
      />
      <DynamicEditor
        modules={modules}
        onChange={setContent}
        theme="snow"
        className="h-[50vh]"
      />
      <br /> <br />
      <button
        className="p-1 my-4 bg-green-900 text-white font-bold hover:bg-red-900"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default TextEditor