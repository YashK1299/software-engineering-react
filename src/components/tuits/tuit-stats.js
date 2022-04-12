const TuitStats = ({tuit, likeTuit, dislikeTuit}) => {
  return (
    <div className="row">
      ...
      <div className="col">
        <span onClick={() => likeTuit(tuit)}>
        {
          tuit.stats.likes > 0 &&
          <i className="fas fa-thumbs-up"
             style={{color: 'red'}}></i>
        }
        {
          tuit.stats.likes <= 0 &&
          <i className="far fa-thumbs-up"></i>
        }
        {tuit.stats && tuit.stats.likes}
        </span>
      </div>
      <div className="col">
        <span onClick={() => dislikeTuit(tuit)}>
        {
          tuit.stats.dislikes > 0 &&
          <i className="fas fa-thumbs-down"
             style={{color: 'red'}}></i>
        }
        {
          tuit.stats.dislikes <= 0 &&
          <i className="far fa-thumbs-down"></i>
        }
        {tuit.stats && tuit.stats.dislikes}
        </span>
      </div>
      ...
    </div>
  );
}
export default TuitStats