import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Statistics</h2>
        <a href="#">View More</a>
      </div>

      <div className="earning">
        <p>
          Blogs Viewed <span>187</span>
        </p>

        <p>
          Artwork Payed <span>5</span>
        </p>

        <p>
          Blog Pending <span>25</span>
        </p>

        <p>
          Blog Delivered <span>200</span>
        </p>

        <p>
          Total Earning <span>262 USD</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTopCard;
