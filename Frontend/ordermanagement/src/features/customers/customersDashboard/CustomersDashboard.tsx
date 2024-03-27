import {useGetCustomersQuery} from '../../../graphql/generated/schema';

export default function CustomersDashboard() {
  const {data: customersData, loading, error} = useGetCustomersQuery();
  if (loading) return <p>Loading...</p>;
  if (error || !customersData) return <p>Error</p>;

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customersData.customers?.map((customer) => (
          <li key={customer?.id}>
            {customer?.firstName} {customer?.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}