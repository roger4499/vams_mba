"use client";

import { useState } from "react";
import Confetti from "react-confetti";

export default function ConfettiButton() {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center">
      {show && <Confetti />}
      <button
        onClick={() => setShow(true)}
        className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        Celebrate 🎉
      </button>
    </div>
  );
}
