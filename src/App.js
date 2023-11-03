import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4d6e94',
        },
        components: {
          Menu: {
            itemSelectedBg: '#D6B300',
            itemColor: '#fff'
          },
          Input:{
            hoverBorderColor:'#62c1db',
            activeBorderColor:'#62c1db',
            activeShadow:'rgb(0, 0, 0)'
          },
          Table:{
            headerBg	:'#4d6e94',
            itemColor:"#000"
          }
        }
      }}>

      <AppRoutes />
    </ConfigProvider>

  );
}

export default App;
