import { CreateLessonCollection } from "./lessons-collections-styled";

const LessonCollections = () => {
  return (
    <CreateLessonCollection>
      <h1>Collection</h1>

      <input type="text" />

      {/* <div>
        <label>Enabled:</label>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setLevel("");
          }}
        >
          <option value="">Select</option>
          <option value="true">TRUE</option>
          <option value="false">FALSE</option>
        </select>
      </div> */}
    </CreateLessonCollection>
  );
};

export default LessonCollections;
