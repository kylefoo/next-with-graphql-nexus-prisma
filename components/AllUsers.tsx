import React from 'react';
import { useAllUsersQuery } from '../generated/graphql';

const AllUsers: React.FC = () => {
  const [result] = useAllUsersQuery();
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const renderAllUser = () => {
    if (data && data.allUsers) {
      return (data.allUsers.map(user => (
        <li key={user?.id}>{user?.name}</li>
      )))
    } else {
        return null
    }
  }
  
  return (
    <div>
      <p>There are {data && data.allUsers ? data?.allUsers.length : '0' } user(s) in the database:</p>
      <ul>
        {renderAllUser()}
      </ul>
    </div>
  );
};

export default AllUsers;
