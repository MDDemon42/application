import classes from './Author.module.css';

const AuthorInfo = ({last_name,first_name}) => (
    <div className={classes.AuthorInfo}>
        <div>
            <p>
                {last_name}
            </p>
        </div>
        <div>
            <p>
                {first_name}
            </p>
        </div>
    </div>
  )

export default AuthorInfo
