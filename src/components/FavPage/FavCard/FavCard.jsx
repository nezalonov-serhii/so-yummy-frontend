import Link from 'react-router-dom';

export const FavCard = ({
  _id,
  title,
  preview,
  description,
  time,
  onDelete,
}) => {
  return (
    <>
      <div>
        <div>
          <img src={preview} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <button type="button" onDelete={onDelete}></button>
        </div>
        <p>{description}</p>
        <div>
            <p>{time}</p>
            <Link to={`api/favorite${_id}`}>
                <button >see recipe</button>
            </Link>
        </div>
      </div>
    </>
  );
};
