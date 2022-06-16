import { ThemeContext } from "@emotion/react";
import { useContext } from "react";
import { DefaultContext } from "../../Context";

export const ItemLists = ({ item, children, type }) => {
  const { handleCreateFan } = useContext(DefaultContext);

const { theme } = useContext(ThemeContext)

  return (
    <div key={item.name} className={`item-list-layout ${theme === "light" ? "light" : "dark"}`}>
      <div>
        <p>name: {item.name}</p>
        {children}
      </div>
      <div className="item-image-layout">
        {type === "chars" && (
          <button
            className="favorite-button"
            onClick={() => handleCreateFan(item)}
          >
            I am your fan!!
          </button>
        )}
        <img className="item-image" src={item.url} alt="asd" />
      </div>
    </div>
  );
};
