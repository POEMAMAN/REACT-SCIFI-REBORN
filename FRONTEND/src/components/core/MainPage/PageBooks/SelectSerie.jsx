function SelectSerie({ changeSerie, Serie }) {
  const handleChange = (event) => {
    changeSerie(event.target.value);
  };
  return (
    <select onChange={handleChange} value={Serie}>
      <option value="Honorverse">Honorverse</option>
      <option value="Crown of slaves">Crown of slaves</option>
      <option value="Shadow">Shadow</option>
    </select>
  );
}
export default SelectSerie;
