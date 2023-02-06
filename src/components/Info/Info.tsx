import gentelmanData from "../../gentelman.data";

const Info = () => {
  const count = gentelmanData.map((gentleman) => gentleman.selected);

  return <p className="info">{count}0 gentlemen pointing at you</p>;
};

export default Info;
