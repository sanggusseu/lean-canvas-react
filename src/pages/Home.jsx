import { useEffect, useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [dummyData, setDummyData] = useState([]);

  async function fetchData() {
    const data = await fetch('http://localhost:8000/canvases')
      .then(res => res.json())
      .catch(console.error);
    setDummyData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteItem = id => {
    setDummyData(dummyData.filter(item => item.id !== id));
  };

  const filteredData = dummyData.filter(item =>
    item.title.toLowerCase().includes(searchText.toLocaleLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <CanvasList
        filteredData={filteredData}
        searchText={searchText}
        isGridView={isGridView}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default Home;
