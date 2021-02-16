import ProductsList from "./ProductsList";

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Shopping Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='sidebar'>Side Nav</div>
          <div className='main'>
            <ProductsList />
          </div>
        </div>
      </main>
      <footer>
        All right reserved, 2012
      </footer>
    </div>
  );
}

export default App;