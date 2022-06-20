const Rating = ({ rating }) => {
  const stars = Array(rating).fill();
  return (
    <div>
      {stars.map((star, i) => (
        <span key={i}>*</span>
      ))}
    </div>
  );
};

export default Rating;
