import './Home.styles.scss'

const Home = ({ dishes }) => {
  return (
      <>
        {dishes.map((item) => (
          <p className='home' key={item.id}>Id: {item.id}
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
          </p>
        ))}
      </>
  );
};

export default Home