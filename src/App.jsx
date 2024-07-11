

const irons=['0x460A252B4fEEFA821d3351731220627D7B7d1F3d', '0x460A252B4fEEFA821d3351731220627D7B7d1F3d', '0x460A252B4fEEFA821d3351731220627D7B7d1F3d', '0x460A252B4fEEFA821d3351731220627D7B7d1F3d']

function App() {
  
  return (
    <>
    <div className="mine-container">
      <main>
        <h1>Taxichain Iron Miner</h1>
        <div className="second">
        <h2>Halving:000</h2>
        <h3>Last decoded block: 0x0x</h3>
        </div> 
      </main>
      <h3>Irons Mined</h3>
      <div className="container">
        {irons.map((iron, i)=>{
          return <div className="cards" key={i}>{iron}</div>})}
        
               
      </div>
    </div>
    </>
  )
}

export default App
