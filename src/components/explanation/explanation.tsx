import { ExplanationUpdateArea } from "./explanation-styled";

const Explanation = () => {
  return (
    <ExplanationUpdateArea>
      <input type="text" placeholder="phrase" />
      <input type="text" placeholder="translation" />
      <input type="text" placeholder="explanation" />
    </ExplanationUpdateArea>
  );
};

export default Explanation;
