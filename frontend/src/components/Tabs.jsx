export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = ['email', 'sms', 'whatsapp'];

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={activeTab === tab ? 'active' : ''}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}