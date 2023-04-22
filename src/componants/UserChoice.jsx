import classes from './popmov.module.css';

const UserChoice = ({ onUserChoice }) => {
  const onChoiceHandler = (e, value) => {
    e.preventDefault();
    onUserChoice(value);
  };
  return (
    <div className={classes.movieTag}>
      <h3 onClick={(e) => onChoiceHandler(e, 'Now Playing')}>Now Playing</h3>
      <h3 onClick={(e) => onChoiceHandler(e, 'Popular')}>Popular</h3>
      <h3 onClick={(e) => onChoiceHandler(e, 'Top Rated')}>Top Rated</h3>
      <h3 onClick={(e) => onChoiceHandler(e, 'Up Coming')}>Up Coming</h3>
    </div>
  );
};

export default UserChoice;