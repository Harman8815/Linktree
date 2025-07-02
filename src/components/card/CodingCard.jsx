import React from "react";

const getBadgeColor = (label) => {
  if (
    label.toLowerCase().includes("problem") ||
    label.toLowerCase().includes("question")
  ) {
    return "bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100";
  } else if (label.toLowerCase().includes("rank")) {
    return "bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100";
  } else if (label.toLowerCase().includes("rating")) {
    return "bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100";
  } else {
    return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
  }
};

const CodingCard = ({ platform, img, stats, profile, darkBg }) => {
  return (
    <a
      href={profile}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col ring-blue-500 hover:ring-4 hover:scale-[1.01] sm:flex-row items-start sm:items-center gap-4 px-5 py-8 rounded-xl transition shadow-md hover:shadow-xl 
        ${darkBg ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
      `}
    >
      <img
        src={img}
        alt={platform}
        className="w-14 h-14 object-contain bg-white p-1 rounded-full border border-gray-300"
      />

      <div className="flex flex-col w-full gap-2">
        <h3 className="text-lg font-bold">{platform}</h3>

        <div className="flex flex-wrap gap-2">
          {stats.map((stat, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-medium rounded-full border
                ${getBadgeColor(stat.label)}
              `}
            >
              {`${stat.label} – ${stat.value}`}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default CodingCard;
