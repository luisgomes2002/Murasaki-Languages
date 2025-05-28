import { Editor } from "@tiptap/react";
import { MenuButton, MenuContainer } from "./menu-bar-styled";

interface MenuBarProps {
  editor: Editor | null;
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <MenuContainer
      style={{
        display: "flex",
        gap: "8px",
        padding: "8px",
        flexWrap: "wrap",
      }}
    >
      <MenuButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        title="Bold"
      >
        <i className="fa-solid fa-bold"></i>
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        title="Italic"
      >
        <i className="fa-solid fa-italic"></i>
      </MenuButton>
      <MenuButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={editor.isActive("strike")}
        title="Strikethrough"
      >
        <i className="fa-solid fa-strikethrough"></i>
      </MenuButton>
    </MenuContainer>
  );
};

export default MenuBar;
