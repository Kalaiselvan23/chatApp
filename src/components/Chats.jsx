import React from "react";

const Chats = () => {
  const message = {
    sender: "Kalasielvan",
    recentMessage: "Vanakam da mapla!! Chennai la irunthu",
    time: "9.58 PM",
  };
  return (
    <div className="chatGrid border-b-2 border-gray-200 p-1 ">
      <div className="pic-div">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25530c1b-5c89-4c85-8b65-8602af58c383/dfy9cl8-67904ad8-839e-468c-98d8-78a33da38cd3.png/v1/fit/w_828,h_494,q_70,strp/hd_pitbull_wallpaper__4__by_punkerlazar_dfy9cl8-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1NTMwYzFiLTVjODktNGM4NS04YjY1LTg2MDJhZjU4YzM4M1wvZGZ5OWNsOC02NzkwNGFkOC04MzllLTQ2OGMtOThkOC03OGEzM2RhMzhjZDMucG5nIiwiaGVpZ2h0IjoiPD0xMTQ0Iiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMjU1MzBjMWItNWM4OS00Yzg1LThiNjUtODYwMmFmNThjMzgzXC9wdW5rZXJsYXphci00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.kanhStcnkUOZLQw91zxsT70x_hymwqmLqBKf_j8dn_I"
          className=" profile-pic"
        />
      </div>
      <h1 className="font-semibold  text-base">{message.sender}</h1>
      <span className="text-gray-500">{message.recentMessage}</span>
      <p>{message.time}</p>
    </div>
  );
};

export default Chats;
