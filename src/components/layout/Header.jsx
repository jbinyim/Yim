import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-30 w-full h-18.5 flex items-center justify-center backdrop-blur-sm bg-white/30 px-4 lg:px-0">
      <div className="w-269.5 h-full flex items-center justify-between">
        <nav>네비바</nav>
        <Link to="/" className="w-18.5 h-18.5">
          <img alt="로고 이미지" src="/logo.png" />
        </Link>
        <div>다국어</div>
      </div>
    </header>
  );
}
