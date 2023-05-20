const Header = () => {
  return (
    <header className='App-header'>
      <div id='title'>
        <h1>Guess My Number</h1>
        <h2 className='between'>{`<Between 1 and 20>`}</h2>
      </div>
    </header>
  );
};

export default Header;
