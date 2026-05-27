"use client";

import PageTemplate from "../../components/PageTemplate";
import ConfettiButton from "../../components/ConfettiButton";

export default function Page() {
  return (
    <PageTemplate
      title="Timeline"
      subtitle="SUBTimeline"
    >
      <div className="space-y-8">

        <div className="bg-pink-100 rounded-3xl p-6 shadow-md">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            Dear HER_NAME 💌
          </h2>

          <p className="leading-8 text-gray-700">
            Replace this section with emotional graduation memories,
            appreciation notes, romantic scrapbook messages,
            dreams, jokes, and heartfelt paragraphs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="polaroid">
            <img src="/images/photo2.jpg" className="rounded-xl" />
            <p className="mt-3 text-center">Editable memory caption ✨</p>
          </div>

          <div className="polaroid">
            <img src="/images/photo3.jpg" className="rounded-xl" />
            <p className="mt-3 text-center">Another memory 💖</p>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-3xl p-6">
          <h3 className="text-2xl font-bold mb-3">
            Surprise Popup 🎁
          </h3>

          <button
            onClick={() => alert("You are amazing HER_NAME! Love from YOUR_NAME 💕")}
            className="bg-yellow-400 px-5 py-3 rounded-full hover:scale-105 transition"
          >
            Click Me
          </button>
        </div>

        <div className="bg-purple-100 rounded-3xl p-6">
          <h3 className="text-2xl font-bold mb-4">
            Music Section 🎵
          </h3>

          <iframe
            className="w-full rounded-xl"
            height="315"
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="Music"
            allowFullScreen
          ></iframe>
        </div>

        <ConfettiButton />

      </div>
    </PageTemplate>
  );
}
