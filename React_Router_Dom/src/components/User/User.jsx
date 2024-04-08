import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-center text-3xl p-4 text-green-600 italic">
      User: {userid}
    </div>
  );
}

export default User;
