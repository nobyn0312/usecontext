// ①import
import { createContext ,useContext,useState } from 'react';
import ComponentA from './components/ComponentA'

//②定義
export const UserCount = createContext()

function App() {
      // useStateでカウントの初期値をセット
      const [count,setCount] =useState(100)
      // valueとして渡す値をセット
      const value ={
        count,
        setCount
      };
      // 
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Learn useContext</h1>
      {/* ③.Providerで使う */}
      <UserCount.Provider value={value}>
        <ComponentA/>

      </UserCount.Provider>    </div>
  );
}

export default App;