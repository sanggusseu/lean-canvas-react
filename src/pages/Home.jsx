import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaList, FaTh } from 'react-icons/fa';
import ItemCard from '../components/ItemCard';

function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: '친환경 도시 농업 플랫폼',
      lastEditedAt: '2024-09-18',
      category: '농업',
    },
    {
      id: 2,
      title: 'AI 기반 건강 관리 앱',
      lastEditedAt: '2024-09-18',
      category: '헬스케어',
    },
    {
      id: 3,
      title: '온디맨드 물류 서비스',
      lastEditedAt: '2024-09-18',
      category: '물류',
    },
    {
      id: 4,
      title: 'VR 가상 여행 서비스',
      lastEditedAt: '2024-09-18',
      category: '여행',
    },
  ]);

  const [search, setSearch] = useState('');
  const handleSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getFilterItems = () => {
    if (!search) {
      return items;
    }
    return items.filter(item => item.title.includes(search));
  };

  const filteredItems = getFilterItems();
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="검색"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="검색"
            value={search}
            onChange={handleSearch}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white`}
            aria-label="Grid view"
          >
            <FaTh />
          </button>
          <button
            className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200`}
            aria-label="List view"
          >
            <FaList />
          </button>
        </div>
      </div>

      {items.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">목록이 없습니다</p>
        </div>
      )}
      {filteredItems.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">검색 결과가 없습니다</p>
        </div>
      )}
      <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
        {filteredItems.map(item => (
          <ItemCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
