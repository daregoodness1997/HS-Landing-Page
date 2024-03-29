import { createContext, useEffect, useState } from 'react';
import client from './feather';

export default function MyUserProvider({ children }) {
  //const [data, setData] = useState(null)
  const [user, setUser] = useState(null);
  const [authenticatingUser, setAuthenticatingUser] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const resp = await client.reAuthenticate();
        //console.log(resp);

        const user = {
          ...resp.user,
          currentEmployee: { ...resp.user.employeeData[0] },
        };

        await setUser(user);

        setAuthenticatingUser(false);
        return;
      } catch (error) {
        console.log(error);
        // history.push("/")
        setAuthenticatingUser(false);
      }
    })();
  }, []);

  const { Provider } = UserContext;
  return (
    <Provider value={{ user, setUser, authenticatingUser }}>
      {children}
    </Provider>
  );
}
export const UserContext = createContext();
export const ObjectContext = createContext();
export const MessageContext = createContext();
