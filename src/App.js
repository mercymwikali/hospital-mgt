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
          colorBorder:'#67336d',
          colorPrimaryBg	:'#47a5db',
          colorText:'#fff',
        },
        components: {
          Menu: {
            itemSelectedBg: '#67336d',
            itemColor: '#67336d',
            itemSelectedColor:'#fff',
            itemHoverBg:'rgba(103, 51, 109, 0.6)',
            itemHoverColor:'#fff',
          },
          Input:{
            hoverBorderColor:'#62c1db',
            activeBorderColor:'#62c1db',
            activeShadow:'rgb(0, 0, 0)'
          },
          Table:{
            headerBg	:'#67336d',
            itemColor:"#fff"
          },
          Dropdown:{
            itemColor:'#000'
          },
          Tabs:{
            colorTextDescription:'#000'

          }
        }
      }}>

      <AppRoutes />
    </ConfigProvider>

  );
}

export default App;
