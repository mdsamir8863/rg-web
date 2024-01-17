
const NameNumber = ({
  label1,
  inputType1,
  placeholder1,
  label2,
  inputType2,
  placeholder2,
}) => {
  return (
    <>
      <form>
        <label htmlFor="input1">{label1}</label>
        <input id="input1" type={inputType1} placeholder={placeholder1} />
        <label htmlFor="input2">{label2}</label>
        <input id="input2" type={inputType2} placeholder={placeholder2} />
      </form>
    </>
  );
};

export default NameNumber;
