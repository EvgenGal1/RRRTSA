import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  return (
    <div className="EditPost">
      <div className="EditPost__descript">
        <h1>Edit Post</h1>
        <h2>Редактировать post {id}</h2>
      </div>
      <div className="EditPost__content"></div>
    </div>
  );
};
export { EditPost };
