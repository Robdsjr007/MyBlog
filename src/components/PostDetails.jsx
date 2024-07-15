import { Link } from "react-router-dom";
import styles from "./PostDetails.module.css";
import { useAuthentication } from "../hooks/useAuthentication";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';

const PostDetail = ({ post }) => {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {user && user.uid == post.uid ? "Minha publicação" : post.createdBy}</p>
      <p className={styles.label}>{post.body}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;