"use client";

export function ResumeDownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Darsh_Gajdhar.pdf";
    link.download = "Darsh_Gajdhar.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-block bg-green-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-green-500 transition-colors interactive"
    >
      🔓 Unlock Resume
    </button>
  );
}
