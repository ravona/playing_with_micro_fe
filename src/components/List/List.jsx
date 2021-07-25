const List = ({ list }) => {
  return (
    <div>
      <ul className="List">
        {list.map((item) => (
          <li className="List__item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
