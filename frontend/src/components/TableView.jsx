export default function TableView({ data, activeTab }) {
  if (!data.length) return <p className="empty-text">No records found</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          {activeTab === 'email' && <th>Email To</th>}
          {activeTab !== 'email' && <th>Mobile Number</th>}
          {activeTab !== 'email' && <th>Message</th>}
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            {activeTab === 'email' && <td>{item.emailTo}</td>}
            {activeTab !== 'email' && <td>{item.mobileNumber}</td>}
            {activeTab !== 'email' && <td>{item.message}</td>}
            <td>{new Date(item.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}