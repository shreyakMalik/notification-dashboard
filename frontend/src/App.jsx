import { useEffect, useState } from 'react';
import Tabs from './components/Tabs';
import TableView from './components/TableView';
import Forms from './components/Forms';
import { fetchData } from './api';

export default function App() {
  const [activeTab, setActiveTab] = useState('email');
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetchData(activeTab);
      setData(res);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <div className="app-container">
      <h2>Notification Dashboard</h2>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <TableView data={data} activeTab={activeTab} />

      <Forms activeTab={activeTab} refresh={loadData} />
    </div>
  );
}